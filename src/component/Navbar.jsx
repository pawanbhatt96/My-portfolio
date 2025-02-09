import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 bg-slate-900">
        <div className="flex justify-between items-center px-6 md:px-12 py-3">
          
          {/* Logo */}
          <div className="flex flex-col">
            <img src="/images/dp.avif" alt="mylogo" className="w-12 h-12 rounded-full" />
          </div>

          {/* Hamburger Icon (Mobile) */}
          <div className="md:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <FaTimes className="text-yellow-400 text-2xl" /> : <FaBars className="text-yellow-400 text-2xl" />}
            </button>
          </div>

          {/* Nav Links */}
          <ul className={`absolute md:static top-16 left-0 w-full md:w-auto bg-slate-900 md:flex gap-7 items-center text-yellow-400 md:space-x-6 
            ${menuOpen ? 'flex flex-col py-4' : 'hidden md:flex'}`}>
            <li className="hover:underline font-bold tracking-wide font-sans text-center md:text-left">
              <Link to="home" smooth={true} duration={900} onClick={() => setMenuOpen(false)}>Home</Link>
            </li>
            <li className="hover:underline font-bold tracking-wide font-sans text-center md:text-left">
              <Link to="about" smooth={true} duration={800} onClick={() => setMenuOpen(false)}>About</Link>
            </li>
            <li className="hover:underline font-bold tracking-wide font-sans text-center md:text-left">
              <Link to="skills" smooth={true} duration={900} onClick={() => setMenuOpen(false)}>Skills</Link>
            </li>
            <li className="hover:underline font-bold tracking-wide font-sans text-center md:text-left">
              <Link to="exp" smooth={true} duration={1500} onClick={() => setMenuOpen(false)}>Experience</Link>
            </li>
            <li className="hover:underline font-bold tracking-wide font-sans text-center md:text-left">
              <Link to="contact" smooth={true} duration={1800} onClick={() => setMenuOpen(false)}>Contact</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
