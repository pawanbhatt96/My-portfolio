import React from "react";
import { FaLinkedin, FaGithub, FaTelegram, FaReact } from "react-icons/fa6";
import { RiNodejsFill } from "react-icons/ri";
import { BiLogoGmail, BiLogoMongodb } from "react-icons/bi";
import { SiExpress } from "react-icons/si";
import { ReactTyped } from "react-typed";

const Home = () => {
  return (
    <div id="home" className="flex flex-col-reverse md:flex-row items-center justify-center md:mt-20 bg-slate-950 px-6 md:px-16 py-10 md:py-20">
      
      {/* Left Section */}
      <div className="md:w-1/2 text-center md:text-left">
        <span className="text-2xl tracking-wide text-slate-100 font-semibold">
          Welcome to my <span className="text-yellow-600">portfolio</span>
        </span>

        <div className="flex justify-center md:justify-start space-x-1 text-2xl md:text-4xl mt-2">
          <h1 className="text-slate-100">Hello, I'm a</h1>
          <ReactTyped
            className="text-yellow-600 font-bold"
            strings={["Developer", "Programmer", "Coder"]}
            typeSpeed={80}
            backSpeed={50}
            loop={true}
          />
        </div>

        <p className="text-justify leading-6 tracking-wider text-slate-100 md:text-md mt-4 font-sans">
          I’m a passionate Front-End Developer with a strong foundation in HTML, CSS, and JavaScript. 
          I specialize in building responsive, user-friendly websites that deliver seamless experiences. 
          With my experience in React, I create dynamic web applications that perform efficiently across platforms. 
          Currently, I’m expanding my skill set in the MERN stack (MongoDB, Express, React, Node.js) to build full-stack applications.
        </p>

        {/* Social Icons */}
        <div className="mt-6">
          <h1 className="font-bold text-slate-100 text-lg">Available on:</h1>
          <ul className="flex justify-center md:justify-start gap-5 text-slate-100 mt-2">
            <li><a href="https://github.com/pawanbhatt96" target="_blank" rel="noopener noreferrer"><FaGithub className="text-2xl hover:text-yellow-500" /></a></li>
            <li><a href="mailto:your-bhattpawan627@gmail.com" target="_blank" rel="noopener noreferrer"><BiLogoGmail className="text-2xl hover:text-yellow-500" /></a></li>
            <li><a href="https://www.linkedin.com/in/pawan-bhatt-740738292" target="_blank" rel="noopener noreferrer"><FaLinkedin className="text-2xl hover:text-yellow-500" /></a></li>
            <li><a href="https://web.telegram.org/t/me/login26" target="_blank" rel="noopener noreferrer"><FaTelegram className="text-2xl hover:text-yellow-500" /></a></li>
          </ul>
        </div>

        {/* Buttons */}
        <div className="flex justify-center md:justify-start gap-4 mt-6">
          <a href="https://acrobat.adobe.com/id/urn:aaid:sc:AP:1a1bf031-e34a-4c17-84c7-f0692be7412c" target="_blank">
            <button className="bg-red-600 px-5 py-2 text-white font-bold rounded-sm">Resume</button>
          </a>
          <a href="https://wa.me/8700482808" target="_blank">
            <button className="bg-blue-500 px-5 py-2 text-white font-bold rounded-sm">Let's Talk</button>
          </a>
        </div>

        {/* Skills Section */}
        <div className="mt-6">
          <h1 className="font-bold text-lg text-slate-100">Currently working on:</h1>
          <ul className="flex justify-center md:justify-start gap-6 text-slate-100 mt-2">
            <BiLogoMongodb className="text-3xl hover:text-yellow-500 border-[2px] rounded-full hover:scale-105 duration-300" />
            <SiExpress className="text-3xl hover:text-yellow-500 border-[2px] rounded-full hover:scale-105 duration-300" />
            <FaReact className="text-3xl hover:text-yellow-500 border-[2px] rounded-full hover:scale-105 duration-300" />
            <RiNodejsFill className="text-3xl hover:text-yellow-500 border-[2px] rounded-full hover:scale-105 duration-300" />
          </ul>
        </div>
      </div>

      {/* Right Section (Image) */}
      <div className="md:w-1/2 flex items-center justify-center mt-10 md:mt-0">
        <img className="w-[300px] md:w-[360px] md:h-[360px] hover:scale-95 duration-200 rounded-full" src="./images/dp.avif" alt="Profile" />
      </div>

    </div>
  );
};

export default Home;
