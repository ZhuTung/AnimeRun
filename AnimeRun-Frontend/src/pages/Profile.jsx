import { useState } from "react";
import { useSelector } from "react-redux";
import Button from "../components/Button";
import ChangePassword from "../components/ChangePassword";

const Profile = () => {
  const user = useSelector((state) => state.auth.user);

  const [changePasswordFlag, setChangePasswordFlag] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex flex-col justify-center items-center">
      <div className="bg-white max-w-md w-full rounded-2xl shadow-lg p-6 text-center">
        <h1 className="text-3xl font-bold">{user?.username}</h1>
        <p className="text-gray-600 mt-2">
          {user?.last_name} {user?.first_name}
        </p>

        <div className="mt-6 text-left space-y-2">
          <p>
            <span className="font-semibold">Email:</span> {user?.email}
          </p>
          <p>
            <span className="font-semibold">Gender:</span> {user?.gender}
          </p>
          <p>
            <span className="font-semibold">Age:</span>
            &nbsp;{user?.age}
          </p>
        </div>
      </div>

      <div>
        <Button
          onClick={() => setChangePasswordFlag(true)}
          className={"w-[6.5rem] mt-[2.5rem]"}
        >
          Change Password
        </Button>
      </div>

      {changePasswordFlag && (
        <ChangePassword
          changePasswordFlag={changePasswordFlag}
          setChangePasswordFlag={setChangePasswordFlag}
        />
      )}
    </div>
  );
};

export default Profile;
