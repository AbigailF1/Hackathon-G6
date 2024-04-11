import React from "react";
import { useState } from "react";
import ButtonConnection from "./ButtonConnection";
import NewConnection from "./NewConnection";
import RecentConnection from "./RecentConnection";
import SentConnection from "./SentConnection";

function Connections() {
  return (
    <div className="connectionContainer">
      <ButtonConnection />
      <NewConnection />
      <RecentConnection />
    </div>
  );
}

export default Connections;
