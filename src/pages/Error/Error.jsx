import React from 'react';
import { Link } from 'react-router-dom';
import './Error.css'

const Error = () => {
    return (
        <div className="relative">
            <img
                className="ml-[0%] w-[100%]"
                src="https://i.pinimg.com/originals/70/ce/41/70ce41310f8a9c2a84e97b57198015d9.gif"
                alt=""
            />
            <Link
                to="/"
                className="btn glass absolute top-[10%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-teal-200 text-white py-2 px-4 rounded-lg shadow-md bom">
                Go back to home
            </Link>
        </div>

    );
};

export default Error;