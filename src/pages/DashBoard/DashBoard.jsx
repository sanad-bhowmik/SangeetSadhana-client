import React, { useState } from 'react';
import './DashBoard.css'
import logo from '../../assets/image/logo.png'
import { Link, NavLink } from 'react-router-dom';
import { FaHome, FaUserAstronaut, FaSchool, FaMoneyCheckAlt, FaMarker } from "react-icons/fa";
import DashUsers from './DashUsers/DashUsers';
import StudentClass from './StudentClass/StudentClass';
import Payment from './Payment/Payment';
import useAdmin from '../../hooks/useAdmin';
import useInstructor from '../../hooks/useInstructor';
import Enroll from './Enroll/Enroll';
import useTitle from '../../hooks/useTitle';
import AddCls from './Instructor/AddCls/AddCls';
import ClsInstructor from './Instructor/ClsInstructor/ClsInstructor';

const DashBoard = () => {
    const [activeNavItem, setActiveNavItem] = useState('Courses');
    useTitle('Dashboard')
    const [isAdmin] = useAdmin();
    const [isInstructor] = useInstructor();


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
                            </> : isInstructor ?
                                <>
                                    <li
                                        className={`cursor-pointer mb-4 ${activeNavItem === 'Courses' ? 'font-bold' : ''
                                            }`}
                                        onClick={() => handleNavItemClick('Home')}
                                    >
                                        <FaUserAstronaut className='ml-6' /><NavLink to='/' >Home</NavLink>
                                    </li>
                                    <li
                                        className={`cursor-pointer mb-4 ${activeNavItem === 'Courses' ? 'font-bold' : ''
                                            }`}
                                        onClick={() => handleNavItemClick('AddClass')}
                                    >
                                        <FaUserAstronaut className='ml-6' /><NavLink to='/dashboard/addcls' >Add Class</NavLink>
                                    </li>
                                    <li
                                        className={`cursor-pointer mb-4 ${activeNavItem === 'Mycls' ? 'font-bold' : ''
                                            }`}
                                        onClick={() => handleNavItemClick('Instructorcls')}
                                    >
                                        <FaSchool className='ml-6' /><NavLink to='/dashboard/instructorcls' >My Class</NavLink>
                                    </li>
                                </> :
                                <>
                                    <li
                                        className={`cursor-pointer mb-4 ${activeNavItem === 'Courses' ? 'font-bold' : ''
                                            }`}
                                        onClick={() => handleNavItemClick('Home')}
                                    >
                                        <FaUserAstronaut className='ml-6' /><NavLink to='/' >Home</NavLink>
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
                        <DashUsers />
                    </div>
                )}
                {activeNavItem === 'Enroll' && (
                    <div>
                        <h2 className="text-2xl font-bold mb-4">Enroll</h2>
                        <Enroll />
                    </div>
                )}
                {activeNavItem === 'MyClass' && (
                    <div>
                        <h2 className="text-2xl font-bold mb-4"></h2>
                        <StudentClass />
                    </div>
                )}
                {activeNavItem === 'Payment' && (
                    <div>
                        <h2 className="text-2xl font-bold mb-4">Payment</h2>
                        <Payment />
                    </div>
                )}
                {activeNavItem === 'AddClass' && (
                    <div>
                        <h2 className="text-2xl font-bold mb-4"></h2>
                        <AddCls />
                    </div>
                )}
                {activeNavItem === 'Instructorcls' && (
                    <div>
                        <h2 className="text-2xl font-bold mb-4"></h2>
                        <ClsInstructor />
                    </div>
                )}
            </div>
        </div>
    );
};

export default DashBoard;