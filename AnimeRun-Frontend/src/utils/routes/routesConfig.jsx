import Home from "../../pages/Home";
import Profile from "../../pages/Profile";
import Login from "../../pages/Login";
import Landing from "../../pages/Landing";
import Index from "../../pages/Index";
import Register from "../../pages/Register";
import UploadCsv from "../../pages/UploadCsv";

const routes = [
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/home",
    element: (
      <Index>
        <Home />
      </Index>
    ),
  },
  {
    path: "/profile",
    element: (
      <Index>
        <Profile />
      </Index>
    ),
  },
  {
    path: "/upload-csv",
    element: (
      <Index>
        <UploadCsv />
      </Index>
    ),
  },
];

export default routes;
