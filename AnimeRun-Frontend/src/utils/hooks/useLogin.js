const { useMutation } = require("@tanstack/react-query");
const login = require("../services/login");

function useLogin() {
  useMutation(["login"], login);
}

module.exports = useLogin;
