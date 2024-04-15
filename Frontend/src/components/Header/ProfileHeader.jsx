import { Link } from "react-router-dom";
import "./header.css";
import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react";
import axios from "axios";

const ProfileHeader = () => {
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
          `https://hackathon-g6.onrender.com/api/profiles/${decoded.user_id}/user/`,
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
  return (
    <section className="self-stretch h-[120px] sticky top-[0] z-[99] max-w-full">
      {/* <Link to ="/home"> */}
      <header className="absolute top-[0px] left-[0px] w-full h-20 flex flex-row items-start justify-start py-0 pr-10 pl-[143px] box-border max-w-full text-center text-xs  font-adamina mq450:pl-5 mq450:box-border mq750:pl-[71px] mq750:box-border">
        <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded bg-white shadow-[0px_10px_40px_rgba(89,_120,_150,_0.06)]" />

        <img
          className="h-20 w-[130px] relative hidden min-h-[80px] z-[1]"
          alt=""
        />
        {/* </Link> */}
        <div className="self-stretch flex-1 flex flex-col items-start justify-start py-0 pr-[15px] pl-0 box-border max-w-full text-steelblue-200">
          <div className="self-stretch flex-1 flex flex-row items-start justify-start py-0 pr-px pl-0 gap-[21px] z-[1]">
            <div className="w-[90px] flex flex-row items-start justify-start">
              <Link to="/feed">
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
              </Link>
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
              <Link to="/collaborate">
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
              </Link>
            </div>
            <Link to="https://academate-group-chatt.onrender.com/">
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
            </Link>

            <div className="flex-1 flex flex-row items-start justify-start ">
              <Link to="/notifications">
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
              </Link>
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
          <Link to = "/search">
            <div className="self-stretch w-[127px] flex flex-row items-start justify-start relative gap-[73px]">
              <div className="self-stretch w-px relative box-border border-r-[1px] border-solid border-whitesmoke-200" />
              <img
                className="h-6 w-6 absolute !m-[0] top-[calc(50%_-_12px)] left-[30px] overflow-hidden shrink-0"
                alt=""
                src="/search.svg"
              />
              <input
                className="w-[calc(100%_-_14px)] [border:none] [outline:none] bg-[transparent] h-[55px] flex-1 flex flex-col items-start justify-start pt-[33px] px-0 pb-0 box-border font-adamina text-[16px] text-lightgray min-w-[32px]"
                placeholder="Search"
                type="text"
              />
            </div>
          </Link>
          <div className="self-stretch w-px relative box-border border-r-[1px] border-solid border-whitesmoke-200" />
        </div>
        <Link to="/profile">
          <div className="self-stretch w-[330px] flex flex-row pt-3 ml-50 items-end justify-start relative gap-[15px] max-w-full z-[1] text-left">
            <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] bg-white" />
            <div className="self-stretch flex flex-col items-start justify-start py-0 pr-3.5 pl-0">
              <div className="w-px flex-1 relative box-border border-r-[1px] border-solid border-whitesmoke-200" />
            </div>
            <div className="h-[62px] flex flex-col items-start justify-end pt-25 px-0 pb-5 box-border">
              <img
                className="w-[42px]   h-[42px] relative rounded-[26px] object-cover z-[1]"
                loading="lazy"
                alt=""
                src={profileData?.image}
              />
            </div>

            <div className="h-14 w-[101px] flex flex-col items-start justify-end pt-0 px-0 pb-[18px] box-border">
              <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[6px]">
                <div className="w-[89px] flex-1 flex flex-row items-start justify-between gap-[20px]">
                  <div className="relative uppercase  text-black inline-block min-w-[44px] z-[1]">
                    {profileData?.user.username}
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
        </Link>
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
      <Link to="/">
        <img
          className="absolute top-[0px] left-[29px] rounded-41xl w-[85px] h-[78px] object-cover z-[2]"
          loading="lazy"
          alt=""
          src="/screenshot-20240326-141440-3@2x.png"
        />
      </Link>
    </section>
  );
};

export default ProfileHeader;
