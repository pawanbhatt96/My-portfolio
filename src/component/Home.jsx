import React from "react";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa6";
import { RiNodejsFill } from "react-icons/ri";
import { BiLogoGmail } from "react-icons/bi";
// .............
import { BiLogoMongodb } from "react-icons/bi";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";

import { ReactTyped,Typed } from "react-typed";

const Home = () => {
  return (
    <>
      <div id="home" className="flex flex-col md:flex-row   md:mt-20 bg-slate-950 ">
        <div  className="md:w-1/2 ml-16 mt-20 ">
          <span className="text-2xl tracking-wide  text-slate-100 font-semibold">Welcome to my <span className="text-yellow-600">portfolio</span></span>
          <div className="flex space-x-1 text-2xl md:text-4xl">
            <h1 className=" text-slate-100">Hello, I'm a </h1>
    

            <ReactTyped
          className="text-yellow-600 font-bold"
          strings={["Frontend Developer", "Programmer","Coder"]}
          typeSpeed={80}
          backSpeed={50}
          loop={true}
        />
          </div>{" "}
          <br />
          <p className="text-justify leading-5 tracking-wider text-slate-100 md:text-md sm: text-md font-sans">
          I’m a passionate Front-End Developer with a strong foundation in HTML, CSS, and JavaScript. I specialize in building responsive, user-friendly websites that deliver seamless and engaging user experiences. With my experience in React, I’m able to create dynamic and interactive web applications that perform efficiently across various platforms.Currently, I’m expanding my skill set by diving into the MERN stack (MongoDB, Express, React, Node.js), allowing me to create full-stack applications and explore backend development. I’m always eager to learn new technologies and improve my craft, and I thrive in collaborative environments where I can contribute to exciting and challenging projects. 
          </p>
          <br />
          <div className="flex justify-between ">
          <div className="space-y-2  ">
            <h1 className="font-bold  text-slate-100 text-lg">Avilable on :-</h1>

            <ul className="flex gap-5 text-slate-100 ">
              <li>
                <a href="https://github.com/pawanbhatt96"  target="_blank"  rel="noopener noreferrer">
                <FaGithub className="text-2xl hover:text-yellow-500"  />
                </a>
              </li> 
              <li>
                <a href="mailto:your-bhattpawan627@gmail.com" target="_blank" rel="noopener noreferrer">
                <BiLogoGmail className="text-2xl hover:text-yellow-500" />
                </a>
              </li> 
              <li>
                <a href="https://www.linkedin.com/in/pawan-bhatt-740738292" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="text-2xl hover:text-yellow-500" />
                </a>
              </li> 
              <li>
                <a href="https://web.telegram.org/t.me/login26" target="_blank" rel="noopener noreferrer">
                <FaTelegram className="text-2xl hover:text-yellow-500" />
                </a>
              </li> 
            </ul>
            <div className="flex gap-4">
           <div className="py-4"> <a href="https://acrobat.adobe.com/id/urn:aaid:sc:AP:1a1bf031-e34a-4c17-84c7-f0692be7412c" target="_blank" download>
  <button className="bg-red-600 px-5  py-1 ring-slate-600 text-white font-bold rounded-sm ">Resume</button>
</a></div>
<div className=" py-4"> <a href="https://wa.me/8700482808" target="_blank" download>
  <button className="bg-blue-500  p-4   py-1  text-white font-bold rounded-sm ">Let's talk</button>
</a></div>
</div>
          </div>
          {/* ............skills? */}
          <div className="space-y-2 h-16 ">
            <h1 className="font-bold text-lg text-slate-100">Currently working on :-</h1>

            <ul className="flex gap-6 text-slate-100 ">
              <BiLogoMongodb  className="md:text-3xl hover:text-yellow-500 border-[2px] rounded-full hover:scale-105 duration-300" />
              <SiExpress className="md:text-3xl hover:text-yellow-500 border-[2px] rounded-full hover:scale-105 duration-300" />
              <FaReact className="md:text-3xl hover:text-yellow-500 border-[2px] rounded-full hover:scale-105 duration-300" />
              <RiNodejsFill className="md:text-3xl hover:text-yellow-500 border-[2px] rounded-full hover:scale-105 duration-300" />
            </ul>
          </div>
          </div>

        </div>
        <div className="md:w-1/2  flex items-center justify-center">
        <div className="mt-20">
          <img className=" w-[300px] md:w-[360px] md:h-[360px] hover:scale-95 duration-200 rounded-full" src="./images/dp.avif" alt="" />
        </div>
        </div>
      </div>
    </>
  );
};

export default Home;
