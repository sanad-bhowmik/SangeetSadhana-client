import React from 'react';
import './Banner.css'

const Banner = () => {
    return (
        <>
            {/* <h1 className=''>Best <span c>Choice</span></h1> */}
            <button className="btn ml-[38%] text-6xl mt-24 font-bold"> 
            Best Service's
            </button>
            <div className="container mt-10 mx-auto">
                <div id="marketing" className="section">
                    <div className="content">
                        <h1 className='text-3xl'>Guitar</h1>
                    </div>
                    <div className="overlay"></div>
                </div>
                <div id="technology" className="section">
                    <div className="content">
                        <h1 className='text-3xl'>Flute</h1>
                    </div>
                    <div className="overlay"></div>
                </div>
                <div id="advertising" className="section">
                    <div className="content">
                        <h1 className='text-3xl'>Ukulele</h1>
                    </div>
                    <div className="overlay"></div>
                </div>
            </div>
        </>
    );
};

export default Banner;
