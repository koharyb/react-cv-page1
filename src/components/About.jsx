import React from "react";

const About = () => {
  return (
    <div>
    <div
      id="About"
      className="AboutContainer h-auto bg-[#313c5e] flex flex-col pt-[80px] mt-[80px] pb-10"
    >
      <h2 className="text-3xl text-[#f4d35e] font-sans font-bold ml-5 mt-10">About Me:</h2>
      <p className="ml-5 text-[#c0c4d4] mt-2 mr-5">
        I'm Boris — a curious soul who spent over a decade in the transport business, 
        mastering logistics, planning, and team coordination. But deep down, I’ve always 
        been drawn to the world of computers. So I finally made the jump and followed my passion.  
      </p>
      <p className="ml-5 text-[#c0c4d4] mt-2 mr-5">
        Now I’m fully focused on becoming a great frontend developer. I love working with 
        HTML, CSS, Tailwind, and React — building clean and simple interfaces is my kind of fun.  
        I enjoy learning new things every day, whether it’s diving into JavaScript quirks 
        or figuring out how to fix a mysterious layout bug at midnight.
      </p>
      <p className="ml-5 text-[#c0c4d4] mt-2 mr-5">
        I’m not just a coder, though. I bring years of real-world experience in communication, 
        problem-*creating* (😄), and seeing things through from start to finish. I also enjoy 
        tweaking my Linux machine, staying healthy, and having the occasional Czech pilsner.
      </p>
    </div>
  </div>
  );
};

export default About;
