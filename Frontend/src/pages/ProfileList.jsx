import React, { useState } from "react";
import collab from "../assets/collab.jpg";
import Google_Icon from "../assets/Google_Icon.jpg";
import { NavLink, useNavigate } from "react-router-dom";
import { Password } from "@mui/icons-material";
import Validation from "../components/Login/Validation";
import Svgp from "../components/Login/Svgp";

const ProfileList = () => {
  const [activeButton, setActiveButton] = useState(null);
  const navigate = useNavigate();
  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
    navigate(`/${buttonName}`);
  };

  const [values, setValues] = useState({
    bio: "",
    username: "",
    image: "",
    resumeLink: "",
  });

  const handleInput = (event) => {
    setValues((prev) => ({
      ...prev,
      [event.target.name]: [event.target.value],
    }));
  };

  async function submit(e) {
    e.preventDefault();
  }

  return (
    <div className="w-full h-screen flex">
      <div
        className="relative w-1/2 h-full lg:flex flex-col items-center justify-center md:block hidden"
        style={{ background: "linear-gradient(to bottom, #93C5FD, #3B82F6)" }}
      >
        <Svgp className="w-full h-full object-cover " />
      </div>
      <div className="sm:w-2/3 w-1/2 max-w-[500px] mx-auto h-full  flex flex-col p-20 justify-between items-center">
        <div className=" flex flex-col ">
          <div className="w-full flex flex-col gap-2">
            <p className="text-base gap-2"></p>
          </div>
          <div className="input flex flex-col gap-8">
            <h1 className="text-4xl text-[#060606] font-semibold ">
              Welcome to Academate
            </h1>
            <h3 className="text-3xl font-semibold ">Profile </h3>

            <form action="POST" onSubmit={submit}>
              <div className="pb-5">
                <input
                  type="text"
                  onChange={handleInput}
                  placeholder="Bio"
                  name="bio"
                  className="w-full text-black py-4 bg-transparent border-b border-black outline-none focus:outline-none"
                />
              </div>

              <div className="pb-5">
                <input
                  type="text"
                  onChange={handleInput}
                  placeholder="Username"
                  name="username"
                  className="w-full text-black py-4 bg-transparent border-b border-black outline-none focus:outline-none"
                />
              </div>

              <div className="pb-5">
                <label >
                  Upload Image:
                </label>
                <input
                  type="file"
                  onChange={handleInput}
                  placeholder="Image"
                  name="image"
                  className="w-full text-black py-4 bg-transparent border-b border-black outline-none focus:outline-none"
                />
              </div>

              <div className="pb-5">
                <input
                  type="url"
                  onChange={handleInput}
                  placeholder="Resume link"
                  name="resumeLink"
                  className="w-full text-black py-4 bg-transparent border-b border-black outline-none focus:outline-none"
                />
              </div>
              {/* below input */}
              <div className="flex flex-col gap-4">
                {/* button */}

                <button
                  className="w-full text-white font-semibold bg-blue-500 rounded-md p-4 text-center flex items-center justify-center cursor-pointer"
                  type="submit"
                  // onClick={submit}
                  onClick={() => handleButtonClick("Skill")}
                >
                  Submit and Continue
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileList;
