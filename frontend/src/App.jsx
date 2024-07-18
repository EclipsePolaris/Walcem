import "react"; // Mantenha a importação de React, pois estamos usando JSX
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Use Routes em vez de Switch
import Navigation from "./components/routes/Navigation.js";
import Blog from "./components/blogPage/Blog.js";
import PrivacyPolicy from "./components/politicsPage/privacy-policy.js"; // Corrigido nome do componente
import "./css/privacy.css"; // A importação de CSS é mantida

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Routes>
          {" "}
          {/* Use Routes em vez de Switch */}
          <Route path="/" element={<Blog />} />{" "}
          {/* Use element em vez de component */}
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />{" "}
          {/* Corrigido uso de element */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
