import React from 'react';

import image from '../assets/index.js';

const Navbar = () => (
  // fixed navbar or no fixed navbar
  <div className="container flex place-content-between items-center overflow-hidden w-full z-10">
    <img src={image.logoDark} alt="logodark" className="w-[180px] h-[180px] ml-10" />
    <div className="flex gap-10 mr-16 bg-[#363636]" id="navbar">
      <div>
        <a href="#hero" type="btn">
          Home
        </a>
      </div>
      <div className="">
        <a href="#about">
          About
        </a>
      </div>
      <div className="">
        <a href="#work">
          Work
        </a>
      </div>
      <div className="">
        <a href="#skills">
          Skills
        </a>
      </div>
      <div className="">
        <a href="#contact">
          Contact
        </a>
      </div>
    </div>
  </div>
);

export default Navbar;
