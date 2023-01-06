import React from 'react';
import image from '../assets/index';

const Work = () => {
  const workContainer = [
    {
      title: 'Music Project',
      description: 'A Music Project based on spotify',
      imgURL: image.Lyriks,
    },
    {
      title: 'Car Rental Project',
      description: 'A car rental project',
      imgURL: image.CarRental,
    },
    {
      title: 'Filmpire Project',
      description: 'A movie review based project',
      imgURL: image.filmpire,
    },
  ];

  return (
  // bg-zinc-800
    <div
      id="work"
      className="flex flex-col items-center justify-center py-[300px] mt-200[px] columns-2"
    >
      <h1 className="text-7xl">
        My Creative <span className="text-sky-600"> Portfolio </span> Section
      </h1>
      <div className="flex text-center items-center justify-center mx-[300px] w-4/5 mt-[50px] gap-10 ">
        { workContainer.map((works, index) => (
          <div className="border-8 border-yellow-500 opacity-100 hover:saturate-200 hover:border-blue-500">
            <img
              src={works.imgURL}
              alt={works.title}
            />
            <div className="font-bold pt-3">
              {works.title}
            </div>
            <div className="py-3">
              {works.description}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
