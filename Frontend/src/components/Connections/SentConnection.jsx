import React from "react";
import { useSyncExternalStore } from "react";
import { useState } from "react";
import SideBar from "../SideBar/SideBar";
import ButtonConnection from "./ButtonConnection";
import "./SentConnection.css";

function SentConnection() {
  const [profileImg, setProfileImage] = useState(
    "https://img.freepik.com/premium-vector/young-smiling-man-avatar-man-with-brown-beard-mustache-hair-wearing-yellow-sweater-sweatshirt-3d-vector-people-character-illustration-cartoon-minimal-style_365941-860.jpg"
  );
  const [name,setName]=useState("Abebe Kebede");
  const [skill,setSkill]=useState("Backend developer");
  const [connection,setConnection]=useState(0);
  const [message, setMessage] = useState(
    "Hey, I saw your profile. It's Good. We can work together.I accepted your request."
  );
  return (
    <div className="sentConnection">
      <SideBar />
      <div className="Scontainer">
        <ButtonConnection />
        <div className="connection">
          <div className="profile">
            <img src={profileImg} alt="" />
            <div className="about">
              <p className="name">{name}</p>
              <p className="skill">{skill}</p>
              <p className="NumOfConnection">{connection} connections</p>
            </div>
          </div>
          <p className="connectionMessage">
            {message}
          </p>
          <div className="requestStatus">
            <p className="requestStatus">ACCEPTED</p>
          </div>
        </div>
        <div className="connection">
          <div className="profile">
            <img
              src="https://img.freepik.com/premium-vector/young-smiling-man-avatar-man-with-brown-beard-mustache-hair-wearing-yellow-sweater-sweatshirt-3d-vector-people-character-illustration-cartoon-minimal-style_365941-860.jpg"
              alt=""
            />
            <div className="about">
              <p className="name">Bradon Wilson</p>
              <p className="skill">Web developer</p>
              <p className="NumOfConnection">632 connections</p>
            </div>
          </div>
          <p className="connectionMessage">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
            eligendi optio, dolorem earum quasi quia fugit delectus ad! Veniam
          </p>
          <div className="requestStatus">
            <p className="requestStatus" style={{ color: "red" }}>
              DECLINED
            </p>
          </div>
        </div>
        <div className="connection">
          <div className="profile">
            <img
              src="https://img.freepik.com/premium-vector/young-smiling-man-avatar-man-with-brown-beard-mustache-hair-wearing-yellow-sweater-sweatshirt-3d-vector-people-character-illustration-cartoon-minimal-style_365941-860.jpg"
              alt=""
            />
            <div className="about">
              <p className="name">Bradon Wilson</p>
              <p className="skill">Web developer</p>
              <p className="NumOfConnection">632 connections</p>
            </div>
          </div>
          <p className="connectionMessage">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
            eligendi optio, dolorem earum quasi quia fugit delectus ad! Veniam
          </p>
          <div className="requestStatus">
            <p className="requestStatus" style={{ color: "grey" }}>
              PENDING....
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SentConnection;
