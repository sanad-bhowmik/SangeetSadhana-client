import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../../Shared/Header/Header';
import Footer from '../../Shared/Footer/Footer';
import './Allclass.css';
import axios from 'axios';
import { toast, Toaster } from 'react-hot-toast';

const Allclass = () => {
  const [cls, setCls] = useState(null);
  const [userId, setUserId] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetch('https://sangeet-sadhana-server.vercel.app/teachers')
      .then((response) => response.json())
      .then((data) => {
        const foundTeacher = data.find((teacher) => teacher._id === id);
        setCls(foundTeacher);
      });
  }, [id]);

  const handleSelectClass = async (selectedClass) => {
    try {
      const updatedClasses = cls.classes.map((clsItem) => {
        if (clsItem.id === selectedClass.id) {
          return {
            ...clsItem,
            availableSeats: clsItem.availableSeats - 1, // Decrease available seats by 1
          };
        }
        return clsItem;
      });

      const updatedTeacher = {
        ...cls,
        classes: updatedClasses,
      };

      const userSelection = {
        teacherId: id,
        classId: selectedClass.id,
        userId: userId,
        instructorName: cls.name,
        instructorImg: cls.img,
        numofclass: cls.numClasses,
        price: selectedClass.price,
        className: selectedClass.name,
        classImg: selectedClass.img,
        availableSeats: selectedClass.availableSeats - 1, // Decrease available seats by 1
      };

      await axios.post('https://sangeet-sadhana-server.vercel.app/mycls', userSelection);
      setCls(updatedTeacher); // Update the state with updated teacher data
      toast.success('Class added successfully!');
    } catch (error) {
      console.log('Error adding class:', error);
      toast.error('Failed to add class. Please try again.');
    }
  };

  if (!cls) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  return (
    <>
      <Toaster />
      <Header />
      <div className="card-hover ml-[40%] mt-24">
        <div className="card-hover__content h-[39%]">
          <h3 className="card-hover__title ">{cls.name}</h3>
          <div className='flex gap-10'>
            <div>
              <h1 className=''>{cls.classes[0].name}</h1>
              <p className="card-hover__text">Available seats: {cls.classes[0].availableSeats}</p>
              <p className="card-hover__text">Price: ${cls.classes[0].price}</p>
              {cls.classes[0].availableSeats === 0 ? (
                <div className="class-card-error">No available seats</div>
              ) : (
                <button
                  className="btn-donate mb-6"
                  onClick={() => handleSelectClass(cls.classes[0])}
                  disabled={cls.classes[0].availableSeats === 0 || cls.isAdmin || cls.isInstructor}
                >
                  Select
                </button>
              )}
            </div>
            <div>
              <h1 className=''>{cls.classes[1].name}</h1>
              <p className="card-hover__text">Available seats: {cls.classes[1].availableSeats}</p>
              <p className="card-hover__text">Price: ${cls.classes[1].price}</p>
              {cls.classes[1].availableSeats === 0 ? (
                <div className="class-card-error">No available seats</div>
              ) : (
                <button
                  className="btn-donate mb-6"
                  onClick={() => handleSelectClass(cls.classes[1])}
                  disabled={cls.classes[1].availableSeats === 0 || cls.isAdmin || cls.isInstructor}
                >
                  Select
                </button>
              )}
            </div>
          </div>
        </div>
        <div className="card-hover__extra">
          <h4>Learn now and get 40% discount!</h4>
        </div>
        <img src={cls.img} alt={cls.name} />
      </div>
      <Footer />
    </>
  );
};

export default Allclass;
