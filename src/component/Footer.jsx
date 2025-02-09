import React, { useState } from 'react';
import { BiLogoGmail } from "react-icons/bi";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa6";
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';

const Footer = () => {
  const [count, setCount] = useState(false);

  return (
    <div className='flex justify-between items-center px-6 md:px-16 lg:px-48 py-4 bg-slate-600'>
      <div>
        <h2 className='tracking-wider font-semibold text-center md:text-left text-white'>
          Copyright &#169; 2025 PawanBhatt | All Rights Reserved
        </h2>
      </div>
      <div>
        <ul className="flex gap-6 md:gap-9 justify-center md:justify-end items-center text-white">
          <li>
            <a href="https://github.com/pawanbhatt96" target="_blank" rel="noopener noreferrer">
              <FaGithub className="text-2xl hover:text-yellow-500 transition duration-300" />
            </a>
          </li>
          <li>
            <a href="mailto:your-bhattpawan627@gmail.com" target="_blank" rel="noopener noreferrer">
              <BiLogoGmail className="text-2xl hover:text-yellow-500 transition duration-300" />
            </a>
          </li>
          <li>
            <a href="https://web.telegram.org/t/me/login26" target="_blank" rel="noopener noreferrer">
              <FaTelegram className="text-2xl hover:text-yellow-500 transition duration-300" />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/pawan-bhatt-740738292" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-2xl hover:text-yellow-500 transition duration-300" />
            </a>
          </li>

          <ScrollTrigger onEnter={() => setCount(true)} onExit={() => setCount(false)}>
            <div className='ml-4  w-60'>
              <h2 className='font-semibold text-[18px] tracking-normal'>
                In connection 👉 {count && <CountUp className='text-xl' start={0} end={200} delay={0} />}+
              </h2>
            </div>
          </ScrollTrigger>
        </ul>
      </div>
    </div>
  );
}

export default Footer;

