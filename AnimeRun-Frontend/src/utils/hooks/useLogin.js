import {useMutation } from "@tanstack/react-query";
import login from "../services/login";

function useLogin() {
  return useMutation({
    mutationKey: ["login"],
    mutationFn: login,
  });
}

export default useLogin;
