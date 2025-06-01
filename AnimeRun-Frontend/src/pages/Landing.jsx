import React from "react";
import "../styles/pages/landing.css";
import { motion } from "framer-motion";
import { GiRun, GiLightningHelix, GiHealthIncrease } from "react-icons/gi";
import { landingItems } from "../utils/items/landing";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

const Landing = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login");
  };

  return (
    <div>
      <div className="landing-bg">
        <div className="pb-[2rem]">
          <header className="absolute pl-3">
            <img src="src/assets/logo.png" alt="logo" width={200} />
          </header>

          <header className="absolute right-10 top-10 z-1">
            <Button className={"w-[6.5rem] h-[2.5rem]"} onClick={handleLogin}>
              Log In
            </Button>
          </header>

          <motion.h1
            initial={{
              opacity: 0,
              fontSize: "0",
            }}
            whileInView={{
              opacity: 1,
              fontSize: "2.5rem",
            }}
            transition={{
              duration: 1,
              ease: "easeOut",
            }}
            className="header"
          >
            READY FOR THE RUN OF YOUR LIFE
          </motion.h1>
        </div>
      </div>
      <div className="py-[2rem]">
        <h1 className="text-center text-[3rem] mb-[0.8rem]">Aim of the Run</h1>

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
            ease: "linear",
          }}
          className="aim-card mx-[4rem] my-[2rem]"
        >
          <div className="mx-[0.8rem]">
            <GiRun className="text-blue-500 text-[50px]" />
          </div>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
            dolorum, ab excepturi necessitatibus similique voluptatibus quas
            quidem quae repellat architecto minus ea tempora corporis
            accusantium enim asperiores recusandae ipsam mollitia.
          </p>
        </motion.div>

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
            ease: "linear",
          }}
          className="aim-card mx-[4rem] my-[2rem]"
        >
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
            dolorum, ab excepturi necessitatibus similique voluptatibus quas
            quidem quae repellat architecto minus ea tempora corporis
            accusantium enim asperiores recusandae ipsam mollitia.
          </p>
          <div className="mx-[0.8rem]">
            <GiLightningHelix className="text-yellow-500 text-[50px]" />
          </div>
        </motion.div>

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
            ease: "linear",
          }}
          className="aim-card mx-[4rem] my-[2rem]"
        >
          <div className="mx-[0.8rem]">
            <GiHealthIncrease className="text-green-500 text-[50px]" />
          </div>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
            dolorum, ab excepturi necessitatibus similique voluptatibus quas
            quidem quae repellat architecto minus ea tempora corporis
            accusantium enim asperiores recusandae ipsam mollitia.
          </p>
        </motion.div>
      </div>

      <div>
        <div className="bg-blue-900 overflow-hidden w-full pb-[1.5rem]">
          <motion.div
            className="flex whitespace-nowrap"
            animate={{ x: ["-100%", "0%"] }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <span className="flex">
              <p className="w-marquee">JUST RUN IT | RUN TO THE GROOVE |</p>
              <p className="w-marquee">JUST RUN IT | RUN TO THE GROOVE |</p>
            </span>
            <span className="flex">
              <p className="w-marquee">JUST RUN IT | RUN TO THE GROOVE |</p>
              <p className="w-marquee">JUST RUN IT | RUN TO THE GROOVE |</p>
            </span>
          </motion.div>
        </div>
      </div>

      <div className="py-[2rem]">
        <div className="grid grid-cols-3 gap-[2rem] m-[2rem]">
          {landingItems.map((item, index) => (
            <motion.div
              whileHover={{
                y: -10,
                boxShadow: "0px 10px 20px gray",
              }}
              transition={{
                duration: 0.2,
                ease: "easeInOut",
              }}
              id={index}
              className="target-card h-[250px]"
            >
              <p className="mb-[0.5rem] font-bold">{item.heading}</p>
              <p>{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <footer>
        <div className="flex justify-center items-center h-[3rem] bg-blue-900 text-white">
          <p>© 2025 Anime Run. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
