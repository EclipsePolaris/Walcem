// src/routes/index.js

import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import BlogPage from "../pages/BlogPage";
import PrivacyPolicyPage from "../pages/PrivacyPolicyPage";
import HomePage from "../pages/HomePage"; // Se você tiver uma página inicial

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/blog" component={BlogPage} />
        <Route path="/privacy-policy" component={PrivacyPolicyPage} />
      </Switch>
    </Router>
  );
};

export default Routes;
