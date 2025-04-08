import React, { useState, useEffect } from "react";
import { FaBars, FaTimes, FaLinkedin, FaGithub } from "react-icons/fa";
import lambdaImg from "../assets/lambda.svg";


const Navigation = () => {
  // nastavene navOn a setNavOn , default bude navOn false / useState funkcia importnuta viz 1row
  const [navOn, setNavOn] = useState(false);
  // ClickNav funkcia cez arrov funkciu a hambac
  const ClickNav = () => setNavOn(!navOn);

  useEffect(() => {
    document.body.style.overflow = navOn ? "hidden" : "auto";
  }, [navOn]);

  const handleClose = () => {
    setNavOn(false);
  };

  return (
    <div className="fixed top-0 w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
      <a href="#Home" className="hover:text-[#4e588a]" onClick={handleClose}>B.K</a>

      <ul className="hidden md:flex">
        <li>
          <a href="#Home" className="hover:text-[#4e588a]" onClick={handleClose}>Home</a>
        </li>
        <li>
          <a href="#About" className="hover:text-[#4e588a]" onClick={handleClose}>About</a>
        </li>
        <li>
          <a href="#Skills" className="hover:text-[#4e588a]" onClick={handleClose}>Skills</a>
        </li>
        <li>
          <a href="#Contacts" className="hover:text-[#4e588a]" onClick={handleClose}>Contacts</a>
        </li>
      </ul>

      {/* Hamburger Icon */}
      <div onClick={ClickNav} className="md:hidden z-11 cursor-pointer text-[#dfd4d4] relative ml-2">
        {!navOn ? <FaBars size={30} /> : <FaTimes size={30} />}
        
      </div>

      {/* Mobilne Menu */}
      {navOn && (
        <ul className="absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center z-10 ">
          <li className="py-6 text-4xl">
            <a
              href="#Home"
              className="text-[#cbc7c7] hover:text-[#a29e9e]"
              onClick={handleClose}
            >
              Home
            </a>
          </li>
          <li className="py-6 text-4xl">
            <a
              href="#About"
              className="text-[#cbc7c7] hover:text-[#a29e9e]"
              onClick={handleClose}
            >
              About
            </a>
          </li>
          <li className="py-6 text-4xl">
            <a
              href="#Skills"
              className="text-[#cbc7c7] hover:text-[#a29e9e]"
              onClick={handleClose}
            >
              Skills
            </a>
          </li>
          <li className="py-6 text-4xl">
            <a
              href="#Contacts"
              className="text-[#cbc7c7] hover:text-[#a29e9e]"
              onClick={handleClose}
            >
              Contacts
            </a>
          </li>

           <div className="relative mt-44 flex flex-col items-center gap-2">
                    <h2 className=" text-white  whitespace-nowrap">
                      Created by Kohary Boris
                    </h2>
                    <img src={lambdaImg} alt="Lambda Logo" className="w-6 h-6" />
                  </div>
        </ul>
      )}

      {/* socka siete */}
      <div className="flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300">
            <a
              className="flex justify-between items-center w-full text-gray-500"
              href="/"
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300">
            <a
              className="flex justify-between items-center w-full text-gray-500"
              href="/"
            >
              GitHub <FaGithub size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navigation;
