import React from "react";
import EditSkill from "./EditSkill";

const Skills = () => {
  return (
    <div className="max-w-[850px] rounded bg-white shadow-[0px_20px_60px_rgba(241,_245,_248,_0.5)] flex flex-col items-end justify-start pt-8 pb-5 pr-4 pl-8 gap-4">
  <EditSkill />
  <div className="max-w-full h-[220px] relative rounded bg-white shadow-[0px_20px_60px_rgba(241,_245,_248,_0.5)] hidden" />
  <div className="self-stretch flex flex-col items-start justify-start gap-2 max-w-full">
    <h3 className="m-0 relative text-inherit font-normal font-inherit z-[1] text-lg">
      Skills & Endoresments
    </h3>
    <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-3 box-border max-w-full text-sm">
      <div className="flex-1 flex flex-col items-start justify-start gap-2 min-w-[340px] max-w-full">
        <div className="self-stretch flex flex-row items-start justify-start gap-4">
          <div className="flex-1 rounded-md bg-white box-border flex flex-row items-start justify-start pt-2 px-4 pb-4 min-w-[162px] z-[1] border-[1px] border-solid border-whitesmoke-200">
            <input
              className="w-[40vw] border-none outline-none font-adamina text-sm bg-transparent h-6 relative leading-[150%] p-0 z-[1]"
              placeholder="User experience (UX)"
              type="text"
            />
          </div>
          <div className="flex-1 rounded-md bg-white box-border flex flex-row items-start justify-start pt-2 px-4 pb-4 min-w-[162px] z-[1] border-[1px] border-solid border-whitesmoke-200">
            <input
              className="w-[40vw] border-none outline-none font-adamina text-sm bg-transparent h-6 relative leading-[150%] p-0 z-[1]"
              placeholder="User interface (UI)"
              type="text"
            />
          </div>
        </div>
        <div className="self-stretch rounded-md bg-white box-border flex flex-row items-start justify-start pt-1 px-4 pb-2 max-w-full z-[1] border-[1px] border-solid border-whitesmoke-200">
          <input
            className="w-[20vw] border-none outline-none font-adamina text-sm bg-transparent h-6 relative leading-[150%] p-0 z-[1]"
            placeholder="add other skills"
            type="text"
          />
        </div>
      </div>
      <div className="w-[25vw] rounded-md bg-white box-border flex flex-row items-start justify-start pt-2 px-4 pb-4 z-[1] border-[1px] border-solid border-whitesmoke-200">
        <input
          className="w-[10vw] border-none outline-none font-adamina text-sm bg-transparent h-6 relative leading-[150%] p-0 z-[1]"
          placeholder="Brand identity"
          type="text"
        />
      </div>
    </div>
  </div>
  <div className="flex flex-row items-start justify-start py-0 px-4 text-xs text-steelblue-200">
    <div className="relative uppercase inline-block min-w-[10vw] z-[1]">
      Show ALL (17)
    </div>
  </div>
</div>

  );
};

export default Skills;
