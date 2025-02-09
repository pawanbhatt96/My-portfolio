import React from "react";
import { SiHtml5 } from "react-icons/si";
import { SiCss3 } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";

const Skills = () => {
  return (
    <section id="skills" className="py-20 mt-14 bg-slate-950 ">
      
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-slate-100 text-center mb-12 tracking-wider">My Skills</h2>
        <hr />
        <div className="flex flex-col items-center text-center mb-12">
          <p className="text-lg text-slate-100 mb-6 mt-6">
            I’m a passionate Front-End Developer with a solid foundation in HTML, CSS, and JavaScript. I specialize in building
            responsive, interactive, and dynamic websites. I’m currently exploring the MERN stack (MongoDB, Express, React, Node.js)
            to expand my full-stack development skills.
          </p>
        </div>

    
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">

          <div className="flex flex-col items-center justify-center p-6 bg-slate-700 shadow-lg rounded-lg text-center hover:scale-105 duration-300">
            <SiHtml5 className="text-6xl text-orange-500 mb-4" />
            <h3 className="font-semibold text-lg">HTML</h3>
          </div>

          <div className="flex flex-col items-center justify-center p-6 bg-slate-700 shadow-lg rounded-lg text-center hover:scale-105 duration-300">
            <SiCss3 className="text-6xl text-blue-500 mb-4" />
            <h3 className="font-semibold text-lg">CSS</h3>
          </div>

        
          <div className="flex flex-col items-center justify-center p-6 bg-slate-700 shadow-lg rounded-lg text-center hover:scale-105 duration-300">
            <SiJavascript className="text-6xl text-yellow-500 mb-4" />
            <h3 className="font-semibold text-lg">JavaScript</h3>
          </div>

        
          <div className="flex flex-col items-center justify-center p-6 bg-slate-700 shadow-lg rounded-lg text-center hover:scale-105 duration-300">
            <FaReact className="text-6xl text-blue-600 mb-4" />
            <h3 className="font-semibold text-lg">React</h3>
          </div>

          
          <div className="flex flex-col items-center justify-center p-6 bg-slate-700 shadow-lg rounded-lg text-center hover:scale-105 duration-300">
            <FaNodeJs className="text-6xl text-green-600 mb-4" />
            <h3 className="font-semibold text-lg">Node.js</h3>
          </div>

          
          <div className="flex flex-col items-center justify-center p-6 bg-slate-700 shadow-lg rounded-lg text-center hover:scale-105 duration-300">
            <SiMongodb className="text-6xl text-green-700 mb-4" />
            <h3 className="font-semibold text-lg">MongoDB</h3>
          </div>

          
          <div className="flex flex-col items-center justify-center p-6 bg-slate-700 shadow-lg rounded-lg text-center hover:scale-105 duration-300">
            <SiExpress className="text-6xl text-gray-600 mb-4" />
            <h3 className="font-semibold text-lg">Express</h3>
          </div>
        </div>

      
        <div className="my-16">
          <h3 className="text-2xl font-bold text-center text-white mb-6 tracking-wider">Frameworks & Libraries</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
            <div className="flex flex-col items-center p-6 bg-slate-700 shadow-lg rounded-lg text-center hover:scale-105 duration-300">
              <FaReact className="text-6xl text-blue-600 mb-4" />
              <h3 className="font-semibold text-lg">React</h3>
            </div>

          
            <div className="flex flex-col items-center p-6  bg-slate-700 shadow-lg rounded-lg text-center hover:scale-105 duration-300">
              <SiTailwindcss className="text-6xl text-sky-500 mb-4" />
              <h3 className="font-semibold text-lg">Tailwind CSS</h3>
            </div>

          
            <div className="flex flex-col items-center p-6 bg-slate-700 shadow-lg rounded-lg text-center hover:scale-105 duration-300">
              <FaBootstrap className="text-6xl text-purple-500 mb-4" />
              <h3 className="font-semibold text-lg">Bootstrap</h3>
            </div>
          </div>
        </div>

        
        <div className="my-16 px-4">
  <h3 id="exp" className="text-2xl font-bold text-center mb-6 tracking-wider text-white">Experience</h3>
  <div className="space-y-6">
    
    {/* Experience Card */}
    {[
      {
        title: "Full Stack Developer intern",
        company: "BUSINESS WEB SOLUTIONS",
        duration: "22 July - 22 October 2024",
        imgSrc: "./images/bws.png",
        tasks: [
          "Implemented an interactive multi-page React application, Geo Atlas, that dynamically fetches and displays country-specific data using an API. Features include insights on population, region, flags, capital, top-level domain, currencies, and languages, enhancing performance by 20%.",
          "Successfully mirrored the original Rocket Man website’s design. Emphasized a minimalistic and space themed design and uniform appearance across multiple browsers on a PC.",
          "Built a dynamic web application that fetches and presents random Star Wars character data using the Star Wars API, improving user engagement and experience.",
        ],
      },
      {
        title: "Frontend Web Developer Intern",
        company: "PRODIGY INFOTECH",
        duration: "10 January - 10 February 2024",
        imgSrc: "./images/prodigy.jpeg",
        tasks: [
          "Modernized a home page of a clone website for “Printo”, a personalized gift delivery platform. Implemented product gallery.",
          "Engineered a comprehensive stopwatch application featuring real-time timekeeping, start/stop/reset functions; ensured flawless performance across five major web browsers while enhancing user experience with adaptive design elements.Developed a dynamic, browser-based Tic-Tac-Toe game using core web technologies ensuring responsive design with adaptive layout, smooth game mechanics and cross browser compatibility",
          "Developed a dynamic, browser-based Tic-Tac-Toe game using core web technologies ensuring responsive design with adaptive layout, smooth game mechanics and cross browser compatibility.",
        ],
      },
      {
        title: "Web Developer Intern",
        company: "CODE SOFT",
        duration: "20 September - 20 October 2023",
        imgSrc: "./images/codesoft.jpeg",
        tasks: [
          "Innovated a fully functional digital calculator integrated with core arithmetic operations. Implemented error handling and input validation to prevent incorrect calculations.",
          "Designed a personal portfolio that included interactive elements and a custom content management system for updating and managing project information effortlessly.",
          "Crafted a landing page for a gymnasium's website using HTML, CSS and JavaScript, Incorporated interactive elements such as animated buttons, hover effects etc. Integrated heigh quality images to enhance user experience.",
        ],
      },
    ].map((exp, index) => (
      <div key={index} className="bg-slate-800 flex flex-col md:flex-row p-6 shadow-lg rounded-lg gap-6 items-center">
        
        {/* Text Section */}
        <div className="flex-1">
          <h4 className="font-semibold text-xl text-gray-300">{exp.title}</h4>
          <p className="text-white">{exp.company} | {exp.duration}</p>
          <ul className="list-disc pl-6 mt-4 text-white">
            {exp.tasks.map((task, i) => (
              <li key={i}>{task}</li>
            ))}
          </ul>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-40 flex-shrink-0">
          <img className="w-full h-auto rounded-md" src={exp.imgSrc} alt={exp.company} />
        </div>
        
      </div>
    ))}

  </div>
</div>

      </div>
    </section>
  );
};

export default Skills;
