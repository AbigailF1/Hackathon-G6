import EditProjects from "./EditProjects";
import React from "react";
import AddProjects from "./AddProjects";

const Projects = () => {
  return (
    <div className="max-w-[850px] rounded bg-white shadow-[0px_20px_60px_rgba(241,_245,_248,_0.5)] flex flex-col items-start justify-start pt-[5vw] px-[5vw] pb-[5vw] box-border gap-[3vw]">
      <div className="max-w-full h-[40vw] relative rounded bg-white shadow-[0px_20px_60px_rgba(241,_245,_248,_0.5)] hidden" />
      <div className="self-stretch flex flex-col items-start justify-start gap-[2.5vw]">
        <AddProjects/>
        <div className="flex flex-row justify-start gap-[3vw]">
          <h3 className="items-start m-0 relative text-inherit font-normal font-inherit inline-block min-w-[15vw]">
            Projects
          </h3>
          <div className="items-start relative text-dimgray inline-block min-w-[10vw]">
            3 of 12
          </div>
        </div>
        <div className="flex flex-wrap justify-between gap-4vw">
          <div className="flex-none w-[25vw] h-[25vw] relative">
            <EditProjects />
            <img
              className="w-full h-full object-contain rounded-none"
              loading="lazy"
              alt=""
              src="/ext@2x.png"
            />
            <div className="relative leading-[150%]">Zara redesign concept</div>
          </div>
          <div className="flex-none w-[25vw] h-[25vw] relative">
            <EditProjects />
            <img
              className="w-full h-full object-contain rounded-none"
              alt=""
              src="/ext-1@2x.png"
            />
            <div className="relative leading-[150%]">
              SCTHON event brand identity
            </div>
          </div>
          <div className="flex-none w-[25vw] h-[25vw] relative pt-20">
            <EditProjects />
            <img
              className="w-full h-full object-contain rounded-none"
              alt=""
              src="/ext-2@2x.png"
            />
            <div className="relative leading-[150%] pt-10">
              Drozd. Brand identity. 2016
            </div>
          </div>
        </div>
      </div>

      <div className="relative text-xs uppercase text-steelblue-200 inline-block min-w-[10vw] pt-20">
        Show all (12)
      </div>
    </div>
  );
};

export default Projects;
