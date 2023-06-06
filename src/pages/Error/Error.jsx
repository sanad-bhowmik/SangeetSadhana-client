import React from 'react';
import { Link } from 'react-router-dom';
import './Error.css'

const Error = () => {
    return (
        <div>
            <Link to="/">
                <button className="btn mt-20 ml-[40%]" type="button">
                    <strong>Go to Homepage!</strong>
                    <div id="container-stars">
                        <div id="stars"></div>
                    </div>

                    <div id="glow">
                        <div className="circle"></div>
                        <div className="circle"></div>
                    </div>
                </button>
            </Link>
            <span className='one'>4</span>
            <span className='two'>0</span>
            <span className='mid'>ops!</span>
            <span className='three'>4</span>
        </div>
    );
};

export default Error;