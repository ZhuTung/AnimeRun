import { useMutation } from "@tanstack/react-query";
import register from "../services/register";

function useRegister(){
    return useMutation({
        mutationKey: [""],
        mutationFn: register
    });
}

export default useRegister;