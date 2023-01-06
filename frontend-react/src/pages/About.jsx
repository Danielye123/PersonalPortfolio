import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

import image from '../assets/index';
import { urlFor, client } from '../client';

const About = () => {
  const aboutContainer = [
    {
      title: 'Web Designer ',
      description: 'I am a web designer with a passion for creating beautiful and functional web applications.',
      imgURL: image.about01,
    },
    {
      title: 'Frontend Developer ',
      description: 'I am a frontend developer with a passion for creating beautiful and functional web applications.',
      imgURL: image.about02,
    },
    {
      title: 'Backend Developer ',
      description: 'I am a backend developer with a passion for creating beautiful and functional web applications.',
      imgURL: image.about03,
    },
  ];

  const [abouts, setAbouts] = useState([]);

  useEffect(() => () => {
    const query = '*[_type == "abouts"]';

    client.fetch(query)
      .then((data) => {
        setAbouts(data);
      });
  }, []);

  return (

    <div
      id="about"
      className="relative text-center flex flex-col items-center justify-center py-[200px] bg-[#101010]"
    >
      <h1 className="text-7xl mb-4 pb-4 tracking-wide text-center leading-normal">
        I know
        <span className="text-sky-600 mb-4 pb-4"> Good Design </span>
        <br className="my-4" />
        Means
        <span className="text-sky-600"> Good Business</span>
      </h1>
      <motion.div
        className="flex flex-row text-center items-center justify-center mx-[300px] mt-[50px] gap-10 columns-2"
      >
        {abouts.map((about, index) => (
          <div className="" key={about.title + index}>
          {console.log(about.imgURL)}
            <img
              src={urlFor(about.imgURL)}
              alt={about.img}
              className=""
            />
            <span className="font-semibold">
              {about.title}
            </span>
            <br />
            {about.description}
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default About;
