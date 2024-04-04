import React from "react";
import ButtonConnection from "./ButtonConnection";
import NewConnection from "./NewConnection";
import RecentConnection from "./RecentConnection";
import SentConnection from "./SentConnection";

function Connections({ setActive, Active }) {
  return (
    <div className="connectionContainer">
      <ButtonConnection setActive={setActive} Active={Active}/>
      <NewConnection />
      <RecentConnection />
    </div>
  );
}

export default Connections;
