import React, { useEffect, useState } from 'react';
import axios from 'axios';

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
    <div>
      {teachersData.map((teacher) => (
        <div key={teacher._id}>
          <img src={teacher.img} alt={teacher.name} />
          <h2>{teacher.name}</h2>
          <p>Email: {teacher.email}</p>
          <p>Number of Classes: {teacher.numClasses}</p>
          <h3>Classes:</h3>
          {teacher.classes.map((classItem) => (
            <div key={classItem.id}>
              <h4>{classItem.name}</h4>
              <p>Available Seats: {classItem.availableSeats}</p>
              <p>Price: {classItem.price}</p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Teachers;
