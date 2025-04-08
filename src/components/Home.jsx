import React from "react";

const Home = () => {
  return (
    <div>
      <div
        id="Home"
        className="HomeContainer h-96 bg-[#313c5e] pt-[80px]"
      >
        <div className=" mb-flex flex-col ml-5">
        <p className="text-3xl text-[#c0c4d4] font-sans mt-10">Home</p>
        <p className="  text-[#c0c4d4] mt-2">
          Hi, I am Boris! The guy who just love computers and everithing about them! 
        </p>
        <a href="#About" className=" text-[#d3b92a]" style={{ fontFamily: 'StarshipTroopers' }}>Would you like to know more??!!</a>
      </div>
        </div>
     
    </div>
  );
};

export default Home;
