import React, { useState } from "react";
import {
  IoIosArrowDroprightCircle,
  IoIosArrowDropleftCircle,
} from "react-icons/io";
import { motion } from "framer-motion";
import { navbarLinks } from "../utils/items/navbar";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <div
      style={{
        backgroundColor: isOpen
          ? "rgba(0, 0, 0, 0.8)"
          : "rgba(255, 255, 255, 0)",
      }}
      className={isOpen ? "w-screen fixed z-10" : ""}
    >
      <motion.nav
        initial={{
          x: -200,
        }}
        animate={{
          x: isOpen ? 0 : -200,
        }}
        transition={{
          duration: 0.5,
          ease: "linear",
        }}
        className="bg-blue-500 w-[200px] h-[100vh] relative"
      >
        <div
          className="text-[35px] absolute -right-5"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <IoIosArrowDropleftCircle />
          ) : (
            <IoIosArrowDroprightCircle />
          )}
        </div>

        <div className="flex flex-col justify-between h-full">
          <div className="p-[1rem] text-center">
            <ul>
              {navbarLinks.map((item, index) => (
                <li key={index} className="my-[1.5rem]">
                  <motion.a
                    href={item.link}
                    whileHover={{
                      backgroundColor: "rgba(0, 0, 0, 0.5)",
                      color: "white",
                    }}
                    className="block px-4 py-2 rounded-md cursor-pointer transition-colors "
                  >
                    {item.name}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex justify-center mb-[10px]">
            <Button className={"p-[0.5rem] !bg-black"} onClick={handleLogout}>
              Log Out
            </Button>
          </div>
        </div>
      </motion.nav>
    </div>
  );
};

export default Navbar;
