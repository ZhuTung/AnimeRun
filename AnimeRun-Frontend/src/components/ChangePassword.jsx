import React, { useState } from "react";
import Button from "./Button";
import Textbox from "./Textbox";
import toast from "react-hot-toast";

const ChangePassword = ({ changePasswordFlag, setChangePasswordFlag }) => {
  const [formData, setFormData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  if (!changePasswordFlag) return null;

  return (
    <div
      style={{ background: "rgba(0, 0, 0, 0.8)" }}
      className="fixed inset-0 flex items-center justify-center"
    >
      <div className="bg-white p-6 rounded-lg shadow-lg w-[400px]">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Change Password</h2>
          <button
            onClick={() => setChangePasswordFlag(false)}
            className="text-gray-500 hover:text-gray-700"
          >
            ×
          </button>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">
              Current Password
            </label>
            <Textbox
              type="password"
              name="currentPassword"
              placeholder="Enter current password"
              value={formData.currentPassword}
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              New Password
            </label>
            <Textbox
              type="password"
              name="newPassword"
              placeholder="Enter new password"
              value={formData.newPassword}
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Confirm New Password
            </label>
            <Textbox
              type="password"
              name="confirmPassword"
              placeholder="Confirm new password"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
          </div>

          <div className="flex space-x-4 mt-6">
            <Button
              className={"px-[0.5rem]"}
              onClick={() => {
                // Add your password change logic here
                console.log(formData);
                setChangePasswordFlag(false);
              }}
            >
              Confirm
            </Button>
            <Button
              className={"px-[0.5rem]"}
              onClick={() => {
                setChangePasswordFlag(false);
                toast.error("Password change cancelled");
              }}
            >
              Cancel
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChangePassword;
