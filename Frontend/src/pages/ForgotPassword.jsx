import React from "react";
import collab from "../assets/collab.jpg";
import Google_Icon from "../assets/Google_Icon.jpg";
import { NavLink } from "react-router-dom";

const ForgotPassword= () => {
  return (
    <div className="w-full h-screen flex">
      <div className="relative w-1/2 h-full flex flex-col items-center justify-center">
        <img src={collab} className="w-full h-96 object-cover" />
      </div>
      <div className="w-1/2 max-w-[500px] mx-auto h-full  flex flex-col p-20 pt-36 justify-between items-center ">
        <div className=" flex flex-col ">
          {/* <div className="w-full flex flex-col gap-2">
            <p className="text-base gap-2"></p>
          </div> */}
          <div className="input flex flex-col gap-4 ">
            <h1 className="text-2xl text-[#060606] font-semibold  ">
            Fill in your e-mail address below and we will send you an email
              with further instructions.
            </h1>
           

            <input
              type="email"
              placeholder="Email"
              className="w-full text-black py-4 bg-transparent border-b border-black outline-none focus:outline-none"
            />


              {/* button */}
            <div className="flex flex-col gap-4">
            <button className="w-full text-white my-2 font-semibold bg-red-500 rounded-md p-4 text-center flex items-center justify-center cursor-pointer">
              Reset Password
            </button>

              <button
                className="w-full text-white font-semibold bg-blue-500 rounded-md p-4 text-center flex items-center justify-center cursor-pointer"
                onClick={() => {}}
              >
                Login
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
                  Don't have an account ?{" "}
                  <NavLink to="/Signup">
                  <span
                    className="font-semibold underline enderline-offset-2 cursor-pointer"
                    // onClick={() => setAction("Signup")}
                  >
                    Sign Up
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

export default ForgotPassword;
