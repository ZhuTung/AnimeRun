import React, { useState } from "react";
import "../styles/pages/login.css";
import Textbox from "../components/Textbox";
import Button from "../components/Button";
import { motion } from "framer-motion";

import useLogin from '../utils/hooks/useLogin'
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../store/authSlice";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const useLoginMutation = useLogin();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = () => {
    console.log("Login Button clicked", username, password)
    useLoginMutation.mutate({username, password},
      {
        onSuccess: (data) => {
          console.log(data)
          dispatch(login({ user: data }));
          navigate("/home")
        },
        onError: (err) => {
          console.error(err)
        }
      }
    )
  }

  return (
    <div className="login-bg flex flex-row overflow-hidden">
      <motion.div 
      initial={{
        x: -200,
        opacity: 0
      }}
      whileInView={{
        x: 0,
        opacity: 1
      }}
      transition={{
        duration: 1,
        ease: "easeInOut"
      }}
      >
        <img
          src="src\assets\track-field-2.jpeg"
          alt="track-field-2"
          width={350}
          height={350}
          className="rounded-[0.5rem]"
        />
      </motion.div>

      <motion.div
      initial={{
        x: 200,
        opacity: 0
      }}
      whileInView={{
        x: 0,
        opacity: 1
      }}
      transition={{
        duration: 1,
        ease: "easeInOut"
      }}
      className="flex flex-col container h-[40%] w-[50%] ml-8 justify-evenly">
        <div>
          <Textbox
            label="Username"
            id="username"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            className={"p-2"}
          />
        </div>

        <div>
          <Textbox
            label="Password"
            id="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            className={"p-2"}
            isPassword={true}
          />
        </div>

        <div>
          <Button onClick={handleLogin} className={'w-[6.5rem] h-[2.5rem]'}>Login</Button>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;
