import React from "react";
import me from "../assets/boris1.jpeg";

const Home = () => {
  return (
    <div>
      <div
        id="Home"
        className="HomeContainer h-auto bg-[#0a192f] pt-[80px] flex"
      >
        <div className=" mb-flex flex-col ml-5 mb-5 ">
          <h2 className="text-3xl text-basicText font-sans font-bold mt-10 ">
            Home
          </h2>
          <p className="  text-basicText mt-2 font-sans">
            Hi, I am Boris! The guy who just love computers and everithing about
            them!
          </p>
          <a
            href="#About"
            className=" text-basicText font-sans font-bold" 
            
          >
            Would you like to know more??!!
          </a>
        </div>

        <div className="imageholder">
          <img
            src={me}
            alt="me!"
            className="w-2/3 h-auto  lg:w-1/8 lg:h-auto mt-12 ml-2 border-2 border-basicText"
          />
        </div>

 
      </div>
    </div>
  );
};

export default Home;
