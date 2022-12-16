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

    <div
      id="work"
      className="flex flex-col items-center justify-center mt-[400px]"
    >
      <h1 className="text-7xl">
        My Creative <span className="text-sky-600"> Portfolio </span> Section
      </h1>
      <div className="flex text-center items-center justify-center mx-[300px] mt-[50px] gap-10">
        { workContainer.map((works, index) => (
          <div className="border-8 border-yellow-500">
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
