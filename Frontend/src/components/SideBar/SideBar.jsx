import React, { useState } from "react";
import { FiLink } from "react-icons/fi";
import { FaRegCircleDot } from "react-icons/fa6";
import { GiStrongbox } from "react-icons/gi";
import { MdOutlineGroup } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";
import "./SideBar.css";

function SideBar() {
  const [activeLink, setActiveLink] = useState("/");
  const location = useLocation();

  const handleLinkClick = (path) => {
    setActiveLink(path);
  };

  return (
    <div className="sidebar">
      <div
        className={
          "invitation " + (activeLink === "/Notifications" ? "active" : "")
        }
      >
        <Link
          to="/Notifications"
          onClick={() => handleLinkClick("/Notifications")}
        >
          <FaRegCircleDot /> Invitations
        </Link>
        <span>2</span>
      </div>
      <div className={"teammates " + (activeLink === "/chat" ? "active" : "")}>
        <Link to="/chat" onClick={() => handleLinkClick("/chat")}>
          <GiStrongbox /> teammates
        </Link>
      </div>

      <div className={"groups "}>
        <Link
          to="https://academate-group-chatt.onrender.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <MdOutlineGroup /> Groups
        </Link>
        <span>6</span>
      </div>
    </div>
  );
}

export default SideBar;
