import { useState } from "react";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import SignupService from "../services/signup.service";
// import collab from "../assets/collab.jpg";
// import Google_Icon from "../assets/Google_Icon.jpg";
import { toast } from "react-toastify";
import { NavLink, useNavigate } from "react-router-dom";
// import Validation from "../components/Login/SignupValidation";
import Svgp from "../components/Login/Svgp";

const Signup = () => {
  const Navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const [first_name, setFirst_name] = useState(""); //values.fname
  const [last_name, setLast_name] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [role, setRole] = useState("");

  const [phone_number, setPhone_number] = useState("");
  const [password, setPassword] = useState("");
  const [confirm_password, setConfirm_password] = useState("");
  const [firt_nameError, setFirst_nameError] = useState("");
  const [last_nameError, setLast_nameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phone_numberError, setPhone_numberError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirm_passwordError, setConfirm_passwordError] = useState("");
  const [usernameError, setUsernameError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    let valid = true;
    if (first_name === "") {
      setFirst_nameError("First name is required");
      valid = false;
    } else {
      setFirst_nameError("");
    }
    if (last_name === "") {
      setLast_nameError("Last name is required");
      valid = false;
    } else {
      setLast_nameError("");
    }
    if (email === "") {
      setEmailError("Email is required");
      valid = false;
    } else {
      setEmailError("");
    }
    if (phone_number === "") {
      setPhone_numberError("Phone number is required");
      valid = false;
    } else {
      setPhone_numberError("");
    }

    if (!username) {
      setUsernameError("Username is required");
      valid = false;
    } else {
      setUsernameError("");
    }

    if (password === "") {
      setPasswordError("Password is required");
      valid = false;
    } else {
      setPasswordError("");
    }
    if (confirm_password === "") {
      setConfirm_passwordError("confirm Password is required");
      valid = false;
    } else {
      setConfirm_passwordError("");
    }
    if (!valid) {
      return;
    }
    setLoading(true);

    const formData = {
      username,
      first_name,
      last_name,
      email,
      password,
      phone_number,
      role,
    };

    try {
      const response = await SignupService.Signup(formData);
      if (response.status == 201) {
        toast.success("successfully registered");
        console.log("successfully registered");
        Navigate("/login");
      }

      // console.log(response);
    } catch (error) {
      console.log("error");
      // console.log(error.message);
    } finally {
      setLoading(false);
    }
  };

  // const [activeButton, setActiveButton] = useState(null);
  // const navigate = useNavigate();
  // const handleButtonClick = (buttonName) => {
  //   setActiveButton(buttonName);
  //   navigate(`/${buttonName}`);
  // };

  // const handleSignUp = () => {
  //   alert("Signed up successfully");
  // };

  // const [showPassword, setShowPassword] = useState(false);
  // const togglePasswordVisibility = () => {
  //   setShowPassword(!showPassword);
  // };

  // const [values, setValues] = useState({
  //   fname: "",
  //   lname: "",
  //   email: "",
  //   tele: "",
  //   password: "",
  //   cpassword: "",
  // });

  // const [errors, setErrors] = useState([]);
  // const handleInput = (event) => {
  //   setValues((prev) => ({
  //     ...prev,
  //     [event.target.name]: [event.target.value],
  //   }));
  // };

  // async function submit(e) {
  //   e.preventDefault();
  //   setErrors(Validation(values));
  // }

  return (
    <div className="w-full h-screen flex">
      <div
        className="relative w-1/2 h-full flex flex-col items-center justify-center"
        style={{ background: "linear-gradient(to bottom, #93C5FD, #3B82F6)" }}
      >
        <Svgp className="w-full h-full object-cover " />
      <div className="relative w-1/2 h-full lg:flex flex-col items-center justify-center md:block hidden" style={{ background: 'linear-gradient(to bottom, #93C5FD, #3B82F6)'}}>
        <Svgp className=' w-full h-full object-cover ' />
      </div>
      <div className="sm:w-2/3 w-1/2 max-w-[500px] mx-auto h-full  flex flex-col p-10 pt-20 justify-between items-center">
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
                  className="w-full text-black py-3 bg-transparent border-b border-black outline-none focus:outline-none"
                />
                {errors.fname && (
                  <span className="text-red-500">{errors.fname}</span>
                )}
              </div>

              <div className="pb-2">
                <input
                  type="text"
                  placeholder="Last Name"
                  onChange={(e) => [
                    setLast_name(e.target.value),
                    setLast_nameError(""),
                  ]}
                  value={last_name}
                  name="lname"
                  className="w-full text-black py-3 bg-transparent border-b border-black outline-none focus:outline-none"
                />
                {last_nameError && (
                  <span className="text-red-500">{last_nameError}</span>
                )}
              </div>

              <div className="pb-2">
                <input
                  type="email"
                  onChange={(e) => [
                    setEmail(e.target.value),
                    setEmailError(""),
                  ]}
                  value={email}
                  placeholder="Email"
                  name="email"
                  className="w-full text-black py-3 bg-transparent border-b border-black outline-none focus:outline-none"
                />
                {emailError && (
                  <span className="text-red-500">{emailError}</span>
                )}
              </div>

              <div className="pb-2">
                <input
                  type="tel"
                  placeholder="Phone Number"
                  onChange={(e) => [
                    setPhone_number(e.target.value),
                    setPhone_numberError(""),
                  ]}
                  name="tele"
                  className="w-full text-black py-3 bg-transparent border-b border-black outline-none focus:outline-none"
                />
                {phone_numberError && (
                  <span className="text-red-500">{phone_numberError}</span>
                )}
              </div>
              <div className="pb-2">
                <input
                  // type="tel"
                  placeholder="Role"
                  onChange={(e) => [
                    setRole(e.target.value),
                    // setPhone_numberError(""),
                  ]}
                  name="tele"
                  className="w-full text-black py-4 bg-transparent border-b border-black outline-none focus:outline-none"
                />
              </div>

              <div className="pb-2 password_div">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  onChange={(e) => [
                    setPassword(e.target.value),
                    setPasswordError(""),
                  ]}
                  name="password"
                  className="w-full text-black py-3 bg-transparent border-b border-black outline-none focus:outline-none"
                />
                {passwordError && (
                  <span className="text-red-500">{passwordError}</span>
                )}
                <button
                  className="password_button"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? <FaRegEye /> : <FaRegEyeSlash />}
                </button>
              </div>

              <div className="pb-2">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Confirm Password"
                  onChange={(e) => {
                    setConfirm_password(e.target.value);
                    setConfirm_passwordError("");
                  }}
                  name="cpassword"
                  className="w-full text-black py-3 bg-transparent border-b border-black outline-none focus:outline-none"
                />
                {confirm_passwordError && (
                  <span className="text-red-500">{confirm_passwordError}</span>
                )}
                <button
                  className="password_button"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? <FaRegEye /> : <FaRegEyeSlash />}
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
                {/* <NavLink to="/Login"> */}
               <NavLink to="/ProfileList">
                <button
                  type="submit"
                  className="w-full text-white font-semibold bg-blue-500 rounded-md p-4 text-center flex items-center justify-center cursor-pointer"
                  onClick={submit}
                  onClick={() => handleButtonClick('ProfileList')}
                  onClick={handleSignUp}
                >
                  Submit And Continue
                </button>
                {/* </NavLink> */}
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
                <p className="text-base font-normal text-[#060606]">
                  {" "}
                  Already have an account ?{" "}
                  <NavLink to="/Login">
                    <span className="font-semibold underline enderline-offset-2 cursor-pointer pt-10">
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
