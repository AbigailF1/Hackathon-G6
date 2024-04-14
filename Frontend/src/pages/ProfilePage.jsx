import Footer from "../components/Footer/Footer";
import Header from "../components/Header (2)";
import ProfileHeader from "../components/Profile/ProfileHeader";
import { FiEdit } from "react-icons/fi";
import { Button, Modal } from "antd";
import { useEffect, useState } from "react";
import EditProjects from "../components/Profile/EditProjects";
import EditAbout from "../components/Profile/EditAbout";
import EditSkill from "../components/Profile/EditSkill";
import Experience from "./Experience";
import AddExperience from "../components/Profile/AddExperience";
import EditName from "../components/Profile/Main";
import Side from "../components/Profile/Side";
import About from "../components/Profile/About";
import Projects from "../components/Profile/Projects";
import Skills from "../components/Profile/Skills";
import Education from "../components/Profile/Education";
import Chat from "../components/Chat";

const ProfilePage = () => {
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
  function addExperience() {
    return <AddExperience />;
  }
  return (
    <>
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
                  <div className="grid gap-4 mt-4">
                    {profile.map((p, index) => (
                      <Experience key={index} profile={p} />
                    ))}
                  </div>
                </div>
              </div>

              <Education />
            </div>
          </div>
        </section>
        <Chat />
      </div>
      <Footer />
    </>
  );
};

export default ProfilePage;
