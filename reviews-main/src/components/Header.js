import React from "react";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Button from "@mui/material/Button";

const Header = ({ handleToggleDarkMode }) => {
  return (
    <div className="header">
      <h1>
        Bucket List 🪣
      </h1>
      <Button
        onClick={() =>
          handleToggleDarkMode((previousDarkMode) => !previousDarkMode)
        }
        className="save"
      >
        <Brightness4Icon />
      </Button>
    </div>
  );
};

export default Header;
