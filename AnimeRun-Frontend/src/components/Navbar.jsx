import React, { useState, useEffect } from "react";
import {
  IoIosArrowDroprightCircle,
  IoIosArrowDropleftCircle,
} from "react-icons/io";
import { motion } from "framer-motion";
import { navbarLinks } from "../utils/items/navbar";
import Button from "./Button";
import { useNavigate, Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const user = useSelector((state) => state.auth.user);

  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, [user]);

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
        initial={{ x: -200 }}
        animate={{ x: isOpen ? 0 : -200 }}
        transition={{ duration: 0.5, ease: "linear" }}
        className="bg-blue-500 w-[200px] h-[100vh] relative"
      >
        <div
          className="text-[35px] absolute -right-5 cursor-pointer"
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
                  <motion.div
                    whileHover={{
                      backgroundColor: "rgba(0, 0, 0, 0.5)",
                      color: "rgb(255, 255, 255)",
                    }}
                    className="px-4 py-2 rounded-md transition-colors"
                  >
                    <Link
                      to={item.link}
                      className="block w-full text-white hover:text-white"
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex justify-center mb-[10px]">
            <Button className="p-[0.5rem] !bg-black" onClick={handleLogout}>
              Log Out
            </Button>
          </div>
        </div>
      </motion.nav>
    </div>
  );
};

export default Navbar;
