import axios from "axios";

const login = async ({username, password}) => {
  const response = await axios.post("http://localhost:8080/api/account/login", {
    username,
    password,
  });

  return response.data;
};

export default login;
