import React, { useState } from "react";
import collab from "../assets/collab.jpg";
import Google_Icon from "../assets/Google_Icon.jpg";
import { NavLink , useNavigate} from "react-router-dom";
import Validation from "../components/Login/SignupValidation";
import Svgp from "../components/Login/Svgp";

const Signup = () => {

  const [activeButton, setActiveButton] = useState(null);
  const navigate = useNavigate();
  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
    navigate(`/${buttonName}`);
  };

  const handleSignUp = () => {
    alert('Signed up successfully');
  };

  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const [values, setValues] = useState({
    fname: "",
    lname: "",
    email: "",
    tele: "",
    password: "",
    cpassword: "",
  });

  const [errors, setErrors] = useState([]);
  const handleInput = (event) => {
    setValues((prev) => ({
      ...prev,
      [event.target.name]: [event.target.value],
    }));
  };

  async function submit(e) {
    e.preventDefault();
    setErrors(Validation(values));
  }

  return (
    <div className="w-full h-screen flex">
      <div className="relative w-1/2 h-full flex flex-col items-center justify-center" style={{ background: 'linear-gradient(to bottom, #93C5FD, #3B82F6)'}}>
        <Svgp className='w-full h-full object-cover ' />
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

            <form action="" onSubmit={submit}>
              <div className="pb-2">
                <input
                  type="text"
                  placeholder="First Name"
                  onChange={handleInput}
                  name="fname"
                  className="w-full text-black py-4 bg-transparent border-b border-black outline-none focus:outline-none"
                />
                {errors.fname && (
                  <span className="text-red-500">{errors.fname}</span>
                )}
              </div>

              <div className="pb-2">
                <input
                  type="text"
                  placeholder="Last Name"
                  onChange={handleInput}
                  name="lname"
                  className="w-full text-black py-4 bg-transparent border-b border-black outline-none focus:outline-none"
                />
                {errors.lname && (
                  <span className="text-red-500">{errors.lname}</span>
                )}
              </div>

              <div className="pb-2">
                <input
                  type="email"
                  onChange={handleInput}
                  placeholder="Email"
                  name="email"
                  className="w-full text-black py-4 bg-transparent border-b border-black outline-none focus:outline-none"
                />
                {errors.email && (
                  <span className="text-red-500">{errors.email}</span>
                )}
              </div>

              <div className="pb-2">
                <input
                  type="tel"
                  placeholder="Phone Number"
                  onChange={handleInput}
                  name="tele"
                  className="w-full text-black py-4 bg-transparent border-b border-black outline-none focus:outline-none"
                />
                {errors.tele && (
                  <span className="text-red-500">{errors.tele}</span>
                )}
              </div>

              <div className="pb-2">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  onChange={handleInput}
                  name="password"
                  className="w-full text-black py-4 bg-transparent border-b border-black outline-none focus:outline-none"
                />
                {errors.password && (
                  <span className="text-red-500">{errors.password}</span>
                )}
                <button onClick={togglePasswordVisibility}>
                  {showPassword ? "Hide Password" : "Show Password"}
                </button>
              </div>

              <div className="pb-2">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Confirm Password"
                  onChange={handleInput}
                  name="cpassword"
                  className="w-full text-black py-4 bg-transparent border-b border-black outline-none focus:outline-none"
                />
                {errors.cpassword && (
                  <span className="text-red-500">{errors.cpassword}</span>
                )}
                <button onClick={togglePasswordVisibility}>
                  {showPassword ? "Hide Password" : "Show Password"}
                </button>
              </div>
              {/* below input */}
              <div className="flex flex-row gap-2 items-center justify-between">
                <div className=" flex items-center">
                  {/* <input type="checkbox" className="w-4 " />
                  <p className="text-sm ">Remember me</p> */}
                </div>
              </div>

              {/* button */}
              <div className="flex flex-col gap-4 pt-5 pb-5">
               <NavLink to="/Login">
                <button
                  type="submit"
                  className="w-full text-white font-semibold bg-blue-500 rounded-md p-4 text-center flex items-center justify-center cursor-pointer"
                  onClick={submit}
                  onClick={() => handleButtonClick('Feed')}
                  onClick={handleSignUp}
                >
                  SignUp
                </button>
                </NavLink>
              </div>
            </form>
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
                  Already have an account ?{" "}
                  <NavLink to="/Login">
                    <span className="font-semibold underline enderline-offset-2 cursor-pointer">
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
