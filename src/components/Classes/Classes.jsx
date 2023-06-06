import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Classes = () => {
  const [classesData, setClassesData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/classes');
        setClassesData(response.data);
      } catch (error) {
        console.error('Error fetching classes data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {classesData.map((classItem) => (
        <div key={classItem._id}>
          <h2>{classItem.title}</h2>
          <img src={classItem.img} alt={classItem.title} />
          <p>{classItem.class_details}</p>
          <p>Enrolled Students: {classItem.enrolled_students}</p>
          <p>Duration: {classItem.duration}</p>
          <p>Cost: {classItem.cost}</p>
          <p>Rating: {classItem.rating}</p>
        </div>
      ))}
    </div>
  );
};

export default Classes;
