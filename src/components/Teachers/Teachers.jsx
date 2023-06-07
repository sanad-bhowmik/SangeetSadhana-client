import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Teachers.css'; // Import the CSS file for styling

const Teachers = () => {
    const [teachersData, setTeachersData] = useState([]);

    useEffect(() => {
        const fetchTeachersData = async () => {
            try {
                const response = await axios.get('http://localhost:5000/teachers');
                setTeachersData(response.data);
            } catch (error) {
                console.error('Error fetching teachers data:', error);
            }
        };

        fetchTeachersData();
    }, []);

    return (
        <>
            <h1 className="text-5xl text-center mt-24 mb-14 font-semibold">
                Our <span className="text-teal-400">Instructors</span>
            </h1>
            <div className="teachers-container container mx-auto">
                {teachersData.map((teacher) => (
                    <div key={teacher._id} className="teacher-card text-center mb-4">
                        <div className="teacher-img">
                            <img src={teacher.img} alt={teacher.name} />
                        </div>
                        <div className="teacher-info">
                            <h2 className="text-2xl font-semibold">{teacher.name}</h2>
                            <p>Email: {teacher.email}</p>
                            <p>Number of Classes: {teacher.numClasses}</p>
                            <button className="my-button mt-10 mb-6">
                                <b>Classes</b>
                            </button>
                            {teacher.classes.map((classItem) => (
                                <div key={classItem.id} className="class-item flex items-center justify-between bg-gray-100 px-6 py-4 rounded-lg">
                                    <div>
                                        <h4 className="text-xl font-semibold">{classItem.name}</h4>
                                        <p className="text-gray-600">Available Seats: {classItem.availableSeats}</p>
                                    </div>
                                    <div>
                                        <div className="flex justify-end mt-4">
                                            <span className="px-4 py-2 bg-teal-500 text-white rounded-full">Enroll Now</span>
                                            <button className="px-4 py-2 bg-blue-500 text-white rounded-full ml-4">${classItem.price}</button>
                                        </div>
                                    </div>
                                </div>

                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Teachers;
