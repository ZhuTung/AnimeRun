import React, { useEffect, useState } from "react";
import UploadBox from "../components/UploadBox";
import useUploadFile from "../utils/hooks/useUploadFile";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";

const UploadCsv = () => {
  const [fileName, setFileName] = useState("");
  const [file, setFile] = useState(null);

  const user = useSelector((state) => state.auth.user);

  console.log(user);
  const useFileUploadMutation = useUploadFile();

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const name = file.name;
      if (!name.endsWith("_rk.csv")) {
        alert("Please upload a valid RunKeeper CSV file.");
      } else {
        useFileUploadMutation.mutate(
          { file, userId: user.id },
          {
            onSuccess: () => {
              toast.success("File uploaded successfully!");
            },
            onError: (err) => {
              toast.error("File upload failed: " + err.message);
            },
          }
        );
      }
    }
  };

  return (
    <div>
      <div className="flex items-center justify-center h-screen">
        <UploadBox onChange={handleFileChange} />
      </div>
    </div>
  );
};

export default UploadCsv;
