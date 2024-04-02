import React from "react";
import SideBar from "../SideBar/SideBar";
import ButtonConnection from "./ButtonConnection";
import "./SentConnection.css";

function SentConnection() {
  return (
    <div className="sentConnection">
      <SideBar/>
      <div>
      <ButtonConnection/>
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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet eligendi
          optio, dolorem earum quasi quia fugit delectus ad! Veniam
        </p>
        <div className="reqBtn">
          <p className="acceptBtn">ACCEPTED</p>
        </div>
      </div>
      </div>
    </div>
  );
}

export default SentConnection;
