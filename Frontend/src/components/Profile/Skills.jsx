import React from 'react'
import EditSkill from "./EditSkill"

const Skills = () => {
  return (
    <div className="w-[850px] rounded bg-white shadow-[0px_20px_60px_rgba(241,_245,_248,_0.5)] flex flex-col items-end justify-start pt-[30px] pb-5 pr-4 pl-[30px] box-border gap-[15px] max-w-full">
            <EditSkill />
            <div className="w-[850px] h-[220px] relative rounded bg-white shadow-[0px_20px_60px_rgba(241,_245,_248,_0.5)] hidden max-w-full" />
            <div className="self-stretch flex flex-col items-start justify-start gap-[10px] max-w-full">
              <h3 className="m-0 relative text-inherit font-normal font-inherit z-[1]">
                Skills & Endoresments
              </h3>
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
  )
}

export default Skills