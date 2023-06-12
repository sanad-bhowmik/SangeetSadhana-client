import React from 'react';
import './Banner.css';

const Banner = () => {
  return (
    <>
      <h1 className="mt-10 text-4xl md:text-5xl text-center mb-6 md:mb-10 font-semibold">
        Best <span className="text-red-300">Choice</span>
      </h1>

      <div className="container mt-4 md:mt-10 mx-auto">
        <div id="marketing" className="section">
          <div className="content">
            <h1 className="text-xl md:text-3xl">Guitar</h1>
          </div>
          <div className="overlay"></div>
        </div>
        <div id="technology" className="section">
          <div className="content">
            <h1 className="text-xl md:text-3xl">Flute</h1>
          </div>
          <div className="overlay"></div>
        </div>
        <div id="advertising" className="section">
          <div className="content">
            <h1 className="text-xl md:text-3xl">Ukulele</h1>
          </div>
          <div className="overlay"></div>
        </div>
      </div>
    </>
  );
};

export default Banner;
