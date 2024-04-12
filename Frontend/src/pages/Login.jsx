import React, { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import {
  TextField,
  Button,
  FormControlLabel,
  Checkbox,
  
} from "@mui/material";
import { NavLink, useNavigate } from "react-router-dom";
import Svgp from "../components/Login/Svgp";
import SignupService from "../services/signup.service";
import { toast } from "react-toastify";

const Login = () => {
  const Navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let valid = true;

    if (email === "") {
      setEmailError("Email is required");
      valid = false;
    } else {
      setEmailError("");
    }

    if (password === "") {
      setPasswordError("Password is required");
      valid = false;
    } else {
      setPasswordError("");
    }

    if (!valid) {
      return;
    }

    setLoading(true);

    const formData = {
      email,
      password,
    };

    try {
      const response = await SignupService.Login(formData);
      if (response.status === 200) {
        const token = response.data.token;
        localStorage.setItem("token", token);
        toast.success("Successfully logged in");
        Navigate("/profile");
      }
    } catch (error) {
      console.error("Error:", error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full h-screen flex">
      <div
        className="relative w-1/2 h-full flex flex-col items-center justify-center"
        style={{
          background: "linear-gradient(to bottom, #93C5FD, #3B82F6)",
        }}
      >
        <Svgp className="w-full h-full object-cover " />
      </div>
      <div className="sm:w-2/3 w-1/2 max-w-md mx-auto h-full flex flex-col p-20 justify-between items-center">
        <div className="flex flex-col gap-1">
          <h1 className="text-2xl ml-0 mr-0 text-[#060606] mt-0 mb-4 font-semibold ">
            Welcome back to Academate 
          </h1>
          <h4 className="text-2xl  align-center font-semibold ">Log In</h4>
        </div>

        <form onSubmit={handleSubmit} className="w-full">
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={!!emailError}
            helperText={emailError}
          />
          <TextField
            type={showPassword ? "text" : "password"}
            label="Password"
            variant="outlined"
            fullWidth
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            error={!!passwordError}
            helperText={passwordError}
            InputProps={{
              endAdornment: (
                <FaRegEye
                  className="cursor-pointer"
                  onClick={togglePasswordVisibility}
                />
              ),
            }}
          />
          <div className="flex items-center justify-between">
            <FormControlLabel control={<Checkbox />} label="Remember me" />
            <NavLink
              to="/Forgot"
              className="text-sm  font-semibold  whitespace-nowrap cursor-pointer underline underline-offset-2"
            >
              Forgot Password?
            </NavLink>
          </div>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            disabled={loading}
          >
            {loading ? "Loading..." : "Login"}
          </Button>
        </form>

        <div className="border w-full flex flex-col gap-6">
          <div className="w-full flex items-center justify-center relative ">
            <div className="w-full h-[1px] bg-black/40"></div>
            <p className="text-lg absolute text-black/80 bg-[#f5f5f5]"> or</p>
          </div>

          <div className="w-full flex items-center justify-center">
            <p className="text-sm font-normal text-[#060606]">
              Don't have an account ?
              <NavLink to="/Signup">
                <span className="font-semibold underline enderline-offset-2 cursor-pointer">
                  Sign Up
                </span>
              </NavLink>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
