import React from 'react'
import { Link } from 'react-scroll'
const Navbar = () => {
 
  return (
    <>
    <nav  className="fixed top-0 left-0 w-full z-50 " >
        <div   className='bg-slate-900 '>
            <div className='flex justify-between items-center px-12 '>
                <div className='flex flex-col py-1 '><img  src="/images/dp.avif" alt="mylogo" className='w-14 h-14 rounded-full' /> 
                </div>
                

                <ul className='flex gap-7 justify-center items-center text-yellow-400'>
                    <li className='hover:underline font-bold tracking-wide font-sans'>
                    <Link to="home" smooth={true} duration={900}>
                      Home </Link></li>
                    <li className='hover:underline font-bold tracking-wide font-sans'>
                    <Link to="about" smooth={true} duration={800}>
                      About </Link> </li>
                    <li className='hover:underline font-bold tracking-wide font-sans'>
                    <Link to="skills" smooth={true} duration={900}>
                      Skills
                      </Link>
                      </li>
                    <li className='hover:underline font-bold tracking-wide font-sans'>
                    <Link to="exp" smooth={true} duration={1500}>
                      Experiance
                      </Link>
                      </li>
                    <div>
                    <li className='hover:underline font-bold tracking-wide font-sans '>
                    <Link to="contact" smooth={true} duration={1800}>
                      Contact
                      </Link>
                      </li></div>
                </ul>
            </div>
        </div>
    </nav>
    </>
  )
}

export default Navbar