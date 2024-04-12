import React from "react";
import "./Footer.css";
import {
  TwitterOutlined,
  InstagramOutlined,
  GithubOutlined,
} from "@ant-design/icons";
import { AudioOutlined } from "@ant-design/icons";
import { Input, Space } from "antd";
import { Link } from "react-router-dom";
const { Search } = Input;
const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: "#1677ff",
    }}
  />
);
const onSearch = (value, _e, info) => console.log(info?.source, value);

function Footer() {
  return (
    <div className="footer">
      <footer className="footer1 grid grid-cols-5 gap-28">
        <div>
          <ul className="acadamatetop">
            <li>
              <a className="acadamate" href="/">
                <img src="../../../public/acadamate.png" alt="" />
              </a>
            </li>
            <li>
              <a className="acadamate" href="/">
                Academate
              </a>
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <li>Navigation</li>
            <li>About</li>
            <li>Our Goals</li>
            <li>Vision</li>
          </ul>
        </div>
        {/* <div className="w-48">
          {" "}
          {/* Increased width for Talent Solutions */}
        {/* <ul>
            <li>Talent Solutions</li>
            <li>Marketing Solutions</li>
            <li>Sales Solutions</li>
            <li>Safety Center</li>
          </ul>
        </div> */}
        <div>
          <ul>
            <li>Community Guidelines</li>
            <div class="legal-info">
              <Link to={"/Privacy"}>
            <li><a target="_blank">Privacy Policy</a></li>
            </Link>
            <li><a href="terms.html" target="_blank">Terms of Service</a></li>
          
        </div>
          </ul>
        </div>
        <div className="">
          <p className=" ">Get in touch</p>
          <ul className="flex flex-row pb-2">
            <li>
              <a href="#" className="pr-3 text-xl">
                <TwitterOutlined />
              </a>
            </li>
            <li>
              <a href="#" className="pr-3 text-xl">
                <GithubOutlined />
              </a>
            </li>
            <li>
              <a href="#" className="pr-3 text-xl">
                <InstagramOutlined />
              </a>
            </li>
           
          </ul>

          
        </div>
       
      </footer>
      <div className=" pl-96">
        <p className=" pl-52">&copy; 2024 Academate. All rights reserved.</p>
        </div>
    </div>
  );
}

export default Footer;
