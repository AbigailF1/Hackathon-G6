import Footer from "../components/Footer/Footer";

import { useEffect, useState } from "react";

import Experience from "./Experience";
import AddExperience from "../components/Profile/AddExperience";
import EditName from "../components/Profile/Main";
import Side from "../components/Profile/Side";
import About from "../components/Profile/About";
import Projects from "../components/Profile/Projects";
import Skills from "../components/Profile/Skills";
import Education from "../components/Profile/Education";
import Chat from "../components/Chat";
import { jwtDecode } from "jwt-decode";
import axios from "axios";
import ProfileHeader from "../components/Header/ProfileHeader";

const ProfilePage = () => {
  const token = localStorage.getItem("token");
  // const token = "eyJ0eXAiO.../// jwt token";
  const decoded = jwtDecode(token);

  console.log(decoded.user_id);
  const [profileData, setProfileData] = useState(null);
  const [isChatVisible, setIsChatVisible] = useState(false);

  const toggleChatVisibility = () => {
    setIsChatVisible(!isChatVisible);
  };

  useEffect(() => {
    // Define an async function to fetch data
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token");
        // Make the HTTP request using Axios
        const response = await axios.get(
          `http://127.0.0.1:8000/api/profiles/${decoded.user_id}/user/`,
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

  const profile = [
    {
      position: "Freelance UI/UX designer",
      employmentType: "Self-Employed",
      duration: "2017-Present",
      description:
        "Work with clients and web studios as a freelancer. Work in areas such as eCommerce web projects, creative landing pages, iOs and Android apps, corporate websites, and corporate identity sometimes.",
    },
    {
      position: "UI designer",
      employmentType: "Upwork",
      duration: "2013-Present",
      description: "Work with clients and web studios as a freelancer.",
    },
  ];
  return (
    <>
      <div>
        <ProfileHeader />
      </div>
      <div className="w-full relative main_container overflow-hidden flex flex-col items-end justify-start tracking-[normal]">
        <div className="w-[1180px] h-[2200px] relative hidden max-w-full">
          <div className="absolute h-full top-[0px] bottom-[0px] left-[0px] bg-snow w-[850px]" />
          <div className="absolute h-full top-[0px] bottom-[0px] left-[890px] bg-snow w-[290px]" />
        </div>

        <section className="self-stretch flex flex-row items-start justify-center pt-10  pr-[26px] pl-5 box-border max-w-full text-left text-lg  font-adamina">
          <div className="w-[1186px] flex flex-row flex-wrap items-start justify-start gap-[40px] max-w-full mq750:gap-[20px]">
            <EditName />

            <Side />
          </div>
        </section>
        <section className="self-stretch flex flex-row items-start justify-center pt-0 pb-5 pr-[350px] pl-5 box-border max-w-full text-left text-lg  font-adamina  lg:box-border mq450:pr-5 mq450:box-border mq750:pr-[87px] mq750:box-border">
          <div className="w-[850px] flex flex-col items-start justify-start max-w-full">
            <About />
          </div>
        </section>
        <section className="self-stretch flex flex-row items-end justify-center pt-0 pb-5 pr-[350px] pl-5 box-border max-w-full text-left text-lg font-adamina  lg:box-border mq450:pr-5 mq450:box-border mq750:pr-[87px] mq750:box-border">
          <Projects />
        </section>
        <section className="self-stretch flex flex-row items-start justify-center pt-0 pb-5 pr-[350px] pl-5 box-border max-w-full text-left text-lg font-adamina lg:box-border mq450:pr-5 mq450:box-border mq750:pr-[87px] mq750:box-border">
          <Skills />
        </section>
        <section className="self-stretch flex flex-row items-start justify-center pt-0 pb-5 pr-[350px] pl-5 box-border max-w-full text-left text-lg font-adamina  lg:box-border mq450:pr-5 mq450:box-border mq750:pr-[87px] mq750:box-border">
          <div className="w-[850px] flex flex-col items-start justify-start min-h-[600px] max-w-full mq1050:min-h-[auto]">
            <div className="self-stretch flex flex-col items-start justify-start gap-[20px] max-w-full">
              <div className="self-stretch rounded bg-white shadow-[0px_20px_60px_rgba(241,_245,_248,_0.5)] flex flex-col items-start justify-start pt-[30px] pb-[31px] pr-[29px] pl-[30px] box-border gap-[19px] max-w-full">
                <div className="w-[850px] h-[345px] relative rounded bg-white shadow-[0px_20px_60px_rgba(241,_245,_248,_0.5)] hidden max-w-full" />

                <div>
                  <AddExperience />
                  <Experience />
                  {/* <div className="grid gap-4 mt-4">
                    {profile.map((p, index) => (
                      <Experience key={index} profile={p} />
                    ))}
                  </div> */}
                </div>
              </div>

              <Education />
            </div>
          </div>
        </section>
        <div className="fixed margin-top-30 right-0 mb-4 mr-0 w-full h-">
          {isChatVisible && <Chat />}
        </div>

        <div className="h-14 w-14   fixed right-0 top-[500px]  flex items-center justify-center ">
          <img
            className="h-full chat cursor-pointer w-full z-[6] object-contain absolute left-[-23px] top-[3px] [transform:scale(2.632)]"
            loading="lazy"
            alt=""
            src="/chat@2x.png"
            onClick={toggleChatVisibility}
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProfilePage;
