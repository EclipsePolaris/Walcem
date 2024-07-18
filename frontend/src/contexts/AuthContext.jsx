// Configuração do Contexto de Autenticação

import { createContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import PropTypes from 'prop-types'; // Importação de PropTypes

// Criação do contexto de autenticação
const AuthContext = createContext();

// Provedor do contexto de autenticação
export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        // Função para carregar o usuário a partir do token armazenado no localStorage
        const loadUser = async () => {
            const token = localStorage.getItem('token');
            if (token) {
                try {
                    // Solicitação para obter os dados do usuário
                    const { data } = await axios.get('/api/auth/me', {
                        headers: { 'Authorization': `Bearer ${token}` }
                    });
                    setUser(data); // Define o usuário com os dados recebidos
                } catch (error) {
                    console.error(error);
                }
            }
        };
        loadUser(); // Carrega o usuário quando o componente é montado
    }, []);

    // Função de login
    const login = async (email, password) => {
        try {
            const { data } = await axios.post('/api/auth/login', { email, password });
            localStorage.setItem('token', data.token); // Armazena o token no localStorage
            setUser(data.user); // Define o usuário com os dados recebidos
            navigate('/'); // Redireciona para a página inicial
        } catch (error) {
            console.error(error);
        }
    };

    // Função de logout
    const logout = () => {
        localStorage.removeItem('token'); // Remove o token do localStorage
        setUser(null); // Define o usuário como null
        navigate('/login'); // Redireciona para a página de login
    };

    // Provedor do contexto com os valores user, login e logout
    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

// Validação de propriedades do AuthProvider usando PropTypes
AuthProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export default AuthContext;
