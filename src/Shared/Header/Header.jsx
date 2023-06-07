import React from 'react';
import logo from '../../../src/assets/image/logo.png';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="navbar bg-gradient-to-r from-gray-100 to-gray-600">
            <div className="flex-1">
                <Link className=""><img className='h-16 w-30' src={logo} alt="" /></Link>
            </div>
            <div className="flex gap-6 font-serif">
                <div className="form-control ">
                    <Link to='/'><h1>Home</h1></Link>
                </div>
                <div className="form-control ">
                    <Link to='/instructor'><h1>Instructors</h1></Link>
                </div>
                <div className="form-control ">
                    <h1>Classes</h1>
                </div>
                <div className="form-control ">
                    <h1>Dashboard</h1>
                </div>
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" alt="" />
                        </div>
                    </label>
                </div>
            </div>
        </div>
    );
};

export default Header;
