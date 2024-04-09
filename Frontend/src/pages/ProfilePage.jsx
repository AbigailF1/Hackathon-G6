import Footer from "../components/Footer/Footer";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Chat from "../components/Chat";
import { jwtDecode } from "jwt-decode";

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
  }, []); // E
  console.log(profileData);

  return (
    <>
      <div className="w-full relative main_container overflow-hidden flex flex-col items-end justify-start tracking-[normal]">
        <div className="w-[1180px] h-[2200px] relative hidden max-w-full">
          <div className="absolute h-full top-[0px] bottom-[0px] left-[0px] bg-snow w-[850px]" />
          <div className="absolute h-full top-[0px] bottom-[0px] left-[890px] bg-snow w-[290px]" />
        </div>
        <section className="self-stretch h-[120px] sticky top-[0] z-[99] max-w-full">
          <header className="absolute top-[0px] left-[0px] w-full h-20 flex flex-row items-start justify-start py-0 pr-10 pl-[143px] box-border max-w-full text-center text-xs  font-adamina mq450:pl-5 mq450:box-border mq750:pl-[71px] mq750:box-border">
            <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded bg-white shadow-[0px_10px_40px_rgba(89,_120,_150,_0.06)]" />
            <img
              className="h-20 w-[130px] relative hidden min-h-[80px] z-[1]"
              alt=""
            />
            <div className="self-stretch flex-1 flex flex-col items-start justify-start py-0 pr-[15px] pl-0 box-border max-w-full text-steelblue-200">
              <div className="self-stretch flex-1 flex flex-row items-start justify-start py-0 pr-px pl-0 gap-[21px] z-[1]">
                <div className="w-[90px] flex flex-row items-start justify-start">
                  <div className="flex-1 flex flex-col items-start justify-start pt-[18px] px-3 pb-0 relative gap-[10px]">
                    <div className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] bg-white" />
                    <div className="h-6 flex flex-row items-start justify-start py-0 px-[21px] box-border">
                      <img
                        className="h-6 w-6 relative overflow-hidden shrink-0 z-[1]"
                        loading="lazy"
                        alt=""
                        src="/rss.svg"
                      />
                    </div>
                    <div className="flex flex-row items-start justify-start py-0 px-4">
                      <div className="w-[34px] relative uppercas text-black inline-block min-w-[34px] z-[1]">
                        Feed
                      </div>
                    </div>
                    <div className="self-stretch h-0.5 relative bg-steelblue-200 z-[1]" />
                  </div>
                  <div className="h-20 w-[90px] relative hidden ">
                    <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-white" />
                    <img
                      className="absolute h-[30%] w-[26.67%] top-[22.5%] right-[36.67%] bottom-[47.5%] left-[36.67%] max-w-full overflow-hidden max-h-full"
                      alt=""
                    />
                    <div className="absolute top-[65%]   text-black left-[31.11%] uppercase">
                      feed
                    </div>
                  </div>
                </div>
                <div className="flex-1 flex flex-row items-start justify-start">
                  <div className="h-20 w-[90px] relative hidden">
                    <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-white" />
                    <div className="absolute h-[2.5%] w-[73.33%] top-[97.5%] right-[13.33%] bottom-[0%] left-[13.33%] bg-steelblue-200" />
                    <img
                      className="absolute h-[30%] w-[26.67%] top-[22.5%] right-[36.67%] bottom-[47.5%] left-[36.67%] max-w-full overflow-hidden max-h-full"
                      alt=""
                    />
                    <div className="absolute top-[65%]  text-black left-[12.22%] uppercase">
                      Network
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col items-start justify-end pt-[52px] px-0 pb-3 relative ">
                    <div className="w-[calc(100%_-_17px)] h-full absolute !m-[0] top-[0px] right-[9px] bottom-[0px] left-[8px] bg-white" />
                    <img
                      className="w-6 h-6 absolute !m-[0] top-[18px] left-[41px] overflow-hidden shrink-0 z-[1]"
                      alt=""
                      src="/users-1.svg"
                    />
                    <div className="self-stretch relative   text-black uppercase inline-block min-w-[107px] z-[1]">
                      collaborater
                    </div>
                  </div>
                </div>
                <div className="self-stretch w-[95px] flex flex-col items-start justify-start py-0 pr-[5px] pl-0 box-border ">
                  <div className="self-stretch flex-1 flex flex-col items-end justify-start">
                    <div className="self-stretch flex flex-col items-start justify-start pt-[18px] pb-3 pr-[26px] pl-[27px] relative gap-[10px]">
                      <div className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] bg-white" />
                      <div className="h-6 flex flex-row items-start justify-start py-0 pr-[7px] pl-1.5 box-border">
                        <img
                          className="h-6 w-6 relative overflow-hidden shrink-0 z-[1]"
                          loading="lazy"
                          alt=""
                          src="/messagesquare.svg"
                        />
                      </div>
                      <div className="self-stretch relative uppercase  text-black inline-block min-w-[37px] z-[1]">
                        chat
                      </div>
                    </div>
                    <div className="self-stretch h-20 relative hidden z-[2] text-steelblue-200">
                      <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-white" />
                      <div className="absolute h-[2.5%] w-[73.33%] top-[97.5%] right-[13.33%] bottom-[0%] left-[13.33%] bg-steelblue-200" />
                      <img
                        className="absolute h-[30%] w-[26.67%] top-[22.5%] right-[36.67%] bottom-[47.5%] left-[36.67%] max-w-full overflow-hidden max-h-full"
                        alt=""
                      />
                      <div className="absolute top-[65%]   text-black left-[30%] uppercase">
                        chat
                      </div>
                    </div>
                    <div className="flex flex-row items-start justify-end py-0 px-[27px] mt-[-67px] text-left text-[9px] text-white">
                      <div className="flex flex-row items-start justify-start pt-1 px-1.5 pb-0 relative z-[2]">
                        <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-[27px] [background:linear-gradient(215.49deg,_#ffb75e,_#ed8f03)]" />
                        <div className="relative uppercase  text-blackinline-block min-w-[4px] z-[1]">
                          1
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex-1 flex flex-row items-start justify-start ">
                  <div className="flex-1 flex flex-col items-start justify-end pt-[52px] px-0 pb-3 relative">
                    <div className="w-[calc(100%_-_9px)] h-full absolute !m-[0] top-[0px] right-[5px] bottom-[0px] left-[4px] bg-white" />
                    <img
                      className="w-6 h-6 absolute !m-[0] top-[18px] left-[37px] overflow-hidden shrink-0 z-[1]"
                      loading="lazy"
                      alt=""
                      src="/bell.svg"
                    />
                    <div className="self-stretch relative   text-black uppercase inline-block min-w-[99px] z-[1]">
                      notification
                    </div>
                  </div>
                  <div className="h-20 w-[90px] relative hidden text-steelblue-200">
                    <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-white" />
                    <div className="absolute h-[2.5%] w-[73.33%] top-[97.5%] right-[13.33%] bottom-[0%] left-[13.33%] bg-steelblue-200" />
                    <img
                      className="absolute h-[30%] w-[26.67%] top-[22.5%] right-[36.67%] bottom-[47.5%] left-[36.67%] max-w-full overflow-hidden max-h-full"
                      alt=""
                    />
                    <div className="absolute top-[65%]  text-black left-[16.67%] uppercase">
                      notices
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch w-[367px] flex flex-row items-start justify-between max-w-full gap-[20px] z-[1]">
              <div className="self-stretch w-[127px] flex flex-row items-start justify-start relative gap-[73px]">
                <div className="self-stretch w-px relative box-border border-r-[1px] border-solid border-whitesmoke-200" />
                <img
                  className="h-6 w-6 absolute !m-[0] top-[calc(50%_-_12px)] left-[30px] overflow-hidden shrink-0"
                  alt=""
                  src="/search.svg"
                />
                <input
                  className="w-[calc(100%_-_24px)] [border:none] [outline:none] bg-[transparent] h-[55px] flex-1 flex flex-col items-start justify-start pt-[33px] px-0 pb-0 box-border font-adamina text-[16px] text-lightgray min-w-[32px]"
                  placeholder="Search"
                  type="text"
                />
              </div>
              <div className="self-stretch w-px relative box-border border-r-[1px] border-solid border-whitesmoke-200" />
            </div>
            <div className="self-stretch w-[330px] flex flex-row items-end justify-start relative gap-[15px] max-w-full z-[1] text-left">
              <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] bg-white" />
              <div className="self-stretch flex flex-col items-start justify-start py-0 pr-3.5 pl-0">
                <div className="w-px flex-1 relative box-border border-r-[1px] border-solid border-whitesmoke-200" />
              </div>
              <div className="h-[62px] flex flex-col items-start justify-end pt-0 px-0 pb-5 box-border">
                <img
                  className="w-[42px] h-[42px] relative rounded-[26px] object-cover z-[1]"
                  loading="lazy"
                  alt=""
                  src="/rectangle@2x.png"
                />
              </div>
              <img
                className="h-3 w-3 relative overflow-hidden shrink-0 hidden z-[3]"
                alt=""
              />
              <div className="h-14 w-[101px] flex flex-col items-start justify-end pt-0 px-0 pb-[18px] box-border">
                <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[6px]">
                  <div className="w-[89px] flex-1 flex flex-row items-start justify-between gap-[20px]">
                    <div className="relative uppercase  text-black inline-block min-w-[44px] z-[1]">
                      gebby
                    </div>
                    <div className="self-stretch w-0 relative uppercase text-gray-300 inline-block z-[1]" />
                  </div>
                  <div className="self-stretch flex-1 flex flex-row items-start justify-between gap-[20px] text-dimgray">
                    <div className="relative inline-block min-w-[65px]  text-black whitespace-nowrap z-[1]">
                      36 follower
                    </div>
                    <div className="self-stretch w-0 relative text-limegreen inline-block z-[1]" />
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch w-[90px] flex flex-row items-end justify-start relative gap-[20.5px] z-[1]">
              <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] bg-white" />
              <div className="self-stretch w-px relative box-border border-r-[1px] border-solid border-whitesmoke-200" />
              <div className="flex-1 flex flex-col items-start justify-end pt-0 px-0 pb-3">
                <div className="self-stretch flex flex-col items-start justify-start gap-[10px]">
                  <div className="h-6 flex flex-row items-start justify-start py-0 px-3 box-border">
                    <img
                      className="h-6 w-6 relative overflow-hidden shrink-0 z-[1]"
                      alt=""
                      src="/morehorizontal.svg"
                    />
                  </div>
                  <div className="self-stretch relative uppercase  text-black inline-block min-w-[48px] z-[1]">
                    other
                  </div>
                </div>
              </div>
              <div className="self-stretch w-px relative box-border border-r-[1px] border-solid border-whitesmoke-200" />
            </div>
          </header>
          <img
            className="absolute top-[0px] left-[29px] rounded-41xl w-[85px] h-[78px] object-cover z-[2]"
            loading="lazy"
            alt=""
            src="/screenshot-20240326-141440-3@2x.png"
          />
        </section>
        <section className="self-stretch flex flex-row items-start justify-center pt-0 pb-[21px] pr-[26px] pl-5 box-border max-w-full text-left text-lg  font-adamina">
          <div className="w-[1186px] flex flex-row flex-wrap items-start justify-start gap-[40px] max-w-full mq750:gap-[20px]">
            <div className="h-[360px] flex-1 relative rounded bg-white shadow-[0px_20px_60px_rgba(241,_245,_248,_0.5)] min-w-[556px] max-w-full mq450:h-auto mq450:min-h-[360] mq750:min-w-full">
              <div className="absolute top-[0px] left-[calc(50%_-_428px)] rounded bg-white shadow-[0px_20px_60px_rgba(241,_245,_248,_0.5)] w-full h-full hidden" />
              <img
                className="absolute top-[160px] left-[calc(50%_-_397px)] rounded-[50%] w-[170px] h-[170px] object-cover z-[2]"
                loading="lazy"
                alt=""
                src={profileData?.image}
              />
              <h3 className="m-0 absolute top-[205px] left-[calc(50%_-_202px)] text-inherit  text-black font-normal font-inherit inline-block min-w-[127px] z-[1]">
                Gebby Tesfaye
              </h3>
              <div className="absolute top-[237px] left-[calc(50%_-_202px)] text-sm leading-[150%] whitespace-pre-wrap inline-block w-[583px] z-[1]">
                <ul style={{ listStyleType: "none", marginLeft: "1%" }}>
                  {profileData?.skills.map((skill, index) => (
                    <React.Fragment key={index}>
                      <span>{skill.title}</span>
                      {/* Render '|' if it's not the last skill */}
                      {index !== profileData.skills.length - 1 && " | "}
                    </React.Fragment>
                  ))}
                </ul>
              </div>
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
              <div className="absolute top-[206px] left-[606px] text-xs leading-[150%] z-[1]">
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
                <div className="relative uppercase inline-block min-w-[60px] z-[1] mq450:text-12xl mq1050:text-23xl">
                  33
                </div>
                <div className="flex flex-row items-start justify-start py-0 pr-4 pl-[13px] mt-[-11px] text-sm ">
                  <div className="relative leading-[150%] inline-block min-w-[31px] z-[1]">
                    likes
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start">
                <div className="relative uppercase inline-block min-w-[52px] z-[1] mq450:text-12xl mq1050:text-23xl">
                  15
                </div>
                <div className="flex flex-row items-start justify-start py-0 pr-0 pl-0.5 mt-[-11px] text-sm ">
                  <div className="relative leading-[150%] inline-block min-w-[77px] z-[1]">
                    posts views
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start">
                <div className="relative uppercase inline-block min-w-[32px] z-[1] mq450:text-12xl mq1050:text-23xl">
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
              <div className="self-stretch rounded bg-white shadow-[0px_20px_60px_rgba(241,_245,_248,_0.5)] flex flex-col items-start justify-start py-[30px] px-7 box-border gap-[20px] max-w-full mt-[-20px]">
                <div className="w-[850px] h-[170px] relative rounded bg-white shadow-[0px_20px_60px_rgba(241,_245,_248,_0.5)] hidden max-w-full" />
                <div className="self-stretch flex flex-row items-start justify-start py-0 px-0.5 box-border max-w-full">
                  <div className="flex-1 flex flex-col items-start justify-start gap-[7px] max-w-full">
                    <h3 className="m-0 relative text-inherit font-normal font-inherit inline-block min-w-[53px] z-[1]">
                      About
                    </h3>
                    <div className="self-stretch relative text-sm leading-[150%] z-[1]">
                      {profileData?.bio}
                    </div>
                  </div>
                </div>
                <div className="w-[68px] relative text-xs uppercase text-steelblue-200 text-center inline-block min-w-[68px] z-[1]">
                  See more
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="self-stretch flex flex-row items-start justify-center pt-0 pb-5 pr-[350px] pl-5 box-border max-w-full text-left text-lg font-adamina  lg:box-border mq450:pr-5 mq450:box-border mq750:pr-[87px] mq750:box-border">
          <div className="w-[850px] rounded bg-white shadow-[0px_20px_60px_rgba(241,_245,_248,_0.5)] flex flex-col items-start justify-start pt-[30px] px-[30px] pb-[26px] box-border gap-[15px] max-w-full mq450:pt-5 mq450:pb-5 mq450:box-border">
            <div className="w-[850px] h-[355px] relative rounded bg-white shadow-[0px_20px_60px_rgba(241,_245,_248,_0.5)] hidden max-w-full" />
            <div className="self-stretch flex flex-col items-start justify-start gap-[17px]">
              <div className="flex flex-row items-start justify-start gap-[21px]">
                <h3 className="m-0 relative text-inherit font-normal font-inherit inline-block min-w-[69px] z-[1]">
                  Projects
                </h3>
                <div className="relative text-dimgray inline-block min-w-[56px] z-[1]">
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
              <div className="w-[670px] flex flex-row items-start justify-between gap-[20px] max-w-full text-3xs mq750:flex-wrap">
                <div className="w-32 flex flex-row items-start justify-start py-0 pr-2 pl-0 box-border">
                  <div className="relative leading-[150%] inline-block min-w-[120px] z-[2]">
                    UX/UI design, 15.07.2019
                  </div>
                  <img
                    className="h-3 w-3 relative z-[1] ml-[-55px]"
                    loading="lazy"
                    alt=""
                    src="/group.svg"
                  />
                </div>
                <div className="relative leading-[150%] inline-block min-w-[128px] z-[1]">
                  Graphic design, 03.31.2019
                </div>
                <div className="relative leading-[150%] z-[1]">
                  Graphic design, 03.04.2016
                </div>
              </div>
            </div>
            <div className="relative text-xs uppercase text-steelblue-200 inline-block min-w-[93px] z-[1]">
              Show all (12)
            </div>
          </div>
        </section>
        <section className="self-stretch flex flex-row items-start justify-center pt-0 pb-5 pr-[350px] pl-5 max-w-full text-left text-lg font-adamina  mq450:pr-5  mq750:pr-[87px] ">
          <div className="w-[850px] rounded bg-white shadow-[0px_20px_60px_rgba(241,_245,_248,_0.5)] flex flex-col items-start justify-start pt-[30px] pb-5 pr-4 pl-[30px] gap-[15px] max-w-full">
            <div className="w-[850px] h-[220px] relative rounded bg-white shadow-[0px_20px_60px_rgba(241,_245,_248,_0.5)] hidden max-w-full" />
            <div className="self-stretch flex flex-col items-start justify-start gap-[10px] max-w-full">
              <h3 className="m-0 relative text-inherit font-normal font-inherit z-[1]">
                Skills & Endoresments
              </h3>
              <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-3.5 max-w-full text-sm">
                <div className="flex-1 flex flex-col items-start justify-start gap-[14px] min-w-[340px] max-w-full mq1050:min-w-full">
                  <div className="self-stretch rounded-md bg-white  flex flex-row items-start justify-start pt-[7px] pb-3.5 max-w-full z-[1]  ">
                    {profileData?.skills.map((skill, index) => (
                      <div
                        key={index}
                        className="w-full py-2 px-4 my-2 rounded-md bg-white border-[1px] border-solid border-whitesmoke-200"
                      >
                        {skill.title}
                      </div>
                    ))}
                  </div>
                  <div className="self-stretch rounded-md bg-white  flex flex-row items-start justify-start pt-[7px] px-[17px] pb-3.5 max-w-full z-[1] ">
                    <div className="h-[45px] w-[523px] relative rounded-md bg-white  hidden max-w-full " />
                    <input
                      className="w-[121px] [border:none] [outline:none] font-adamina text-sm bg-[transparent] h-6 relative leading-[150%]  text-left inline-block p-0 z-[1]"
                      placeholder="add other skills"
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
                <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-1.5 box-border gap-[17px] max-w-full">
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
                </div>
                <div className="self-stretch h-px relative box-border z-[1] border-t-[1px] border-solid border-whitesmoke-200" />
                <div className="self-stretch flex flex-col items-start justify-start gap-[10px] max-w-full text-sm">
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
                </div>
              </div>
              <div className="self-stretch rounded bg-white shadow-[0px_20px_60px_rgba(241,_245,_248,_0.5)] flex flex-col items-start justify-start pt-[30px] px-[30px] pb-8 box-border gap-[17px] max-w-full">
                <div className="w-[850px] h-[195px] relative rounded bg-white shadow-[0px_20px_60px_rgba(241,_245,_248,_0.5)] hidden max-w-full" />
                <h3 className="m-0 relative text-inherit font-normal font-inherit inline-block min-w-[88px] z-[1]">
                  Education
                </h3>
                <div className="self-stretch flex flex-col items-start justify-start gap-[10px] max-w-full text-sm">
                  {profileData?.educations.map((education, index) => (
                    <div
                      key={index}
                      className="flex flex-row items-start justify-start gap-[16px] max-w-full mq750:flex-wrap"
                    >
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
                            {education.university_name}
                          </div>
                          <div className="relative text-3xs leading-[150%] z-[1]">
                            Bachelor's degree Field Of Study:{" "}
                            {education.department}
                          </div>
                        </div>
                        <div className="flex flex-row items-start justify-start py-0 px-px text-3xs">
                          <div className="relative leading-[150%] inline-block min-w-[59px] z-[1]">
                            {" "}
                            Acadamic year-
                            {education.year}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
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
        <div className="fixed margin-top-30 right-0 mb-4 mr-0 w-full h-">
          {isChatVisible && <Chat />}
        </div>

        <div className="h-14 w-14 relative z-[6] flex items-center justify-center ">
          <img
            className="h-full w-full z-[6] object-contain absolute left-[-23px] top-[3px] [transform:scale(2.632)]"
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
