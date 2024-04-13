import EditProjects from "./EditProjects"
import React from "react"

const Projects = () => {
  return (
    <div className="w-[850px] rounded bg-white shadow-[0px_20px_60px_rgba(241,_245,_248,_0.5)] flex flex-col items-start justify-start pt-[30px] px-[30px] pb-[26px] box-border gap-[15px] max-w-full mq450:pt-5 mq450:pb-5 mq450:box-border">
            <div className="w-[850px] h-[355px] relative rounded bg-white shadow-[0px_20px_60px_rgba(241,_245,_248,_0.5)] hidden max-w-full" />
            <div className="self-stretch flex flex-col items-start justify-start gap-[17px]">
              <EditProjects />

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
  )
}

export default Projects