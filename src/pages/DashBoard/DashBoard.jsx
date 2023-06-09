import React, { useState } from 'react';
import './DashBoard.css'
import logo from '../../assets/image/logo.png'
import { Link, NavLink } from 'react-router-dom';
import { FaHome, FaUserAstronaut, FaSchool, FaMoneyCheckAlt, FaMarker } from "react-icons/fa";
import DashUsers from './DashUsers/DashUsers';
import DashClass from './DashClass/DashClass';
import StudentClass from './StudentClass/StudentClass';
import Payment from './Payment/Payment';

const DashBoard = () => {
    const [activeNavItem, setActiveNavItem] = useState('Courses');

    const isAdmin = true;
    // const isInstructor = true;
    // const isInstructor = true;

    const handleNavItemClick = (navItem) => {
        setActiveNavItem(navItem);
    };
    return (
        <div className="flex h-screen">
            {/* Side Navbar */}
            <div className="navbar text-black w-1/3 p-4">
                <div className="text-2xl font-bold mb-8"><img src={logo} className='h-24 mb-[190%]' alt="" /></div>
                <nav>
                    <ul className="flex flex-col">
                        {/* 
                        <li className={`cursor-pointer mb-4 ${activeNavItem === 'Courses' ? 'font-bold' : ''}`}>
                            <Link to='/'><FaHome className='ml-6' />Home</Link>
                        </li> */}
                        {
                            isAdmin ? <>
                                <li
                                    className={`cursor-pointer mb-4 ${activeNavItem === 'Courses' ? 'font-bold' : ''
                                        }`}
                                    onClick={() => handleNavItemClick('Users')}
                                >
                                    <FaUserAstronaut className='ml-6' /><NavLink to='/dashboard/users' >Users</NavLink>
                                </li>
                                <li
                                    className={`cursor-pointer mb-4 ${activeNavItem === 'Courses' ? 'font-bold' : ''
                                        }`}
                                    onClick={() => handleNavItemClick('Classes')}
                                >
                                    <FaSchool className='ml-6' />Classes
                                </li>
                            </> : <>
                                <li className={`cursor-pointer mb-4 ${activeNavItem === 'Courses' ? 'font-bold' : ''}`}>
                                    <Link to='/'><FaHome className='ml-6' />Home</Link>
                                </li>
                            </>
                        }
                        {/* {
                            isInstructor ? <>
                                <li
                                    className={`cursor-pointer mb-4 ${activeNavItem === 'Courses' ? 'font-bold' : ''
                                        }`}
                                    onClick={() => handleNavItemClick('MyClass')}
                                >
                                    <FaMarker className='ml-6' /><NavLink to='/dashboard/users' >Add Class</NavLink>
                                </li>
                                <li
                                    className={`cursor-pointer mb-4 ${activeNavItem === 'Courses' ? 'font-bold' : ''
                                        }`}
                                    onClick={() => handleNavItemClick('Payment')}
                                >
                                    <FaMoneyCheckAlt className='ml-6' />My Class
                                </li>
                            </> : <></>
                        } */}
                    </ul>
                </nav>
            </div>
            <div className="w-2/3 p-8 bg-gray-200">
                {activeNavItem === 'Users' && (
                    <div>
                        <h2 className="text-2xl font-bold mb-4"></h2>
                        <DashUsers />
                    </div>
                )}
                {activeNavItem === 'Classes' && (
                    <div>
                        <h2 className="text-2xl font-bold mb-4">Classes</h2>
                        <DashClass />
                    </div>
                )}
                {activeNavItem === 'MyClass' && (
                    <div>
                        <h2 className="text-2xl font-bold mb-4">Assignments</h2>
                        <StudentClass />
                    </div>
                )}
                {activeNavItem === 'Payment' && (
                    <div>
                        <h2 className="text-2xl font-bold mb-4">Payment</h2>
                        <Payment />
                    </div>
                )}
            </div>
        </div>
    );
};

export default DashBoard;