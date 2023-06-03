import React, { useState } from "react";
import { Button } from "@mui/material";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

const ThemeToggle = () => {
  const [themeMode, setThemeMode] = useState("light");

  const handleThemeChange = () => {
    const themeLink = document.getElementById("theme-link");
    const icon = document.getElementById("theme-icon");

    if (themeMode === "light") {
      themeLink.href = "light-theme.css";
      setThemeMode("dark");
      icon.style.color = "white";
    } else {
      themeLink.href = ""; // Reset to default theme
      setThemeMode("light");
      icon.style.color = "black";
    }
  };

  return (
    <Button onClick={handleThemeChange}>
      {themeMode === "light" ? (
        <Brightness4Icon id="theme-icon" />
      ) : (
        <Brightness7Icon id="theme-icon" />
      )}
    </Button>
  );
};

export default ThemeToggle;
