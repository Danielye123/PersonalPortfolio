import React from 'react';
import image from '../assets/index';

const Skills = () => {
  const skillsContainer = [
    {
      title: 'HTML',
      imgURL: image.htmlImage,
    },
    {
      title: 'CSS',
      imgURL: image.cssImage,
    },
    {
      title: 'Javascript',
      imgURL: image.javascriptImage,
    },
    {
      title: 'React',
      imgURL: image.reactImage,
    },
    {
      title: 'Redux',
      imgURL: image.redux,
    },
    {
      title: 'Git',
      imgURL: image.git,
    },
    {
      title: 'Python',
      imgURL: image.python,
    },
    {
      title: 'Figma',
      imgURL: image.figma,
    },
  ];

  return (

    <div
      id="skills"
      className="flex flex-col items-center justify-center mt-[300px]"
    >
      <h1 className="text-7xl text-center">
        Here are my <span className="text-sky-600"> Skills </span>
      </h1>
      <div className="columns-4 text-center items-left justify-left my-[50px] w-1/2 h-1/2 space-y-4 ">
        { skillsContainer.map((skills, index) => (
          <div className="flex flex-col border rounded-full justify-center items-center hover:bg-sky-700">
            <img
              className="w-1/2 h-1/2"
              src={skills.imgURL}
              alt={skills.title}
            />
            <div className="font-bold pt-3">
              {skills.title}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
