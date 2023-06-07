import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Header from '../../Shared/Header/Header';
import './Instructor.css';
import { AwesomeButton } from 'react-awesome-button';
import 'react-awesome-button/dist/styles.css';
import Footer from '../../Shared/Footer/Footer';


const Instructor = () => {
    const [teachers, setTeachers] = useState([]);

    useEffect(() => {
        const fetchTeachers = async () => {
            try {
                const response = await axios.get('http://localhost:5000/teachers');
                setTeachers(response.data);
            } catch (error) {
                console.log('Error fetching teachers:', error);
            }
        };

        fetchTeachers();
    }, []);

    return (
        <div>
            <Header />
            <div className="panels mt-4">
                <div className="panels__container">
                    <a href="#" className="panel">
                        <div className="panel__content" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bXVzaWN8ZW58MHx8MHx8fDA%3D&w=1000&q=80)' }}>
                            <h3 className="panel__title">MUSIC</h3>
                        </div>
                    </a>
                    <a href="#" className="panel">
                        <div className="panel__content" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80)' }}>
                            <h3 className="panel__title">LOVE</h3>
                        </div>
                    </a>
                </div>
                <div className="panels__container">
                    <a href="#" className="panel">
                        <div className="panel__content" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1507838153414-b4b713384a76?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80)' }}>
                            <h3 className="panel__title">LOVE</h3>
                        </div>
                    </a>
                    <a href="#" className="panel">
                        <div className="panel__content" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1510915361894-db8b60106cb1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80)' }}>
                            <h3 className="panel__title">MUSIC</h3>
                        </div>
                    </a>
                </div>
                <div className="panels__container">
                    <a href="#" className="panel">
                        <div className="panel__content" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1458560871784-56d23406c091?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80)' }}>
                            <h3 className="panel__title">MUSIC</h3>
                        </div>
                    </a>
                    <a href="#" className="panel">
                        <div className="panel__content" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1468164016595-6108e4c60c8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80' }}>
                            <h3 className="panel__title">LOVE</h3>
                        </div>
                    </a>
                </div>
                <div className="panels__container">
                    <a href="#" className="panel">
                        <div className="panel__content" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1516280440614-37939bbacd81?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80)' }}>
                            <h3 className="panel__title">LOVE</h3>
                        </div>
                    </a>
                    <a href="#" className="panel">
                        <div className="panel__content" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1605731414532-6b26976cc153?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80' }}>
                            <h3 className="panel__title">MUSIC</h3>
                        </div>
                    </a>
                </div>
            </div>
            <h1 className=' text-5xl mt-16 mb-14 text-center'>Our <span className='text-teal-600'>Instructor's</span></h1>
            <div className="instructors ml-52 grid grid-cols-2 gap-4">
                {teachers.map((teacher) => (
                    <div key={teacher._id} className="card w-96 bg-base-100 shadow-xl">
                        <figure>
                            <img src={teacher.img} alt={teacher.name} />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">
                                {teacher.name}
                                {teacher.numClasses && (
                                    <div className="badge badge-secondary">{teacher.numClasses} Classes</div>
                                )}
                            </h2>
                            <p>{teacher.email}</p>
                            {teacher.classes && (
                                <div className="card-actions justify-end">
                                    <div className="badge badge-outline">Classes Taken:</div>
                                    {teacher.classes.map((course) => (
                                        <div key={course.id} className="badge badge-outline">
                                            {course.name}
                                        </div>
                                    ))}
                                </div>
                            )}
                            <Link to={`/instructors/${teacher._id}?img=${encodeURIComponent(teacher.img)}&name=${encodeURIComponent(teacher.name)}&instructor=${encodeURIComponent(teacher.instructor)}&seats=${encodeURIComponent(teacher.seats)}&price=${encodeURIComponent(teacher.price)}`} className="card-actions mt-6 ml-[30%]">
                                <AwesomeButton type="primary">See Classes</AwesomeButton>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
            <Footer />
        </div>
    );
};

export default Instructor;