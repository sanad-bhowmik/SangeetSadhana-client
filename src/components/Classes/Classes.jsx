import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Classes.css';
import { AwesomeButton } from 'react-awesome-button';
import 'react-awesome-button/dist/styles.css';

const Classes = () => {
  const [classesData, setClassesData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://sangeet-sadhana-server.vercel.app/classes');
        const sortedData = response.data.sort((a, b) => b.enrolled_students - a.enrolled_students);
        setClassesData(sortedData);
      } catch (error) {
        console.error('Error fetching classes data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="mt-14">
      <h1 className="text-5xl text-center mb-10 font-semibold underline">
        Popular <span className="text-purple-400">Classes</span>
      </h1>
      <div className="grid md:grid-cols-3 gap-4 mx-4 md:mx-0">
        {classesData.map((classItem) => (
          <div className="card bg-base-100 shadow-xl" key={classItem._id}>
            <figure>
              <img src={classItem.img} alt={classItem.title} />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                {classItem.title}
                <div className="badge badge-secondary">{classItem.rating}</div>
              </h2>
              <p>{classItem.class_details}</p>
              <div className="card-actions justify-end mb-4">
                <div className="badge badge-outline">{classItem.cost}</div>
                <div className="badge badge-outline">{classItem.duration}</div>
              </div>
              <AwesomeButton type="secondary">Students: {classItem.enrolled_students}</AwesomeButton>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Classes;
