import axios from "axios";

const getRecord = async (userId) => {
  try {
    const response = await axios.get(
      `http://localhost:8080/api/record/getRecord/${userId}`
    );

    return response.data;
  } catch (err) {
    console.error(err);
  }
};

export default getRecord;
