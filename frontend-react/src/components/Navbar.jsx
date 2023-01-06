import React from 'react';

import image from '../assets/index.js';

const Navbar = () => {
  // fixed navbar or no fixed navbar
  const [toggle, setToggle] = useState();
  return (
    <nav>
      <div>
        <img src={image.logoDark} alt="logo" />
      </div>
      <ul>
        {['home', 'about', 'contact', 'work', 'skills', 'contact'].map((item) => (
          <li key={`link-${item}`}>
            <div />
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;

// <div className="container flex justify-between content-between place-content-between items-center z-10 bg-[#363636]">
//   <img src={image.logoDark} alt="logodark" className="w-[180px] h-[180px] ml-10" />
//   <div className="flex gap-10 mr-16 bg-[#363636]" id="navbar">
//     <div className=" opacity-100">
//       <a href="#hero" type="btn">
//         Home
//       </a>
//     </div>
//     <div className="">
//       <a href="#about">
//         About
//       </a>
//     </div>
//     <div className="">
//       <a href="#work">
//         Work
//       </a>
//     </div>
//     <div className="">
//       <a href="#skills">
//         Skills
//       </a>
//     </div>
//     <div className="">
//       <a href="#contact">
//         Contact
//       </a>
//     </div>
//   </div>
// </div>
