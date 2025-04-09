import React from "react";

const Skills = () => {
  return (
    <div>
      <div
        id="Skills"
        className="SkillsContainer h-auto bg-[#0a192f] mb-flex flex-col pt-[80px] mt-[80px] pb-10"
      >
        <h2 className="text-3xl text-[#f4d35e] font-sans font-bold ml-5 mt-10">Skills:</h2>
        <h3 className="ml-5 text-[#c0c4d4] mt-2 mr-5 font-sans font-bold text-xl">Hard Skills</h3>
        <ul className="ml-5 text-[#c0c4d4] mt-2">
          <li className="font-sans">HTML</li>
          <li className="font-sans">CSS</li>
          <li className="font-sans">JavaSript</li>
          <li className="font-sans">Tailwind CSS</li>
          <li className="font-sans">React</li>
          <li className="font-sans">Git</li>
        </ul>
        <h4 className="ml-5 text-[#c0c4d4] mt-2 mr-5 font-sans font-bold text-xl">Soft Skills</h4>
        <ul className="ml-5 text-[#c0c4d4] mt-2">
          <li className="font-sans">Communication</li>
          <li className="font-sans">Teamwork</li>
          <li className="font-sans">Time management</li>
          <li className="font-sans">Problem-solving</li>
        </ul>
      </div>
    </div>
  );
};

export default Skills;
