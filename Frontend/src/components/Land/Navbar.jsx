import React from "react";
import { useState } from "react";
import logo3 from "../../assets/logo3.png";
import { Space } from "antd";
import { MenuOutlined, CloseOutlined } from "@ant-design/icons";
import { NavLink } from "react-router-dom";
import imga1 from "../../assets/imga1.jpeg";

const Navbar = () => {
  return (
    <div>
      <div className="bg-blue-300">
        <div
          className="bg-blue-300"
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            padding: "2rem",
            textAlign: "center",
          }}
        >
          <nav className="sticky top-0 z-50 py-3 bg-transparent bg-slate-800 border-b ">
            <div className="px-4 mx-auto relative text-sm">
              <div className="flex justify-between items-center">
                <div className="flex items-center flex-shrink-0 bg-blue-300">
                  <img
                    className="text-4xl tracking-tight h-16 w-60 "
                    src={logo3}
                    style={{
                      objectFit: "cover",
                      borderRadius: "0",
                      aspectRatio: "16 / 9",
                    }}
                  />
                  {/* <span className="text-4xl tracking-tight">Academate</span> */}
                </div>
                <div className="hidden lg:flex justify-center ml-14 space-x-12 items-center ">
                  <NavLink to="/Login">
                    <a
                      href="#"
                      className=" py-5 px-5 border rounded-md text-white bg-blue-800"
                    >
                      Sign In
                    </a>
                  </NavLink>
                  <NavLink to="/Signup">
                    <a
                      href="#"
                      className="bg-gradient-to-r from-blue-500 to-blue-900 py-5 px-3 rounded-md text-white"
                    >
                      Create An Account
                    </a>
                  </NavLink>
                </div>
                      {/* responsive */}
                <div className="flex lg:hidden justify-center ml-4 space-x-4 items-center">
                  <NavLink to="/Login">
                    <a
                      href="#"
                      className="py-2 px-4 border rounded-md text-white bg-blue-800"
                    >
                      Sign In
                    </a>
                  </NavLink>
                  <NavLink to="/Signup">
                    <a
                      href="#"
                      className="bg-gradient-to-r from-blue-500 to-blue-900 py-2 px-4 rounded-md text-white"
                    >
                      Create An Account
                    </a>
                  </NavLink>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
      <div
        style={{ maxWidth: "1280px", padding: "2rem", textAlign: "center" }}
      ></div>
      <div className="my-28 md:my-8 flex md:flex-row justify-evenly gap-12">
        <div className="md:w-1/2 pl-24">
          <h1 className="text-4xl md:text-6xl font-semibold mb-4 text-neutralDGrey md:w-3/4 leading-snug text-center">
            Empower Your Portfolio with{" "}
            <span className="text-blue-300 leading-snug">Collaboration</span>
          </h1>
          <p className="text-base text-neutralGrey md:text-2xl p-11">
            Join Academate to collaborate on projects develop your career and
            enhance your skills
          </p>

          <div className=" pl-36">
            <button className="px-8 py-2  bg bg-blue-700 text-white rounded hover:bg-neutralDGrey transition-all duration-300 hover:-translate-y-4">
              Get Started
            </button>
          </div>
        </div>
        <div className="md:w-1/2 pr-28">
          <img
            className=" bg-center lg:bg-cover bg-no-repeat bg-fixed  relative z-20 object-cover w-full"
            src={imga1}
            style={{
              borderRadius: "0",
              objectFit: "cover",
            }}
          />
        </div>
      </div>
    </div>
  );
};
export default Navbar;
