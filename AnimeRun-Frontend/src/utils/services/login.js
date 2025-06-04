import axios from "axios";

const login = async ({ username, password }) => {
  try {
    const response = await axios.post(
      "http://localhost:8080/api/account/login",
      {
        username,
        password,
      }
    );

    return response.data;
  } catch (err) {
    throw new Error(err.response?.data?.message);
  }
};

export default login;
