import React, { useEffect, useState } from "react";
import UploadBox from "../components/UploadBox";

const UploadCsv = () => {
  const [fileName, setFileName] = useState("");

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const name = file.name;
      if (!name.endsWith("_rk.csv")) {
        alert("Please upload a valid RunKeeper CSV file.");
      } else {
        setFileName(name);
        alert("File uploaded successfully!");
      }
    }
  };

  useEffect(() => {
    console.log(fileName);
  }, []);

  return (
    <div>
      <div className="flex items-center justify-center h-screen">
        <UploadBox onChange={handleFileChange} />
      </div>
    </div>
  );
};

export default UploadCsv;
