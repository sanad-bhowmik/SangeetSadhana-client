import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../../providers/AuthProvider';
import { toast, Toaster } from 'react-hot-toast';

const AddCls = () => {
  const authContext = useContext(AuthContext);

  // Retrieve user data from the authentication context
  const user = authContext.user;

  // State for form fields
  const [className, setClassName] = useState('');
  const [classImage, setClassImage] = useState('');
  const [availableSeats, setAvailableSeats] = useState('');
  const [price, setPrice] = useState('');
  const [status, setStatus] = useState('pending');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const teacherData = {
      img: classImage,
      name: user.displayName,
      email: user.email,
      numClasses: 1,
      classes: [
        {
          id: 1,
          name: className,
          img: classImage,
          availableSeats: parseInt(availableSeats),
          price: parseFloat(price),
        },
      ],
      status: status, // Set the current status value
    };

    const addClsData = {
      _id: Math.random().toString(36).substring(7),
      img: classImage,
      name: user.displayName,
      email: user.email,
      numClasses: 1,
      classes: [
        {
          id: 1,
          name: className,
          img: classImage,
          availableSeats: parseInt(availableSeats),
          price: parseFloat(price),
        },
      ],
      status: status, // Set the current status value
    };

    try {
      // Post teacher data
      const teacherResponse = await fetch('http://localhost:5000/teachers', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(teacherData),
      });

      // Post addcls data
      const addClsResponse = await fetch('http://localhost:5000/addcls', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(addClsData),
      });

      if (teacherResponse.ok && addClsResponse.ok) {
        toast.success('Class added successfully!');
        setClassName('');
        setClassImage('');
        setAvailableSeats('');
        setPrice('');
      } else {
        console.error('Error adding class.');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

    return (
        <div className="flex flex-col items-center">
            <Toaster />
            <h1 className="text-3xl font-bold mb-8 text-purple-700">Create Class</h1>
            <form className="w-96" onSubmit={handleSubmit}>
                <div className="mb-6">
                    <label className="text-sm font-semibold text-gray-800">Class name:</label>
                    <input
                        type="text"
                        name="className"
                        value={className}
                        onChange={(e) => setClassName(e.target.value)}
                        className="w-full px-4 py-2 border border-purple-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                </div>
                <div className="mb-6">
                    <label className="text-sm font-semibold text-gray-800">Class Image:</label>
                    <input
                        type="text"
                        name="classImage"
                        value={classImage}
                        onChange={(e) => setClassImage(e.target.value)}
                        className="w-full px-4 py-2 border border-purple-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                </div>
                <div className="mb-6">
                    <label className="text-sm font-semibold text-gray-800">Instructor name:</label>
                    <input
                        type="text"
                        name="instructorName"
                        readOnly
                        value={user.displayName}
                        className="w-full px-4 py-2 border border-purple-300 rounded-lg bg-gray-100"
                    />
                </div>
                <div className="mb-6">
                    <label className="text-sm font-semibold text-gray-800">Instructor email:</label>
                    <input
                        type="email"
                        name="instructorEmail"
                        readOnly
                        value={user.email}
                        className="w-full px-4 py-2 border border-purple-300 rounded-lg bg-gray-100"
                    />
                </div>
                <div className="mb-6">
                    <label className="text-sm font-semibold text-gray-800">Available seats:</label>
                    <input
                        type="number"
                        name="availableSeats"
                        value={availableSeats}
                        onChange={(e) => setAvailableSeats(e.target.value)}
                        className="w-full px-4 py-2 border border-purple-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                </div>
                <div className="mb-6">
                    <label className="text-sm font-semibold text-gray-800">Price:</label>
                    <input
                        type="number"
                        name="price"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        className="w-full px-4 py-2 border border-purple-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                </div>
                <div className="mb-6">
          <label className="text-sm font-semibold text-gray-800"></label>
          <span
            className={`inline-block px-3 py-1 text-sm font-semibold rounded-full ${
              status === 'pending' ? 'bg-yellow-500' : 'bg-green-500'
            } text-white`}
          >
            {status.toUpperCase()}
          </span>
        </div>

        <button
          type="submit"
          className="bg-purple-700 text-white px-6 py-3 rounded-lg hover:bg-purple-800 transition-colors duration-300"
        >
          Add
        </button>
      </form>
    </div>
    );
};

export default AddCls;
