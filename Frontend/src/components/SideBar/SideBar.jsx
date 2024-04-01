import React from "react";
import { FiLink } from "react-icons/fi";
import { FaRegCircleDot } from "react-icons/fa6";
import { GiStrongbox } from "react-icons/gi";
import { MdOutlineGroup } from "react-icons/md";
import { FaHashtag } from "react-icons/fa";

import "./SideBar.css";
function SideBar() {
  return (
    <div className="sidebar">
      <div className="numConnection">
        <a href="#">
          <FiLink /> connection
        </a>
        <span>1038</span>
      </div>
      <div className="invitation active">
        <a href="#">
          <FaRegCircleDot /> Invitations
        </a>
        <span>2</span>
      </div>
      <div className="teammates">
        <a href="#">
          <GiStrongbox /> teammates
        </a>
      </div>
      <div className="groups">
        <a href="#">
          <MdOutlineGroup /> Groups
        </a>
        <span>6</span>
      </div>
      <div className="hashtags">
        <a href="#">
          <FaHashtag /> Hashtags
        </a>
        <span>8</span>
      </div>
    </div>
  );
}

export default SideBar;
