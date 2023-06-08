import React from 'react';
import './Banner.css'

const Banner = () => {
    return (
        <>
            {/* <h1 className=''>Best <span c>Choice</span></h1> */}
            <h1 className=" mt-24 text-5xl text-center mb-10 font-semibold">Best <span className='text-red-300'>Choice</span></h1>

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
