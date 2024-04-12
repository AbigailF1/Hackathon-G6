import Footer from "../components/Footer/Footer";
import Header from "../components/Header (2)";
import ProfileHeader from "../components/Profile/ProfileHeader";
import { FiEdit } from "react-icons/fi";
import { Button, Modal } from "antd";
import { useState } from "react";
import Edit from "../components/Profile/EditProjects"
import EditAbout from "../components/Profile/EditAbout"
import EditSkill from "../components/Profile/EditSkill"
import Experience from "./Experience";
import AddExperience from "../components/Profile/AddExperience";
const ProfilePage = () => {
  const profile = [
    {
      position: "Freelance UI/UX designer",
      employmentType: "Self-Employed",
      duration: "2017-Present",
      description: "Work with clients and web studios as a freelancer. Work in areas such as eCommerce web projects, creative landing pages, iOs and Android apps, corporate websites, and corporate identity sometimes."
    },
    {
      position: "UI designer",
      employmentType: "Upwork",
      duration: "2013-Present",
      description: "Work with clients and web studios as a freelancer."
    }
  ];
  function addExperience(){
    return(
      <AddExperience />
    )
  }
  return (
    <>
      <div className="w-full relative main_container overflow-hidden flex flex-col items-end justify-start tracking-[normal]">
        <div className="w-[1180px] h-[2200px] relative hidden max-w-full">
          <div className="absolute h-full top-[0px] bottom-[0px] left-[0px] bg-snow w-[850px]" />
          <div className="absolute h-full top-[0px] bottom-[0px] left-[890px] bg-snow w-[290px]" />
        </div>

        <section className="self-stretch flex flex-row items-start justify-center pt-0 pb-[21px] pr-[26px] pl-5 box-border max-w-full text-left text-lg  font-adamina">
          <div className="w-[1186px] flex flex-row flex-wrap items-start justify-start gap-[40px] max-w-full mq750:gap-[20px]">
            <div className="h-[360px] flex-1 relative rounded bg-white shadow-[0px_20px_60px_rgba(241,_245,_248,_0.5)] min-w-[556px] max-w-full mq450:h-auto mq450:min-h-[360] mq750:min-w-full">
              <div className="absolute top-[0px] left-[calc(50%_-_428px)] rounded bg-white shadow-[0px_20px_60px_rgba(241,_245,_248,_0.5)] w-full h-full hidden" />
              <img
                className="absolute top-[160px] left-[calc(50%_-_397px)] rounded-[50%] w-[170px] h-[170px] object-cover z-[2]"
                loading="lazy"
                alt=""
                src="/ellipse@2x.png"
              />
              <h3 className="m-0 absolute top-[205px] left-[calc(50%_-_202px)] text-inherit  text-black font-normal font-inherit inline-block min-w-[127px] z-[1]">
                Gebby Tesfaye
              </h3>
              <div className="absolute top-[237px] left-[calc(50%_-_202px)] text-sm leading-[150%] whitespace-pre-wrap inline-block w-[583px] z-[1]">Freelance UX/UI designer, 80+ projects in web design, mobile apps  (iOS & android) and creative projects. Open to offers.</div>
              <button className="cursor-pointer pt-[11px] px-[18px] pb-[5px] bg-white absolute top-[293px] left-[calc(50%_-_17px)] rounded flex flex-row items-start justify-start whitespace-nowrap z-[1] border-[1px] border-solid border-steelblue-200 hover:bg-gainsboro-200 hover:box-border hover:border-[1px] hover:border-solid hover:border-steelblue-100">
                <div className="h-8 w-[170px] relative rounded bg-white box-border hidden border-[1px] border-solid border-steelblue-200" />
                <div className="w-[134px] relative text-xs uppercase  text-black font-adamina text-steelblue-200 text-center inline-block z-[1]">
                  1,043 connections
                </div>
              </button>
              <button className="cursor-pointer [border:none] pt-[11px] px-[34px] pb-[5px] bg-[transparent] absolute top-[293px] left-[calc(50%_-_202px)] rounded [background:linear-gradient(180deg,_#0077b5,_#0e6795)] flex flex-row items-start justify-start whitespace-nowrap z-[1]">
                <div className="h-8 w-[170px] relative rounded [background:linear-gradient(180deg,_#0077b5,_#0e6795)] hidden" />
                <div className="w-[102px] relative text-xs uppercase  text-black font-adamin  text-center inline-block min-w-[102px] z-[1]">
                  Contact info
                </div>
              </button>
              <div className="absolute top-[0px] left-[6px] w-full flex flex-row items-start justify-between py-5 px-[30px] box-border bg-[url('/public/rectangle-3@2x.png')] bg-cover bg-no-repeat bg-[top] min-h-[180px] gap-[20px] max-w-full z-[1] mq450:flex-wrap">
                <img
                  className="w-[850px] relative max-h-full object-cover hidden max-w-full"
                  alt=""
src="/rectangle-3@2x.png"
                />
                <div className="h-9 w-9 relative z-[2] flex items-center justify-center">
                  <img
                    className="h-full w-full z-[2] object-contain absolute left-[0px] top-[10px] [transform:scale(2.667)]"
                    loading="lazy"
                    alt=""
                    src="/data-sorter.svg"
                  />
                </div>
                <div className="w-[178px] flex flex-row items-start justify-start gap-[10px]">
                  <button className="cursor-pointer [border:none] pt-[9.9px] px-[9.7px] pb-[7px] bg-gray-400 flex-1 rounded shadow-[0px_10px_30px_rgba(113,_123,_133,_0.05)] flex flex-row items-start justify-start gap-[6.3px] z-[2]">
                    <div className="h-9 w-[132px] relative rounded bg-gray-400 shadow-[0px_10px_30px_rgba(113,_123,_133,_0.05)] hidden" />
                    <input
                      className="m-0 h-4 w-4 relative overflow-hidden shrink-0 z-[1]"
                      type="checkbox"
                    />
                    <div className="flex-1 flex flex-col items-start justify-start pt-[3.1px] px-0 pb-0">
                      <div className="self-stretch relative text-xs uppercase font-adamina  text-center inline-block min-w-[90px] z-[1]">
                        Edit profile
                      </div>
                    </div>
                  </button>
                  <div className="h-9 w-9 relative min-h-[36px] z-[2] flex items-center justify-center">
                    <img
                      className="h-full w-full min-h-[36px] z-[2] object-contain absolute left-[0px] top-[10px] [transform:scale(2.667)]"
                      alt=""
                      src="/-1.svg"
                    />
                  </div>
                </div>
              </div>
              <div className="absolute top-[206px] left-[606px] text-sm md:text-xs lg:text-sm xl:text-xs leading-normal md:leading-[150%] lg:leading-normal xl:leading-[150%] z-[1]">
                Saint Petersburg, Russian Federation
              </div>
<img
                className="absolute top-[207px] left-[582px] w-4 h-4 overflow-hidden z-[1]"
                alt=""
                src="/navigation.svg"
              />
            </div>
            <div className="w-[290px] rounded bg-white shadow-[0px_20px_60px_rgba(241,_245,_248,_0.5)] flex flex-col items-start justify-start pt-[25px] pb-3.5 pr-[29px] pl-[30px] box-border gap-[10px] text-33xl text-steelblue-200">
              <div className="w-[290px] h-[360px] relative rounded bg-white shadow-[0px_20px_60px_rgba(241,_245,_248,_0.5)] hidden" />
              <div className="flex flex-row items-start justify-start pt-0 px-0 pb-[5px] gap-[19px] text-xs ">
                <div className="relative uppercase inline-block min-w-[124px] z-[1]">
                  your dashboard
                </div>
                <div className="w-[88px] relative [text-decoration:underline] uppercase text-steelblue-200 text-right inline-block min-w-[88px] z-[1]">
                  go to stats
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[9px]">
                <div className="h-px flex-1 relative box-border z-[1] border-t-[1px] border-solid border-whitesmoke-200" />
              </div>
              <div className="flex flex-col items-start justify-start">
                <div className="relative uppercase inline-block min-w-[60px] z-[1] mq450:text-12xl mq1050:text-23xl text-blue-600 text-4xl">
                  33
                </div>
                <div className="flex flex-row items-start justify-start py-0 pr-4 pl-[13px] mt-[-11px] text-sm ">
                  <div className="relative leading-[150%] inline-block min-w-[31px] z-[1]">
                    likes
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start">
                <div className="relative uppercase inline-block min-w-[52px] z-[1] mq450:text-12xl mq1050:text-23xl text-blue-600 text-4xl">
                  15
                </div>
                <div className="flex flex-row items-start justify-start py-0 pr-0 pl-0.5 mt-[-11px] text-sm ">
                  <div className="relative leading-[150%] inline-block min-w-[77px] z-[1]">
                    posts views
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start">
                <div className="relative uppercase inline-block min-w-[32px] z-[1] mq450:text-12xl mq1050:text-23xl text-blue-600 text-4xl">
                  9
                </div>
                <div className="relative text-sm leading-[150%]  z-[1] mt-[-4px]">
                  search appereances
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="self-stretch flex flex-row items-start justify-center pt-0 pb-5 pr-[350px] pl-5 box-border max-w-full text-left text-lg  font-adamina  lg:box-border mq450:pr-5 mq450:box-border mq750:pr-[87px] mq750:box-border">
          <div className="w-[850px] flex flex-col items-start justify-start max-w-full">
            <button className="cursor-pointer [border:none] pt-[21px] px-5 pb-[13px] bg-[transparent] w-60 rounded-t rounded-b-none [background:linear-gradient(180deg,_#0077b5,_#0e6795)] flex flex-row items-start justify-center box-border">
              <div className="h-[50px] w-60 relative rounded-t rounded-b-none [background:linear-gradient(180deg,_#0077b5,_#0e6795)] hidden" />
              <div className="w-14 relative text-xs uppercase font-adamina text-white text-center inline-block min-w-[56px] z-[1]">
                Profile
              </div>
            </button>
            <div className="self-stretch flex flex-col items-start justify-start max-w-full">
              <div className="self-stretch h-[50px] flex flex-col items-start justify-start">
<div className="self-stretch h-px relative box-border border-t-[1px] border-solid border-gainsboro-100" />
                <div className="self-stretch flex-1 relative [background:linear-gradient(180deg,_rgba(241,_244,_248,_0.8),_rgba(241,_244,_248,_0))] z-[2] mt-[-1px]" />
              </div>
              <div className="self-stretch rounded bg-white shadow-[0px_20px_60px_rgba(241,_245,_248,_0.5)] flex flex-col items-end justify-start py-[30px] px-7 box-border gap-[20px] max-w-full mt-[-20px]">
                
                <EditAbout/>

                <div className="w-[850px] h-[170px] relative rounded bg-white shadow-[0px_20px_60px_rgba(241,_245,_248,_0.5)] hidden max-w-full" />
                <div className="self-stretch flex flex-row items-start justify-start py-0 px-0.5 box-border max-w-full">
                  <div className="flex-1 flex flex-col items-start justify-start gap-[7px] max-w-full">
                    <h3 className="m-0 relative text-inherit font-normal font-inherit inline-block min-w-[53px] z-[1]">
                      About
                    </h3>
                    <div className="self-stretch relative text-sm leading-[150%] z-[1]">I'm more experienced in eCommerce web projects and mobile banking apps, but also like to work with creative projects, such as landing pages or unusual corporate websites. </div>
                  </div>
                </div>
                <div className="w-[68px] relative text-xs uppercase text-steelblue-200 text-center inline-block min-w-[68px] z-[1]">
                  See more
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="self-stretch flex flex-row items-end justify-center pt-0 pb-5 pr-[350px] pl-5 box-border max-w-full text-left text-lg font-adamina  lg:box-border mq450:pr-5 mq450:box-border mq750:pr-[87px] mq750:box-border">
          <div className="w-[850px] rounded bg-white shadow-[0px_20px_60px_rgba(241,_245,_248,_0.5)] flex flex-col items-start justify-start pt-[30px] px-[30px] pb-[26px] box-border gap-[15px] max-w-full mq450:pt-5 mq450:pb-5 mq450:box-border">
            <div className="w-[850px] h-[355px] relative rounded bg-white shadow-[0px_20px_60px_rgba(241,_245,_248,_0.5)] hidden max-w-full" />
            <div className="self-stretch flex flex-col items-start justify-start gap-[17px]">

              <Edit />
<div className="flex flex-row  justify-start gap-[21px]">
                <h3 className="items-start m-0 relative text-inherit font-normal font-inherit inline-block min-w-[69px] z-[1]">
                  Projects
                </h3>
                <div className="items-start relative text-dimgray inline-block min-w-[56px] z-[1]">
                  3 of 12
                </div>
              </div>
              <div className="flex justify-between gap-9">
                <div className="flex-none w-56 h-56">
                  <img
                    className="w-full h-full object-contain rounded-none"
                    loading="lazy"
                    alt=""
                    src="/ext@2x.png"
                  />
                </div>
                <div className="flex-none  w-56 h-56">
                  <img
                    className="w-full h-full object-contain rounded-none"
                    alt=""
                    src="/ext-1@2x.png"
                  />
                </div>
                <div className="flex-none w-56 h-56">
                  <img
                    className="w-full h-full object-contain rounded-none"
                    alt=""
                    src="/ext-2@2x.png"
                  />
                </div>
              </div>
            </div>
            <div className="w-[723px] flex flex-col items-start justify-start pt-0 px-0 pb-2.5 box-border gap-[5px] max-w-full text-sm">
              <div className="w-[670px] flex flex-row items-start justify-between gap-[20px] max-w-full text-3xs mq750:flex-wrap">
                <div className="relative leading-[150%] z-[1]">
                  Zara redesign concept
                </div>
                <div className="flex flex-row -ml-44  items-start justify-start gap-[64px] max-w-full mq450:gap-[64px_32px] mq750:flex-wrap">
                  <div className="relative leading-[150%] z-[1] -ml-9">
                    SCTHON event brand identity
                  </div>
                  <div className="relative leading-[150%] z-[1]">
                    Drozd. Brand identity. 2016
                  </div>
                </div>
              </div>
            </div>
            <div className="relative text-xs uppercase text-steelblue-200 inline-block min-w-[93px] z-[1]">
              Show all (12)
            </div>
          </div>
        </section>
        <section className="self-stretch flex flex-row items-start justify-center pt-0 pb-5 pr-[350px] pl-5 box-border max-w-full text-left text-lg font-adamina lg:box-border mq450:pr-5 mq450:box-border mq750:pr-[87px] mq750:box-border">
          <div className="w-[850px] rounded bg-white shadow-[0px_20px_60px_rgba(241,_245,_248,_0.5)] flex flex-col items-start justify-start pt-[30px] pb-5 pr-4 pl-[30px] box-border gap-[15px] max-w-full">
           <EditSkill/> 
            <div className="w-[850px] h-[220px] relative rounded bg-white shadow-[0px_20px_60px_rgba(241,_245,_248,_0.5)] hidden max-w-full" />
            <div className="self-stretch flex flex-col items-start justify-start gap-[10px] max-w-full">
              <h3 className="m-0 relative text-inherit font-normal font-inherit z-[1]">Skills & Endoresments</h3>
              <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-3.5 box-border max-w-full text-sm">
                <div className="flex-1 flex flex-row flex-wrap items-start justify-start gap-[17px] max-w-full">
                  <div className="flex-1 flex flex-col items-start justify-start gap-[14px] min-w-[340px] max-w-full mq1050:min-w-full">
                    <div className="self-stretch flex flex-row items-start justify-start gap-[20px] mq750:flex-wrap">
                      <div className="flex-1 rounded-md bg-white box-border flex flex-row items-start justify-start pt-[7.9px] px-5 pb-[25.3px] min-w-[162px] whitespace-nowrap z-[1] border-[1px] border-solid border-whitesmoke-200">
<div className="h-[45px] w-[250px] relative rounded-md bg-white box-border hidden border-[1px] border-solid border-whitesmoke-200" />
                        <div className="relative leading-[11.8px] z-[1]">
                          User experience (UX)
                        </div>
                      </div>
                      <div className="flex-1 rounded-md bg-white box-border flex flex-row items-start justify-start pt-[7.9px] px-5 pb-[25.3px] min-w-[162px] whitespace-nowrap z-[1] border-[1px] border-solid border-whitesmoke-200">
                        <div className="h-[45px] w-[250px] relative rounded-md bg-white box-border hidden border-[1px] border-solid border-whitesmoke-200" />
                        <div className="relative leading-[11.8px] inline-block min-w-[122px] z-[1]">
                          User interface (UI)
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch rounded-md bg-white box-border flex flex-row items-start justify-start pt-[7px] px-[17px] pb-3.5 max-w-full z-[1] border-[1px] border-solid border-whitesmoke-200">
                      <div className="h-[45px] w-[523px] relative rounded-md bg-white box-border hidden max-w-full border-[1px] border-solid border-whitesmoke-200" />
                      <input
                        className="w-[121px] [border:none] [outline:none] font-adamina text-sm bg-[transparent] h-6 relative leading-[150%]  text-left inline-block p-0 z-[1]"
                        placeholder="add other skills"
                        type="text"
                      />
                    </div>
                  </div>
                  <div className="w-[250px] rounded-md bg-white box-border flex flex-row items-start justify-start pt-[7.9px] px-5 pb-[25.3px] z-[1] border-[1px] border-solid border-whitesmoke-200">
                    <div className="h-[45px] w-[250px] relative rounded-md bg-white box-border hidden border-[1px] border-solid border-whitesmoke-200" />
                    <input
                      className="w-[97px] [border:none] [outline:none] font-adamina text-sm bg-[transparent] h-[11.8px] relative leading-[150%]  text-left inline-block p-0 z-[1]"
                      placeholder="Brand identity"
                      type="text"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row items-start justify-start py-0 px-[31px] text-xs text-steelblue-200">
              <div className="relative uppercase inline-block min-w-[92px] z-[1]">
                Show ALL (17)
              </div>
            </div>
          </div>
        </section>
        <section className="self-stretch flex flex-row items-start justify-center pt-0 pb-5 pr-[350px] pl-5 box-border max-w-full text-left text-lg font-adamina  lg:box-border mq450:pr-5 mq450:box-border mq750:pr-[87px] mq750:box-border">
          <div className="w-[850px] flex flex-col items-start justify-start min-h-[600px] max-w-full mq1050:min-h-[auto]">
            <div className="self-stretch flex flex-col items-start justify-start gap-[20px] max-w-full">
              <div className="self-stretch rounded bg-white shadow-[0px_20px_60px_rgba(241,_245,_248,_0.5)] flex flex-col items-start justify-start pt-[30px] pb-[31px] pr-[29px] pl-[30px] box-border gap-[19px] max-w-full">
                <div className="w-[850px] h-[345px] relative rounded bg-white shadow-[0px_20px_60px_rgba(241,_245,_248,_0.5)] hidden max-w-full" />
                {/* <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-1.5 box-border gap-[17px] max-w-full">
                  <h3 className="m-0 relative text-inherit font-normal font-inherit inline-block min-w-[98px] z-[1]">
                    Experience
                  </h3>
                  <div className="self-stretch flex flex-col items-start justify-start gap-[10px] max-w-full text-sm">
<div className="flex flex-row items-start justify-start gap-[16px]">
                      <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
                        <img
                          className="w-[54px] h-[54px] relative z-[1]"
                          alt=""
                          src="/group-1.svg"
                        />
                      </div>
                      <div className="flex flex-col items-start justify-start gap-[10px]">
                        <div className="relative leading-[150%] z-[1]">
                          Freelance UX/UI designer
                        </div>
                        <div className="flex flex-col items-start justify-start gap-[5px] text-3xs">
                          <div className="flex flex-row items-start justify-start gap-[12px]">
                            <div className="relative leading-[150%] inline-block min-w-[70px] z-[1]">
                              Self Employed
                            </div>
                            <div className="relative leading-[150%] inline-block min-w-[85px] z-[1]">
                              Around the world
                            </div>
                          </div>
                          <div className="flex flex-row items-start justify-start py-0 pr-1.5 pl-px">
                            <div className="flex flex-row items-start justify-start gap-[14px]">
                              <div className="relative leading-[150%] inline-block min-w-[92px] z-[1]">
                                Jun 2016 — Present
                              </div>
                              <div className="relative leading-[150%] text-steelblue-200 inline-block min-w-[54px] z-[1]">
                                3 yrs 3 mos
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch flex flex-row items-start justify-end max-w-full text-3xs">
                      <div className="w-[719px] relative leading-[150%] whitespace-pre-wrap inline-block shrink-0 max-w-full z-[1]">
                        Work with clients and web studios as freelancer. Work in
                        next areas: eCommerce web projects; creative landing
                        pages; iOs and Android apps; corporate web sites and
                        corporate identity sometimes.
                      </div>
                    </div>
                  </div>
                </div> */}
    <div>
      <AddExperience  />
      <div className="grid gap-4 mt-4">
        {profile.map((p, index) => (
          <Experience key={index} profile={p} />
        ))}
      </div>
    </div>
                {/* <div className="self-stretch flex flex-col items-start justify-start gap-[10px] max-w-full text-sm">
                  <div className="flex flex-row items-start justify-start gap-[16px]">
                    <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
                      <img
                        className="w-[54px] h-[54px] relative object-cover z-[1]"
                        alt=""
                        src="/group-2@2x.png"
                      />
                    </div>
                    <div className="flex flex-col items-start justify-start gap-[10px]">
                      <div className="relative leading-[150%] inline-block min-w-[107px] z-[1]">
                        UX/UI designer
                      </div>
                      <div className="flex flex-col items-start justify-start gap-[5px] text-3xs">
                        <div className="flex flex-row items-start justify-start gap-[10px]">
                          <div className="relative leading-[150%] inline-block min-w-[39px] z-[1]">
                            Upwork
                          </div>
                          <div className="relative leading-[150%] inline-block min-w-[63px] z-[1]">
                            International
                          </div>
</div>
                        <div className="flex flex-row items-start justify-start py-0 pr-0 pl-px">
                          <div className="flex flex-row items-start justify-start gap-[14px]">
                            <div className="relative leading-[150%] inline-block min-w-[92px] z-[1]">
                              Jun 2019 — Present
                            </div>
                            <div className="relative leading-[150%] text-steelblue-200 inline-block min-w-[29px] z-[1]">
                              3 mos
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-end max-w-full text-3xs">
                    <div className="w-[719px] relative leading-[150%] inline-block shrink-0 max-w-full z-[1]">
                      New experience with Upwork system. Work in next areas:
                      UX/UI design, graphic design, interaction design, UX
                      research.
                    </div>
                  </div>
                </div> */}
              </div>
              <div className="self-stretch rounded bg-white shadow-[0px_20px_60px_rgba(241,_245,_248,_0.5)] flex flex-col items-start justify-start pt-[30px] px-[30px] pb-8 box-border gap-[17px] max-w-full">
                <div className="w-[850px] h-[195px] relative rounded bg-white shadow-[0px_20px_60px_rgba(241,_245,_248,_0.5)] hidden max-w-full" />
                <h3 className="m-0 relative text-inherit font-normal font-inherit inline-block min-w-[88px] z-[1]">
                  Education
                </h3>
                <div className="self-stretch flex flex-col items-start justify-start gap-[10px] max-w-full text-sm">
                  <div className="flex flex-row items-start justify-start gap-[16px] max-w-full mq750:flex-wrap">
                    <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
                      <img
                        className="w-[54px] h-[54px] relative object-cover z-[1]"
                        alt=""
                        src="/group-3@2x.png"
                      />
                    </div>
                    <div className="flex flex-col items-start justify-start gap-[5px] max-w-full">
                      <div className="flex flex-col items-start justify-start gap-[10px] max-w-full">
                        <div className="relative leading-[150%] inline-block max-w-full z-[1]">
                          Addis Ababa Science and Technology University
                        </div>
                        <div className="relative text-3xs leading-[150%] z-[1]">
                          Bachelor's degree Field Of StudyComputer and
                          Information Systems Security/Information Assurance
                        </div>
                      </div>
                      <div className="flex flex-row items-start justify-start py-0 px-px text-3xs">
                        <div className="relative leading-[150%] inline-block min-w-[59px] z-[1]">
                          2013 — 2017
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-end max-w-full text-3xs">
                    <div className="w-[719px] relative leading-[150%] inline-block shrink-0 max-w-full z-[1]">
                      Additional English classes and UX profile courses​.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="h-14 w-14 relative z-[6] flex items-center justify-center">
          <img
            className="h-full w-full z-[6] object-contain absolute left-[-23px] top-[3px] [transform:scale(2.632)]"
            loading="lazy"
            alt=""
            src="/chat@2x.png"
          />
</div>
      </div>
      <Footer />
    </>
  );
};

export default ProfilePage;