import React from "react";
import { useState } from "react";
import Connections from "../components/Connections/Connections";
import SideBar from "../components/SideBar/SideBar";
import "./Collaboration.css";

function Collaborate() {
  const [active, setActive] = useState("active");
  return (
    <div className="container">
      <SideBar />
      <Connections active={active} setActive={setActive} />
    </div>
  );
}

export default Collaborate;
