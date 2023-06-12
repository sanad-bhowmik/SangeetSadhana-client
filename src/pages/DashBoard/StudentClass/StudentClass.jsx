import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { toast, Toaster } from 'react-hot-toast';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from '../Payment/CheckoutForm';
import { loadStripe } from '@stripe/stripe-js';
import './StudentClass.css'


const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
const StudentClass = () => {
  const [studentClasses, setStudentClasses] = useState([]);
  const [selectedClass, setSelectedClass] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [paymentInfo, setPaymentInfo] = useState({
    name: '',
    cardNumber: '',
    expirationDate: '',
  });

  useEffect(() => {
    fetchStudentClasses();
  }, []);

  const fetchStudentClasses = async () => {
    try {
      const response = await axios.get('http://localhost:5000/mycls');
      setStudentClasses(response.data);
    } catch (error) {
      console.log('Error fetching student classes:', error);
    }
  };

  const handleDeleteClass = async (classId) => {
    try {
      await axios.delete(`http://localhost:5000/mycls/${classId}`);
      toast.success('Class deleted successfully!');
      setStudentClasses(prevClasses => prevClasses.filter(classItem => classItem.classId !== classId));
    } catch (error) {
      console.log('Error deleting class:', error);
      toast.error('Failed to delete class. Please try again.');
    }
  };

  const handlePayClass = (classItem) => {
    setSelectedClass(classItem);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setSelectedClass(null);
    setShowModal(false);
    setPaymentInfo({
      name: '',
      cardNumber: '',
      expirationDate: '',
    });
  };

  const handleConfirmPayment = () => {
    // Perform payment logic here
    handleCloseModal();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPaymentInfo(prevPaymentInfo => ({
      ...prevPaymentInfo,
      [name]: value,
    }));
  };

  return (
    <>
      <div className="container mx-auto py-8">
        <Toaster />

        {/* Additional Information */}
        {studentClasses.length > 0 && (
          <div className="mt-8">
            <h2 className="text-3xl font-bold text-center mb-4">Additional Information</h2>
            <table className="w-full min-w-full divide-y divide-gray-200">
              <thead>
                <tr>
                  <th className="py-3 px-6 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Class Name
                  </th>
                  <th className="py-3 px-6 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Instructor
                  </th>
                  <th className="py-3 px-6 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Price
                  </th>
                  <th className="py-3 px-6 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Available Seats
                  </th>
                  <th className="py-3 px-6 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {studentClasses.map((classItem) => (
                  <tr key={classItem.classId}>
                    <td className="py-4 px-6">
                      <div className="flex items-center">
                        <img
                          src={classItem.classImg}
                          alt="Course Avatar"
                          className="w-10 h-10 rounded-full mr-2"
                        />
                        {classItem.className}
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex items-center">
                        <img
                          src={classItem.instructorImg}
                          alt="Instructor Avatar"
                          className="w-10 h-10 rounded-full mr-2"
                        />
                        {classItem.instructorName}
                      </div>
                    </td>
                    <td className="py-4 px-6">${classItem.price}</td>
                    <td className="py-4 px-6">{classItem.availableSeats}</td>
                    <td className="py-4 px-6">
                      <button
                        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mr-2"
                        onClick={() => handlePayClass(classItem)}
                      >
                        Pay
                      </button>
                      <button
                        className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
                        onClick={() => handleDeleteClass(classItem.classId)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="mt-10 bg-gradient-to-r from-purple-400 via-blue-400 to-teal-500 py-8 px-4 rounded-lg neon-light">
              <h2 className="text-2xl font-bold text-white text-center mb-4">Payment</h2>
              <div className="credit-card-content">
                <Elements stripe={stripePromise}>
                  {selectedClass && (
                    <CheckoutForm
                      price={selectedClass.price}
                      classImg={selectedClass.classImg}
                      instructorImg={selectedClass.instructorImg}
                      className={selectedClass.className}
                    />
                  )}
                </Elements>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default StudentClass;
