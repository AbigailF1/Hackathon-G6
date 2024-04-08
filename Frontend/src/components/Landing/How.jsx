import React from "react";
import { FiPenTool } from "react-icons/fi";
import { FaLaptopCode, FaUserTie } from "react-icons/fa";
import { BsBarChartLine } from "react-icons/bs";

const How = () => {
  const how = [
    {
      id: 1,
      icon: <FiPenTool />,
      title: "Create a project",
      description:
        "Start a project or join an existing one to collaborate with peers",
    },
    {
      id: 2,
      icon: <FaLaptopCode />,
      title: "Build Skills ",
      description: "Enhance your portfolio by showcasing your project work",
    },
    {
      id: 3,
      icon: <BsBarChartLine />,
      title: "Collaborate",
      description: "Enhance your collaborating skills",
    },
    {
      id: 4,
      icon: <FaUserTie />,
      title: "Boost Your Career",
      description:
        "Expand your professional network and find new opportunities",
    },
  ];

  return (
    <div className="section" id="how">
      <div>
        <p className="text-4xl text-teal-400 pt-28 pb-24 text-center">Key Benefits</p>
        <p className="text-sm text-gray leading-7 max-w-[700px] mx-auto pb-28">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit, a
          molestiae odit quam velit sit, recusandae repellendus error iusto
          culpa ad eveniet atque nam autem ipsa vitae rem quaerat quod eaque,
          deleniti nostrum unde! Adipisci ipsum non modi quisquam maxime?
        </p>
      </div>
      <div className="grid md:grid-cols-4 sm:grid-cols-2 mt-12 gap-8 pt-20 pb-28">
        {how.map((how) => (
          <div
            key={how.id}
            className="px-4 py-8 text-center md:w-[300px]
                 mx-auto md:h-50 rounded-md shadow cursor-pointer hover:translate-y-5 hover:border-b-4 
                             hover:border-indigo-700 transition-all duration-300 flex items-center justify-center h-full bg-gradient-to-r from-blue-500 to-blue-800 text-neutral-950"
          >
            <div>
              <div className="pl-28 pb-8">{how.icon}</div>
              <h4 className="text-2xl font-bold text-neutralDGrey mb-2 px-2">
                {how.title}
              </h4>
              <p className="text-sm text-neutralDGrey">{how.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center">
        <div className="sm:text-3xl text-2xl pb-5 pt-16">
          <span className="text-teal-400 text-4xl pt-20 pb-28"> How It Works</span>
        </div>
        <p className="text-sm text-gray leading-7 max-w-[700px] mx-auto pt-24 pb-28">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit, a
          molestiae odit quam velit sit, recusandae repellendus error iusto
          culpa ad eveniet atque nam autem ipsa vitae rem quaerat quod eaque,
          deleniti nostrum unde! Adipisci ipsum non modi quisquam maxime?
        </p>
      </div>
    </div>
  );
};

export default How;
