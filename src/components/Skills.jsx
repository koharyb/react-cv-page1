import React from "react";

const Skills = () => {
  return (
    <div>
      <div
        id="Skills"
        className="SkillsContainer h-auto bg-[#313c5e] mb-flex flex-col pt-[80px] mt-[80px] pb-10"
      >
        <h2 className="text-3xl text-[#f4d35e] font-sans font-bold ml-5 mt-10">Skills:</h2>
        <h3 className="ml-5 text-[#c0c4d4] mt-2 mr-5 font-bold text-xl">Hard Skills</h3>
        <ul className="ml-5 text-[#c0c4d4] mt-2">
          <li className="">HTML</li>
          <li className="">CSS</li>
          <li className="">JavaSript</li>
          <li className="">Tailwind CSS</li>
          <li className="">React</li>
          <li className="">Git</li>
        </ul>
        <h4 className="ml-5 text-[#c0c4d4] mt-2 mr-5 font-bold text-xl">Soft Skills</h4>
        <ul className="ml-5 text-[#c0c4d4] mt-2">
          <li>Communication</li>
          <li>Teamwork</li>
          <li>Time management</li>
          <li>Problem-solving</li>
        </ul>
      </div>
    </div>
  );
};

export default Skills;
