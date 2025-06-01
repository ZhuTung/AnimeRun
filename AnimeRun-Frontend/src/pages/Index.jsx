import React from "react";
import Navbar from "../components/Navbar";

const Index = ({ children }) => {
  return (
    <div>
      <div className="absolute">
        <Navbar />
      </div>

      {children}
    </div>
  );
};

export default Index;
