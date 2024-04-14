import { useState } from "react";
import { FiEdit } from "react-icons/fi";
import { Button, Modal } from "antd";
import { Input } from "antd";
import axios from "axios"; // Import Axios
import EditAbout from "./EditAbout"
import React from 'react'

const About = () => {
  return (
    <div className="self-stretch flex flex-col items-start justify-start max-w-full">
              <div className="self-stretch h-[50px] flex flex-col items-start justify-start">
                <div className="self-stretch h-px relative box-border border-t-[1px] border-solid border-gainsboro-100" />
                <div className="self-stretch flex-1 relative [background:linear-gradient(180deg,_rgba(241,_244,_248,_0.8),_rgba(241,_244,_248,_0))] z-[2] mt-[-1px]" />
              </div>
              <div className="self-stretch rounded bg-white shadow-[0px_20px_60px_rgba(241,_245,_248,_0.5)] flex flex-col items-end justify-start py-[30px] px-7 box-border gap-[20px] max-w-full mt-[-20px]">
               
                <EditAbout />

                <div className="w-[850px] h-[170px] relative rounded bg-white shadow-[0px_20px_60px_rgba(241,_245,_248,_0.5)] hidden max-w-full" />
                <div className="self-stretch flex flex-row items-start justify-start py-0 px-0.5 box-border max-w-full">
                  <div className="flex-1 flex flex-col items-start justify-start gap-[7px] max-w-full">
                    <h3 className="m-0 relative text-inherit font-normal font-inherit inline-block min-w-[53px] z-[1]">
                      About
                    </h3>
                    <div className="self-stretch relative text-sm leading-[150%] z-[1]">
                      I'm more experienced in eCommerce web projects and mobile
                      banking apps, but also like to work with creative
                      projects, such as landing pages or unusual corporate
                      websites.{" "}
                    </div>
                  </div>
                </div>
                <div className="w-[68px] relative text-xs uppercase text-steelblue-200 text-center inline-block min-w-[68px] z-[1]">
                  See more
                </div>
              </div>
            </div>
  )
}

export default About