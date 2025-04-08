import React from "react";
import lambdaImg from "../assets/lambda.svg";

const Footer = () => {
  return (
    <div>
      <div className="HomeContainer h-43 bg-[#313c5e] pt-[80px] mt-[80px]">
        <div className="relative mt-auto flex flex-col items-center gap-2">
          <h2 className=" text-white  whitespace-nowrap">
            Created by Kohary Boris
          </h2>
          <img src={lambdaImg} alt="Lambda Logo" className="w-6 h-6" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
