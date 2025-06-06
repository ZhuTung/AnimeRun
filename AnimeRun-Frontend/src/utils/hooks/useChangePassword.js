import { useMutation } from "@tanstack/react-query";
import changePassword from "../services/changePassword";

function useChangePassword() {
  return useMutation({
    mutationKey: ["changePassword"],
    mutationFn: changePassword,
  });
}

export default useChangePassword;
