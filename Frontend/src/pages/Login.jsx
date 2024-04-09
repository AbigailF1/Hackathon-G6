import { useState } from "react";
// import collab from "../assets/collab.jpg";
// import Google_Icon from "../assets/Google_Icon.jpg";
import { useNavigate, NavLink } from "react-router-dom";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
// import { Password } from "@mui/icons-material";
// import Validation from "../components/Login/Validation";
import { toast } from "react-toastify";
import Svgp from "../components/Login/Svgp";
import SignupService from "../services/signup.service";

const Login = () => {
  const Navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [role, setRole] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

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
      if (response.status == 200) {
        toast.success("successfully logedin");
        console.log("successfully logedin");
        Navigate("/profile");
      }
      // console.log(response);
      // console.log(response);
    } catch (error) {
      console.log("error");
      // console.log(error.message);
    } finally {
      setLoading(false);
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
      <div className="w-1/2 max-w-[500px] mx-auto h-full  flex flex-col p-20 justify-between items-center">
        <div className=" flex flex-col ">
          <div className="w-full flex flex-col gap-2">
            <p className="text-base gap-2"></p>
          </div>
          <div className="input flex flex-col gap-8">
            <h1 className="text-4xl text-[#060606] font-semibold ">
              Welcome back to Academate
            </h1>
            <h3 className="text-3xl font-semibold ">Log In</h3>

            <form onSubmit={handleSubmit}>
              <div className="pb-5">
                <input
                  type="email"
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setEmailError("");
                  }}
                  placeholder="Email"
                  value={email}
                  name="email"
                  className="w-full text-black py-4 bg-transparent border-b border-black outline-none focus:outline-none"
                />
                {emailError && (
                  <span className="text-red-500">{emailError}</span>
                )}
              </div>

              <div className="pb-5">
                <input
                  type={showPassword ? "text" : "password"}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    setPasswordError("");
                  }}
                  placeholder="Password"
                  name="password"
                  className="w-full text-black py-4 bg-transparent border-b border-black outline-none focus:outline-none"
                />

                {passwordError && (
                  <span className="text-red-500">{passwordError}</span>
                )}
                <div
                  className="password_button"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? <FaRegEye /> : <FaRegEyeSlash />}
                </div>
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
                  Don't have an account ?
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
