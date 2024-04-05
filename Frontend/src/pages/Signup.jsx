import React from "react";
import collab from "../assets/collab.jpg";
import Google_Icon from "../assets/Google_Icon.jpg";
import { NavLink } from "react-router-dom";

const Signup = () => {
  return (
    <div className="w-full h-screen flex">
      <div className="relative w-1/2 h-full flex flex-col items-center justify-center">
        <img src={collab} className="w-full h-96 object-cover" />
      </div>
      <div className="w-1/2 max-w-[500px] mx-auto h-full  flex flex-col p-20 justify-between items-center">
        <div className=" flex flex-col ">
          {/* <div className="w-full flex flex-col gap-2">
            <p className="text-base gap-2">Academate</p>
          </div> */}
          <div className="input flex flex-col gap-4">
            <h1 className="text-4xl text-[#060606] font-semibold ">
              Join the Fastest Growing Online Community
            </h1>
            <h3 className="text-3xl font-semibold ">Sign Up</h3>

            <input
              type="text"
              placeholder="First Name"
              className="w-full text-black py-4 bg-transparent border-b border-black outline-none focus:outline-none"
            />

            <input
              type="text"
              placeholder="Last Name"
              className="w-full text-black py-4 bg-transparent border-b border-black outline-none focus:outline-none"
            />

            <input
              type="email"
              placeholder="Email"
              className="w-full text-black py-4 bg-transparent border-b border-black outline-none focus:outline-none"
            />

            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full text-black py-4 bg-transparent border-b border-black outline-none focus:outline-none"
            />

            <input
              type="password"
              placeholder="Password"
              className="w-full text-black py-4 bg-transparent border-b border-black outline-none focus:outline-none"
            />

            <input
              type="Password"
              placeholder="Confirm Password"
              className="w-full text-black py-4 bg-transparent border-b border-black outline-none focus:outline-none"
            />
            {/* below input */}
            <div className="flex flex-row gap-2 items-center justify-between">
              <div className=" flex items-center">
                <input type="checkbox" className="w-4 " />
                <p className="text-sm ">Remember me</p>
              </div>

              <p
                className="text-sm font-medium whitespace-nowrap cursor-pointer underline underline-offset-2"
                //   onClick={() => setForgotPassword(true)}
              >
                Forgot Password?
              </p>
            </div>

            {/* button */}
            <div className="flex flex-col gap-4">
              <button
                className="w-full text-white font-semibold bg-blue-500 rounded-md p-4 text-center flex items-center justify-center cursor-pointer"
                onClick={() => {}}
              >
                SignUp
              </button>
            </div>
            <div className="border border-black w-full flex flex-col gap-6">
              <div className="w-full flex items-center justify-center relative ">
                <div className="w-full h-[1px] bg-black/40"></div>
                <p className="text-lg absolute text-black/80 bg-[#f5f5f5]">
                  {" "}
                  or
                </p>
              </div>

              <div className="w-full flex items-center justify-center">
                <p className="text-sm font-normal text-[#060606]">
                  {" "}
                  Already have an account ?{" "}
                  <NavLink to="/Login">
                  <span
                    className="font-semibold underline enderline-offset-2 cursor-pointer"
                    // onClick={() => setAction("Signup")}
                  >
                    Sign In
                  </span>
                  </NavLink>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
