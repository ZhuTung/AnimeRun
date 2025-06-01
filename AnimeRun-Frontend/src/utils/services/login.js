import axios from "axios";

const login = () => {
  axios.post("http://localhost:8080/api/account/login", {
    email: "",
    password: "",
  });
};

module.exports = login;
