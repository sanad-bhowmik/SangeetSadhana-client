import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '../../Shared/Header/Header';
import Footer from '../../Shared/Footer/Footer';

const EachClass = () => {
  const [classData, setClassData] = useState(null);

  useEffect(() => {
    const fetchClassData = async () => {
      try {
        const response = await axios.get('https://sangeet-sadhana-server.vercel.app/classes');
        setClassData(response.data);
      } catch (error) {
        console.error('Error fetching class data:', error);
      }
    };

    fetchClassData();
  }, []);

  const renderClasses = () => {
    if (!classData) {
      return <p>Loading classes...</p>;
    }
  
    const isLoggedIn = true; // Replace with your logic to check if the user is logged in
    const userRole = 'admin'; // Replace with your logic to get the user role
  
    return classData.map((classItem) => {
      const {
        _id,
        title,
        class_details,
        img,
        enrolled_students,
        duration,
        cost,
        rating,
        seats
      } = classItem;
  
      const availableSeats = 20 - enrolled_students;
      const classCardStyle = availableSeats === 0 ? 'bg-red-500' : '';
      const isButtonDisabled = availableSeats === 0 || !isLoggedIn;
      const isAdminOrInstructor = userRole === 'admin' || userRole === 'instructor';
  
      return (
        <div key={_id} className="w-full md:w-1/2 lg:w-1/3 p-4">
          <div className={`border border-gray-300 p-4 rounded-md ${classCardStyle}`}>
            <img src={img} alt={title} className="mb-4" />
            <h3 className="text-xl font-bold mb-2">{title}</h3>
            <p className="text-gray-700 mb-4">{class_details}</p>
            <p className="text-gray-700">Duration: {duration}</p>
            <p className="text-gray-700">Cost: {cost}</p>
            <p className="text-gray-700">Rating: {rating}</p>
            <p className="text-gray-700">Seats: {seats}</p>
            {isButtonDisabled && (
              <p className="text-red-500">
                {isLoggedIn ? 'No available seats' : 'Please log in to select the course'}
              </p>
            )}
            {!isButtonDisabled && isAdminOrInstructor && (
             <button
             className={`bg-${isAdminOrInstructor ? 'blue' : 'gray'}-500 text-white py-2 px-4 mt-4`}
             onClick={() => handleSelectClass(_id)}
             disabled={isButtonDisabled}
           >
             Select
           </button>
            )}
          </div>
        </div>
      );
    });
  };
  return (
    <div>
      <Header />
      <div className="container mx-auto mt-8">
        <div className="flex flex-wrap -mx-4">
          {renderClasses()}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default EachClass;
