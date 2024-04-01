import React from "react";
import Connections from "../components/Connections/Connections";
import SideBar from "../components/SideBar/SideBar";
import "./Collaboration.css";

function Collaborate() {
  return (
    <div className="container">
      <SideBar />
      <Connections />
    </div>
  );
}

export default Collaborate;
