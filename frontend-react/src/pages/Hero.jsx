import React from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { motion } from 'framer-motion';

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

  const scaleVariants = {
    whileInView: {
      scale: [0, 1],
      opacity: [0, 1],
      transition: {
        duration: 1,
        staggerChildren: 1,
        times: [0, 0.1, 1],
        ease: 'easeInOut',
      },
    },
  };
  // mt-[210px] mb-[210px]"
  return (
    <div
      id="hero"
      className="relative text-center flex flex-col items-center justify-center"
    >
      <div
        className="z-10 flex flex-col items-center justify-center py-[300px] bg-[#101010]"
      >
        <Rings />
        <img
          src={image.profilePic}
          alt="lightLogo"
          className="w-[300px] h-[300px] rounded-full object-cover z-10"
        />
        <div className="absolute -z-1 bg-pink-600 rounded-full w-[310px] h-[310px] blur mb-[90px] animate-pulse duration-[3000] delay-100" />

        <div className=" overflow-hidden">
          <h1 className="mt-4 mb-4 font-bold text-3xl text-[#F7AB0A] tracking-[15px]">
            Daniel Ye
          </h1>
          <h2>
            <span className="text-white">{`< ${text} />`}</span>
            <Cursor cursorColor="#F7AB0A" />
          </h2>
        </div>
      </div>

      <motion.div
        variants={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className="absolute inset-y-48 right-64 w-32 h-32"
      >
        <img
          src={image.htmlImage}
          alt="html"
          className="pt-5 pb-10"
        />
        <img
          src={image.cssImage}
          alt="html"
          className="pt-5 pb-10 ml-20"
        />
        <img
          src={image.javascriptImage}
          alt="html"
          className="pt-5 pb-10"
        />
      </motion.div>
    </div>
  );
};

export default Hero;
