import React from "react";
import ButtonConnection from "./ButtonConnection";
import NewConnection from "./NewConnection";
import RecentConnection from "./RecentConnection";

function Connections() {
  return (
    <div className="connectionContainer">
      <ButtonConnection/>
      <NewConnection />
      <RecentConnection />
    </div>
  );
}

export default Connections;
