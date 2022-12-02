import React from 'react';

import image from '../assets/index.js';

const Navbar = () => (
  <div className="flex place-content-between items-center">
    <img src={image.logoDark} alt="logodark" className="w-[200px] h-[200px] ml-10" />
    <div className="flex gap-10 mr-16">
      <div className="">
        Home
      </div>
      <div className="">
        About
      </div>
      <div className="">
        Services
      </div>
    </div>
  </div>
);

export default Navbar;
