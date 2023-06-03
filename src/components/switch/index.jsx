import React from "react";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import "./index.css";

const Switch = () => {
  const handleClick = () => {
    document.body.classList.toggle("light");
    document.getElementById("switch").classList.toggle("active");
  };

  return (
    <button className="switch" id="switch" onClick={handleClick}>
      <span>
        <Brightness7Icon />
      </span>
      <span>
        <Brightness4Icon />
      </span>
    </button>
  );
};

export default Switch;
