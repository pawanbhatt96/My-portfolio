import React, { useState } from 'react';
import { BiLogoGmail } from "react-icons/bi";
import { FaLinkedin, FaGithub, FaTelegram } from "react-icons/fa6";
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';

const Footer = () => {
  const [count, setCount] = useState(false);

  return (
    <div className='bg-slate-600 py-6 px-4 md:px-10 lg:px-20 text-white'>
      
      <div className='flex flex-col md:flex-row items-center justify-between text-center md:text-left space-y-4 md:space-y-0'>

        {/* Copyright Section */}
        <h2 className='tracking-wider font-semibold text-sm sm:text-base'>
          Copyright &#169; 2025 Pawan Bhatt | All Rights Reserved
        </h2>

        {/* Social Icons */}
        <div className="flex gap-5 md:gap-7 items-center">
          <a href="https://github.com/pawanbhatt96" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-2xl hover:text-yellow-500 transition duration-300" />
          </a>
          <a href="mailto:bhattpawan627@gmail.com" target="_blank" rel="noopener noreferrer">
            <BiLogoGmail className="text-2xl hover:text-yellow-500 transition duration-300" />
          </a>
          <a href="https://web.telegram.org/t/me/login26" target="_blank" rel="noopener noreferrer">
            <FaTelegram className="text-2xl hover:text-yellow-500 transition duration-300" />
          </a>
          <a href="https://www.linkedin.com/in/pawan-bhatt-740738292" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-2xl hover:text-yellow-500 transition duration-300" />
          </a>
        </div>

        {/* Connection Count */}
        <ScrollTrigger onEnter={() => setCount(true)} onExit={() => setCount(false)}>
          <div className='text-center md:text-left'>
            <h2 className='font-semibold text-sm sm:text-base tracking-normal'>
              In connection 👉 {count && <CountUp className='text-lg' start={0} end={200} delay={0} />}+
            </h2>
          </div>
        </ScrollTrigger>

      </div>

    </div>
  );
}

export default Footer;

