import React, { useState } from 'react';
import logo from "../assets/images/logo/logo3.png";
import { Core } from '../components';
import { AiOutlineClose } from 'react-icons/ai';
import { HiMenu } from 'react-icons/hi';
import { NavLink } from "react-router-dom";
import styles from '../style';

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div>
      <nav className="border-b-[2px] sm:border-b-[4px] md:border-b-[6px] border-[#09EC92] bg-white py-5 sm:py-7">
        <Core.Container>
          <div className="flex items-center justify-between h-2 sm:h-4 lg:h-16">
            <div className="flex items-center">
              <a className="flex-shrink-0 pr-10" href="/">
                <img className="w-[50px] sm:w-[70px] lg:w-[130px]" src={logo} alt="logo" />
              </a>
              <div className="hidden lg:block">
                <div className="menu flex items-baseline ml-10 space-x-5">
                  <a className={`text-[18px] ${styles.linkHover1} font-normal px-3 py-2`}>
                    <NavLink to="/">Home</NavLink>
                  </a>
                  <a className={`text-[18px] ${styles.linkHover1} font-normal px-3 py-2`}>
                    <NavLink to="/about">About Us</NavLink>
                  </a>
                  <a className={`text-[18px] ${styles.linkHover1} font-normal px-3 py-2`}>
                    <NavLink to="/features">Features</NavLink>
                  </a>
                  <a className={`text-[18px] ${styles.linkHover1} font-normal px-3 py-2`}>
                    <NavLink to="/contact">Contact Us</NavLink>
                  </a>
                </div>
              </div>
            </div>
            <div className="block">
              <div className="flex items-center gap-x-1 sm:gap-x-3 ml-4 lg:ml-6">
                <a className={` ${styles.linkHover1}  `}>
                  <Core.Button blackText>
                    <NavLink to="/login">Sign in</NavLink>
                  </Core.Button>
                </a>
                <a className={` ${styles.linkHover1}  `}>
                  <Core.Button simpleGreen>
                    <NavLink to="/signup">Sign up free&nbsp; →</NavLink>
                  </Core.Button>
                </a>
              </div>
            </div>
            <div className="flex -mr-2 lg:hidden justify-end">
              <div className='w-[60px ]'>
                {mobileMenuOpen ? "" : <button
                  onClick={toggleMobileMenu}
                  className="text-dark-blue hover:text-gray-300 text-[20px] mt-1"
                >
                  <HiMenu />
                </button>}
              </div>
            </div>
          </div>
        </Core.Container>
      </nav>
      {/* Mobile Navigation Drawer */}
      <div
        className={`border fixed top-0 left-0 w-full h-full z-10 transform transition-transform ease-in-out duration-300 ${mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
      >
        <div className="w-full h-screen bg-white p-5">
          <div className='flex justify-between items-start'>
            <img className="w-[70px]" src={logo} alt="logo" />
            {mobileMenuOpen ? <button
              onClick={toggleMobileMenu}
              className="text-dark-blue hover:text-gray-300 text-[24px]"
            >
              <AiOutlineClose />
            </button> : ""}
          </div>
          <ul className="pt-10">
            <li>
              <a className="block text-[18px] ${styles.linkHover1} font-normal py-2">
                <NavLink to="/">Home</NavLink>
              </a>
            </li>
            <li>
              <a className={`block text-[18px] ${styles.linkHover1} font-normal py-2`}>
                <NavLink to="/about">About Us</NavLink>
              </a>
            </li>
            <li>
              <a className={`block text-[18px] ${styles.linkHover1} font-normal py-2`}>
                <NavLink to="/features">Features</NavLink>
              </a>
            </li>
            <li>
              <a className={`block text-[18px] ${styles.linkHover1} font-normal py-2`}>
                <NavLink to="/contact">Contact Us</NavLink>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
