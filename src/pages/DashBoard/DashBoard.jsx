import React, { useState } from 'react';
import './DashBoard.css'
import logo from '../../assets/image/logo.png'
import { Link, NavLink } from 'react-router-dom';
import { FaHome,FaUserAstronaut,FaSchool } from "react-icons/fa";
import DashUsers from './DashUsers/DashUsers';
import DashClass from './DashClass/DashClass';

const DashBoard = () => {
    const [activeNavItem, setActiveNavItem] = useState('Courses');

    const isAdmin = true;

    const handleNavItemClick = (navItem) => {
        setActiveNavItem(navItem);
    };
    return (
        <div className="flex h-screen">
            {/* Side Navbar */}
            <div className="navbar text-black w-1/3 p-4">
                <div className="text-2xl font-bold mb-8"><img src={logo} className='h-24 mb-[300%]' alt="" /></div>
                <nav>
                    <ul className="flex flex-col">

                        <li className={`cursor-pointer mb-4 ${activeNavItem === 'Courses' ? 'font-bold' : ''}`}>
                            <Link to='/'><FaHome className='ml-6'/>Home</Link>
                        </li>
                        {
                            isAdmin ? <>
                                <li
                                    className={`cursor-pointer mb-4 ${activeNavItem === 'Courses' ? 'font-bold' : ''
                                        }`}
                                    onClick={() => handleNavItemClick('Users')}
                                >
                                    <FaUserAstronaut className='ml-6'/><NavLink to='/dashboard/users' >Users</NavLink>
                                </li>
                                <li
                                    className={`cursor-pointer mb-4 ${activeNavItem === 'Courses' ? 'font-bold' : ''
                                        }`}
                                    onClick={() => handleNavItemClick('Classes')}
                                >
                                    <FaSchool className='ml-6'/>Classes
                                </li>
                            </> : <>
                                <li
                                    className={`cursor-pointer mb-4 ${activeNavItem === 'Courses' ? 'font-bold' : ''
                                        }`}
                                    onClick={() => handleNavItemClick('Courses')}
                                >
                                    Courses
                                </li>
                                <li
                                    className={`cursor-pointer mb-4 ${activeNavItem === 'Students' ? 'font-bold' : ''
                                        }`}
                                    onClick={() => handleNavItemClick('Students')}
                                >
                                    Students
                                </li>
                                <li
                                    className={`cursor-pointer mb-4 ${activeNavItem === 'Assignments' ? 'font-bold' : ''
                                        }`}
                                    onClick={() => handleNavItemClick('Assignments')}
                                >
                                    Assignments
                                </li>
                                <li
                                    className={`cursor-pointer mb-4 ${activeNavItem === 'Grades' ? 'font-bold' : ''
                                        }`}
                                    onClick={() => handleNavItemClick('Grades')}
                                >
                                    Grades
                                </li>
                            </>
                        }
                    </ul>
                </nav>
            </div>
            <div className="w-2/3 p-8 bg-gray-200">
                {activeNavItem === 'Users' && (
                    <div>
                        <h2 className="text-2xl font-bold mb-4"></h2>
                        <DashUsers/>
                    </div>
                )}
                {activeNavItem === 'Classes' && (
                    <div>
                        <h2 className="text-2xl font-bold mb-4">Classes</h2>
                        <DashClass/>
                    </div>
                )}
                {activeNavItem === 'Assignments' && (
                    <div>
                        <h2 className="text-2xl font-bold mb-4">Assignments</h2>
                        {/* Assignment content goes here */}
                    </div>
                )}
                {activeNavItem === 'Grades' && (
                    <div>
                        <h2 className="text-2xl font-bold mb-4">Grades</h2>
                        {/* Grade content goes here */}
                    </div>
                )}
            </div>
        </div>
    );
};

export default DashBoard;