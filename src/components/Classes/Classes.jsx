import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Classes.css'

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
    <div className="mt-14">
      <h1 className="text-5xl text-center mb-10 font-semibold underline">Popular Classes</h1>
      <div className="grid grid-cols-3 gap-4 ml-36">
        {classesData.map((classItem) => (
          <div className="card w-96 bg-base-100 shadow-xl" key={classItem._id}>
            <figure>
              <img src={classItem.img} alt={classItem.title} />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                {classItem.title}
                <div className="badge badge-secondary">{classItem.rating}</div>
              </h2>
              <p>{classItem.class_details}</p>
              <div className="card-actions justify-end">
                <div className="badge badge-outline">{classItem.cost}</div>
                <div className="badge badge-outline">{classItem.duration}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Classes;
