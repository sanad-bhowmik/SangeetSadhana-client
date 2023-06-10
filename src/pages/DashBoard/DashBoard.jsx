import React, { useState } from 'react';
import './DashBoard.css'
import logo from '../../assets/image/logo.png'
import home from '../../assets/Dashboard/home.gif'
import classs from '../../assets/Dashboard/teacher.gif'
import enroll from '../../assets/Dashboard/enroll.png'
import payment from '../../assets/Dashboard/payment.gif'
import mycls from '../../assets/Dashboard/mycls.gif'
import addcls from '../../assets/Dashboard/addcls.gif'
import user from '../../assets/Dashboard/user.gif'
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
                <div className="text-2xl font-bold mb-8"><img src={logo} className='h-24 mb-[210%]' alt="" /></div>
                <nav>
                    <ul className="flex flex-col">
                        {
                            isAdmin ? <>
                                <li
                                    className={`cursor-pointer mb-4 ${activeNavItem === 'Courses' ? 'font-bold' : ''
                                        }`}
                                    onClick={() => handleNavItemClick('Users')}
                                >
                                    <NavLink to='/dashboard/users' ><img src={user}  className='ml-4 h-20' alt="" />Users</NavLink>
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
                                         <NavLink to='/' ><img src={home}  className='ml-4 h-20' alt="" />Home</NavLink>
                                    </li>
                                    <div className="divider"></div> 
                                    <li
                                        className={`cursor-pointer mb-4 ${activeNavItem === 'Courses' ? 'font-bold' : ''
                                            }`}
                                        onClick={() => handleNavItemClick('AddClass')}
                                    >
                                       <NavLink to='/dashboard/addcls'><img src={addcls}  className='ml-4 h-20' alt="" />Add Class</NavLink>
                                    </li>
                                    <li
                                        className={`cursor-pointer mb-4 ${activeNavItem === 'Mycls' ? 'font-bold' : ''
                                            }`}
                                        onClick={() => handleNavItemClick('Instructorcls')}
                                    >
                                        <NavLink to='/dashboard/instructorcls'><img src={mycls}  className='ml-4 h-20' alt="" />My Class</NavLink>
                                    </li>
                                </> :
                                <>
                                    <li
                                        className={`cursor-pointer mb-4 ${activeNavItem === 'Courses' ? 'font-bold' : ''
                                            }`}
                                        onClick={() => handleNavItemClick('Home')}
                                    >
                                        <NavLink to='/' ><img src={home}  className='ml-4 h-20' alt="" />Home</NavLink>
                                    </li>
                                    <li
                                        className={`cursor-pointer mb-4 ${activeNavItem === 'Courses' ? 'font-bold' : ''
                                            }`}
                                        onClick={() => handleNavItemClick('MyClass')}
                                    >
                                        <NavLink to='/dashboard/myclass'><img src={classs}  className='ml-4 h-20' alt="" />My Class</NavLink>
                                    </li>
                                    <li
                                        className={`cursor-pointer mb-4 ${activeNavItem === 'Courses' ? 'font-bold' : ''
                                            }`}
                                        onClick={() => handleNavItemClick('Enroll')}
                                    >
                                        <NavLink to='/dashboard/enroll' ><img src={enroll}  className='ml-4 h-20' alt="" />Enroll</NavLink>
                                    </li>
                                    <li
                                        className={`cursor-pointer mb-4 ${activeNavItem === 'Courses' ? 'font-bold' : ''
                                            }`}
                                        onClick={() => handleNavItemClick('Payment')}
                                    >
                                        <NavLink to='/dashboard/payment' ><img src={payment}  className='ml-4 h-20' alt="" />Payment</NavLink>
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