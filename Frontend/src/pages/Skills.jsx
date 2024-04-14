import React, { useEffect, useState } from "react";
import collab from "../assets/collab.jpg";
import Google_Icon from "../assets/Google_Icon.jpg";
import { NavLink, useNavigate } from "react-router-dom";
import { Password } from "@mui/icons-material";
import Svgp from "../components/Login/Svgp";
import axios from "axios";
import { jwtDecode } from "jwt-decode";

const Skills = () => {



  const token = localStorage.getItem("token");
  // const token = "eyJ0eXAiO.../// jwt token";
  const decoded = jwtDecode(token);

  console.log(decoded.user_id);
  const [profileData, setProfileData] = useState(null);




  useEffect(() => {
    // Define an async function to fetch data
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token");
        // Make the HTTP request using Axios
        const response = await axios.get(
          `http://127.0.0.1:8000/api/skills/${decoded.user_id}/user/`,
          {
            headers: {
              Authorization: `Bearer ${token}`, // Include token in the request headers
            },
          }
        );
        // Extract the data from the response
        const data = response.data;
        // Set the fetched data to the state
        setProfileData(data);
        // Log the data to the console
        console.log(data);
      } catch (error) {
        console.log(error);
        // Log any errors to the console
        console.error("There was a problem fetching the data:", error.message);
      }
    };

    // Call the async function to fetch data when the component mounts
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // E
  console.log(profileData);

    const [activeButton, setActiveButton] = useState(null);
    const navigate = useNavigate();
    const handleButtonClick = (buttonName) => {
      setActiveButton(buttonName);
      navigate(`/${buttonName}`);
    };
  
    const [values, setValues] = useState({
      skill:'',
      
      });
  
  
      const handleInput=(event)=>{
          setValues(prev => ({...prev, [event.target.name]: [event.target.value]}))
      }
  
    async function submit(e){
      e.preventDefault();
      
  
    }
  
    return (
      <div className="w-full h-screen flex">
      <div className="relative w-1/2 h-full lg:flex flex-col items-center justify-center md:block hidden" style={{ background: 'linear-gradient(to bottom, #93C5FD, #3B82F6)'}}>
        <Svgp className='w-full h-full object-cover ' />
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
            <h3 className="text-3xl font-semibold ">Skills</h3>
            
            <form action="POST" onSubmit={submit}>
            <div className="pb-5">
              <input
                type="text"
                onChange={handleInput}
                placeholder="Skills"
                name="skill"
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
                   onClick={() => handleButtonClick('Education')}
                >
                  Submit and Continue
                </button>
                
              </div>
            </form>
           
          </div>
        </div>
      </div>
    </div>
    
  )
}

export default Skills