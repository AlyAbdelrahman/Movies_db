import React from 'react';

const Banner = ({ imageUrl, movieTitle, movieCategories }) => {
  return (
    <div className="relative h-96 bg-cover bg-center flex items-center" style={{ backgroundImage: `url(${imageUrl})` }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="absolute left-0 flex flex-col justify-center p-6">
        <h1 className="text-xl font-bold text-white mb-4">{movieTitle}</h1>
        <div className="flex items-center justify-start">
          {movieCategories.map((category, index) => (
            <div key={index} className="bg-red-500 text-white px-3 py-1 mx-2 rounded">
              {category}
            </div>
          ))}
        </div>
      </div>
      <div className="absolute top-0 right-0 p-4 text-white font-bold text-lg">Trending Movie</div>
    </div>
  );
};

export default Banner;
