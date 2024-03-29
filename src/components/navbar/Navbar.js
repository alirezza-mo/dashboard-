import React from "react";
import "./Navbar.css";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import LanguageIcon from "@mui/icons-material/Language";
import SettingsIcon from "@mui/icons-material/Settings";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="navbarWrapper">
        <div className="navLeft">
          <span className="logo">DashBoard ⚒️</span>
        </div>
        <div className="navRight">
          <div className="navIconCont">
            <NotificationsActiveIcon />
            <span className="badge">2</span>
          </div>
          <div className="navIconCont">
            <LanguageIcon />
            <span className="badge">5</span>
          </div>
          <div className="navIconCont">
            <SettingsIcon />
          </div>
          <img src="./images/me.jpg" alt="#"  className="navImg"/>
        </div>
      </div>
    </div>
  );
}
