import { useMutation } from "@tanstack/react-query";
import uploadFile from "../services/uploadFile";

function useUploadFile() {
  return useMutation({
    mutationKey: ["uploadFile"],
    mutationFn: uploadFile,
  });
}

export default useUploadFile;
