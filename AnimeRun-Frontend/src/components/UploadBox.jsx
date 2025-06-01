import React, { useRef, useState } from "react";
import { FaFileUpload } from "react-icons/fa";
import { motion, useAnimation } from "framer-motion";

const UploadBox = ({ onChange }) => {
  const fileInputRef = useRef(null);
  const iconControls = useAnimation();

  const startIconBounce = () => {
    iconControls.start({
      y: [-10, 0, -10],
      transition: {
        duration: 0.5,
        repeat: Infinity,
        repeatType: "loop",
      },
    });
  };

  const stopIconBounce = () => {
    iconControls.stop();
    iconControls.set({ y: 0 });
  };

  const handleButtonClick = (e) => {
    e.preventDefault();
    fileInputRef.current.click();
  };

  return (
    <div>
      <form>
        <button
          onClick={handleButtonClick}
          onMouseEnter={startIconBounce}
          onMouseLeave={stopIconBounce}
        >
          <div className="shadow-[0px_0px_2px_gray] rounded-lg px-[8rem] py-[4rem] flex flex-col items-center justify-center w-[100%]">
            <motion.div
              animate={iconControls}
              className="py-[2rem] text-[5rem]"
            >
              <FaFileUpload />
            </motion.div>

            <div className="pb-[2rem] flex flex-col text-center">
              Upload your RunKeeper (CSV) file here{" "}
              <span>
                Make sure your file name ends after '_rk'{" "}
                <b>(e.g: test_rk.csv)</b>
              </span>
            </div>
          </div>
        </button>

        <input
          type="file"
          accept=".csv"
          ref={fileInputRef}
          className="hidden"
          onChange={onChange}
        />
      </form>
    </div>
  );
};

export default UploadBox;
