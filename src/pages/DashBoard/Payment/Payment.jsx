import React, { useState, useEffect } from 'react';

const Payment = () => {
  const [paymentData, setPaymentData] = useState([]);

  useEffect(() => {
    // Fetch payment data from the API endpoint
    fetch('http://localhost:5000/payments')
      .then((response) => response.json())
      .then((data) => setPaymentData(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4 text-gray-700">Payment History</h1>

      <table className="w-full bg-white border border-gray-300">
        <thead>
          <tr className="bg-indigo-500 text-white">
            <th className="py-2 px-4 border-b">ID</th>
            <th className="py-2 px-4 border-b">Payment Intent ID</th>
            <th className="py-2 px-4 border-b">Price</th>
            <th className="py-2 px-4 border-b">Class Name</th>
          </tr>
        </thead>
        <tbody>
          {paymentData.map((payment) => (
            <tr key={payment._id} className="bg-gray-100">
              <td className="py-2 px-4 border-b text-sm text-gray-700">{payment._id}</td>
              <td className="py-2 px-4 border-b text-sm text-gray-700">{payment.paymentIntentId}</td>
              <td className="py-2 px-4 border-b text-sm text-gray-700">${payment.price}</td>
              <td className="py-2 px-4 border-b text-sm text-gray-700">{payment.className}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Payment;
