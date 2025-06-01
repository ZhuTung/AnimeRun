import React, { useState } from "react";
import "../styles/pages/login.css";
import Textbox from "../components/Textbox";
import Button from "../components/Button";
import { motion } from "framer-motion";

const Register = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="login-bg flex flex-row overflow-hidden">
      <motion.div
        initial={{
          x: -200,
          opacity: 0,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        transition={{
          duration: 1,
          ease: "easeInOut",
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
          opacity: 0,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        transition={{
          duration: 1,
          ease: "easeInOut",
        }}
        className="flex flex-col container w-[50%] ml-8 justify-evenly"
      >
        <div>
          <Textbox
            label="Name"
            id="name"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            className={"p-2"}
          />
        </div>
        <div>
          <Textbox
            label="Age"
            id="age"
            placeholder="Enter your age"
            value={age}
            onChange={(e) => {
              setAge(e.target.value);
            }}
            className={"p-2"}
          />
        </div>
        <div>
          <Textbox
            label="Gender"
            id="gender"
            placeholder="Enter your gender"
            value={gender}
            onChange={(e) => {
              setGender(e.target.value);
            }}
            className={"p-2"}
          />
        </div>
        <div>
          <Textbox
            label="Email"
            id="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            className={"p-2"}
          />
        </div>
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

        <div className="mt-[1.5rem]">
          <Button className={"w-[6.5rem] h-[2.5rem]"}>Register</Button>
        </div>
      </motion.div>
    </div>
  );
};

export default Register;
