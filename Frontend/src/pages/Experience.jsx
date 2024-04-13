import EditExperience from "../components/Profile/EditExperience";
export default function Experience({ profile }) {
  return (
    <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-1.5 box-border gap-[17px] max-w-full">
      <EditExperience />

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
              {profile.position}
            </div>
            <div className="flex flex-col items-start justify-start gap-[5px] text-3xs">
              <div className="flex flex-row items-start justify-start gap-[12px]">
                <div className="relative leading-[150%] inline-block min-w-[70px] z-[1]">
                  {profile.employmentType}
                </div>
                <div className="relative leading-[150%] inline-block min-w-[85px] z-[1]">
                  Around the world
                </div>
              </div>
              <div className="flex flex-row items-start justify-start py-0 pr-1.5 pl-px">
                <div className="flex flex-row items-start justify-start gap-[14px]">
                  <div className="relative leading-[150%] inline-block min-w-[92px] z-[1]">
                    {profile.duration}
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
            {profile.description}
          </div>
        </div>
      </div>
      <div className="self-stretch h-px relative box-border z-[1] border-t-[1px] border-solid border-whitesmoke-200" />
    </div>
  );
}
