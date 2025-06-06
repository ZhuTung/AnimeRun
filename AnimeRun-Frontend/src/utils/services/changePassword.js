import axios from "axios";

const changePassword = async ({
  userId,
  currentPassword,
  newPassword,
  confirmPassword,
}) => {
  try {
    const response = await axios.patch(
      "http://localhost:8080/api/account/changePassword",
      {
        userId,
        currentPassword,
        newPassword,
        confirmPassword,
      }
    );

    return response;
  } catch (err) {
    throw new Error(err.response?.data?.message);
  }
};

export default changePassword;
