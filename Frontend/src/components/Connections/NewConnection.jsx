import React from "react";
import "./NewConnection.css";

function NewConnection() {
  return (
    <div className="connections">
      <p className="connectionText">
        <hr /> YOU HAVE <span> 2 NEW REQUESTS</span> <hr />
      </p>
      <div className="connectionRequest">
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
          <button className="acceptBtn">ACCEPT</button>
          <button className="declineBtn">DECLINE</button>
        </div>
      </div>
      <div className="connectionRequest">
        <div className="profile">
          <img
            src="data:image/jpeg;base64,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"
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
          <button className="acceptBtn">ACCEPT</button>
          <button className="declineBtn">DECLINE</button>
        </div>
      </div>
    </div>
  );
}

export default NewConnection;
