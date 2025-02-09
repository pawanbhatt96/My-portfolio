import React from 'react';
import { FaWhatsapp } from "react-icons/fa";

const About = () => {
  return (
    <section>
      <div id="about" className="mt-[150px]">
        <h1 className="text-center font-bold text-3xl tracking-wider text-white mb-10">About Me</h1>
        <hr />
        <div className="flex flex-col md:flex-row items-center justify-between p-6 md:p-14">
        
          <div className="bg-slate-950 flex flex-col items-center justify-center mb-6 md:mb-0">
            <img className="w-48 h-48 md:w-80 md:h-80 rounded-sm" src="./images/about.jpg" alt="Pawan Bhatt" />
            <h2 className="font-bold text-2xl text-white mt-4">Pawan Bhatt - Developer</h2>
          </div>

        
          <div className="w-full md:w-1/2 mt-6 md:mt-0 text-justify leading-5 tracking-wider text-gray-700 font-sans">
            <p className="text-white mb-6">
              I’m a passionate Front-End Developer with a strong foundation in HTML, CSS, and JavaScript. I specialize in building responsive, user-friendly websites that deliver seamless and engaging user experiences. With my experience in React, I’m able to create dynamic and interactive web applications that perform efficiently across various platforms. Currently, I’m expanding my skill set by diving into the MERN stack (MongoDB, Express, React, Node.js), allowing me to create full-stack applications and explore backend development. I’m always eager to learn new technologies and improve my craft, and I thrive in collaborative environments where I can contribute to exciting and challenging projects.
            </p>

        
            <div className="flex items-center justify-center rounded-sm bg-green-600 hover:bg-green-500 w-40  md:w-40 gap-3 cursor-pointer tracking-wide">
              <h1 className="font-bold text-white text-lg">Contact me :-</h1>
              <ul className="gap-5">
                <li>
                  <a href="https://wa.me/8700482808" target="_blank" rel="noopener noreferrer">
                    <FaWhatsapp className="text-2xl text-white" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
