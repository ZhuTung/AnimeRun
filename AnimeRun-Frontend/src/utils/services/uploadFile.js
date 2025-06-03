import axios from "axios";

const uploadFile = async ({ file }) => {
  try {
    const formData = new FormData();
    formData.append("file", file);
    const response = await axios.post(
      "http://localhost:8080/api/record/uploadFile",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    return response;
  } catch (err) {
    console.err(err);
  }
};

export default uploadFile;
