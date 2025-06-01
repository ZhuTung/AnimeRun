import React from "react";
import Login from "./pages/Login";
import Landing from "./pages/Landing";
import { BrowserRouter as Router, useRoutes } from "react-router-dom";
import routes from "./utils/routes/routesConfig";

const AppRoutes = () => useRoutes(routes);

const App = () => {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
};

export default App;
