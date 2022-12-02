import React from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';

import image from '../assets/index.js';
import { Rings } from '../components';

const Hero = () => {
  const [text] = useTypewriter({
    words: ["Hi, I'm a Web Developer", 'and a Gamer', ' and a Programmer'],
    loop: 0,
    delaySpeed: 2000,
    deleteSpeed: 75,
    typeSpeed: 75,
  });

  return (
    <div className="text-center flex flex-col items-center justify-center mt-56 mb-56">
      <Rings />
      <img
        src={image.profilePic}
        alt="lightLogo"
        className="w-[300px] h-[300px] rounded-full  object-cover"
      />
      <div className="overflow-hidden">
        <h1 className="mt-4 mb-4 font-bold text-3xl text-[#F7AB0A] tracking-[15px]">
          Daniel Ye
        </h1>
        <h2>
          <span className="text-white">{`< ${text} />`}</span>
          <Cursor cursorColor="#F7AB0A" />
        </h2>
      </div>
    </div>
  );
};

export default Hero;
