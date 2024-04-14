import EditEducation from "./EditEducation";

const Education = () => {
  return (
    <div className="self-stretch rounded bg-white shadow-[0px_20px_60px_rgba(241,_245,_248,_0.5)] flex flex-col items-start justify-start pt-[30px] px-[30px] pb-8 box-border gap-[17px] max-w-full">
      <EditEducation />
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
                Bachelor's degree Field Of StudyComputer and Information Systems
                Security/Information Assurance
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
            Additional English classes and UX profile courses
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
