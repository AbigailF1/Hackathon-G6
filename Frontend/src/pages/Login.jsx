import React, { useState } from "react";
import collab from "../assets/collab.jpg";
import Google_Icon from "../assets/Google_Icon.jpg";
import { NavLink, useNavigate } from "react-router-dom";
import { Password } from "@mui/icons-material";
import Validation from "../components/Login/Validation";
import Svgp from "../components/Login/Svgp";

const Login = () => {

  const [activeButton, setActiveButton] = useState(null);
  const navigate = useNavigate();
  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
    navigate(`/${buttonName}`);
  };

  const [values, setValues] = useState({
    email:'',
    password:''
    });

    const [errors, setErrors] = useState([]);
    const handleInput=(event)=>{
        setValues(prev => ({...prev, [event.target.name]: [event.target.value]}))
    }

  async function submit(e){
    e.preventDefault();
    setErrors(Validation(values));

  }

  return (
    <div className="w-full h-screen flex">
      <div className="relative w-1/2 h-full flex flex-col items-center justify-center sm:hidden" style={{ background: 'linear-gradient(to bottom, #93C5FD, #3B82F6)'}}>
        <Svgp className='w-full h-full object-cover ' />
      </div>
      <div className="sm:w-2/3 w-1/2 max-w-[500px] mx-auto h-full  flex flex-col p-20 justify-between items-center">
        <div className=" flex flex-col ">
          <div className="w-full flex flex-col gap-2">
            <p className="text-base gap-2"></p>
          </div>
          <div className="input flex flex-col gap-8">
            <h1 className="text-4xl text-[#060606] font-semibold ">
              Welcome back to Academate
            </h1>
            <h3 className="text-3xl font-semibold ">Log In</h3>
            
            <form action="POST" onSubmit={submit}>
            <div className="pb-5">
              <input
                type="email"
                onChange={handleInput}
                placeholder="Email"
                name="email"
                className="w-full text-black py-4 bg-transparent border-b border-black outline-none focus:outline-none"
                />
                {errors.email && <span className="text-red-500">{errors.email}</span>}
            </div>

            
              <div className="pb-5">
                <input
                  type="password"
                  onChange={handleInput}
                  placeholder="Password"
                  name="password"
                  className="w-full text-black py-4 bg-transparent border-b border-black outline-none focus:outline-none"
                />
                {errors.password && <span className="text-red-500">{errors.password}</span>}
              </div>
              {/* below input */}
              <div className="flex flex-col gap-4">

              <div className="flex flex-row gap-2 items-center justify-between">
                <div className=" flex items-center">
                  <input type="checkbox" className="w-4 " />
                  <p className="text-sm ">Remember me</p>
                </div>
                <NavLink to="/Forgot">
                <p
                  className="text-sm font-medium whitespace-nowrap cursor-pointer underline underline-offset-2"
                  //   onClick={() => setForgotPassword(true)}
                >
                  Forgot Password?
                </p>
                </NavLink>
              </div>
                {/* button */}
              
                <button
                  className="w-full text-white font-semibold bg-blue-500 rounded-md p-4 text-center flex items-center justify-center cursor-pointer"
                  type="submit" 
                  // onClick={submit}
                   onClick={() => handleButtonClick('Feed')}
                >
                  Login
                </button>
                
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

export default Login;
