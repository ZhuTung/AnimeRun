import { BrowserRouter as Router, useRoutes } from "react-router-dom";
import routes from "./utils/routes/routesConfig";
import { Toaster } from "react-hot-toast";
const AppRoutes = () => useRoutes(routes);

const App = () => {
  return (
    <Router>
      <Toaster position="top-right" reverseOrder={false} />
      <AppRoutes />
    </Router>
  );
};

export default App;
