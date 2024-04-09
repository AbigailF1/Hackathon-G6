import { NavLink } from "react-router-dom";
import Svgp from "../components/Login/Svgp";
import { useState } from "react";
import SignupService from "../services/signup.service";
const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    let valid = true;
    if (email === "") {
      setEmailError("Email is required");
      valid = false;
    } else {
      setEmailError("");
    }
    if (!valid) {
      return;
    }
    const formData = {
      email,
    };
    // console.log(formData);

    try {
      const response = await SignupService.Reset(formData);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-full h-screen flex">
      <div
        className="relative w-1/2 h-full flex flex-col items-center justify-center"
        style={{ background: "linear-gradient(to bottom, #93C5FD, #3B82F6)" }}
      >
        <Svgp className="w-full h-full object-cover " />
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

            {/* <form onSubmit={handleSubmit}> */}
            <input
              type="email"
              placeholder="Email"
              className="w-full text-black py-4 bg-transparent border-b border-black outline-none focus:outline-none"
              onChange={(e) => {
                setEmail(e.target.value);
                setEmailError("");
              }}
              value={email}
            />
            {emailError && <p className="text-red-500">{emailError}</p>}

            {/* button */}
            <div className="flex flex-col gap-4">
              <button
                className="w-full text-white font-semibold bg-red-500 rounded-md p-4 text-center flex items-center justify-center cursor-pointer"
                // type="submit"
                onClick={handleSubmit}
              >
                Reset Password
              </button>
            </div>
            {/* </form> */}
            <div className="border w-full flex flex-col gap-6">
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
