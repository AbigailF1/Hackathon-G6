import React from "react";
import { useState } from "react";
import ButtonConnection from "./ButtonConnection";
import NewConnection from "./NewConnection";
import RecentConnection from "./RecentConnection";
import SentConnection from "./SentConnection";

function Connections() {
  const [profileImg, setProfileImage] = useState(
    "https://img.freepik.com/premium-vector/young-smiling-man-avatar-man-with-brown-beard-mustache-hair-wearing-yellow-sweater-sweatshirt-3d-vector-people-character-illustration-cartoon-minimal-style_365941-860.jpg"
  );
  const [name, setName] = useState("Abebe Kebede");
  const [skill, setSkill] = useState("Backend developer");
  const [connection, setConnection] = useState(0);
  const [message, setMessage] = useState(
    "Hey, I saw your works. I like it! Can we do something together? Or maybe you have project for UX at the moment?"
  );
  
  const [projectIdea, setProjectIdea] = useState("School Management System");
  return (
    <div className="connectionContainer">
      <ButtonConnection />
      <NewConnection
        name={name}
        skill={skill}
        message={message}
        connection={connection}
      />
      <RecentConnection name={name} skill={skill} projectIdea={projectIdea} />
    </div>
  );
}

export default Connections;
