import React from 'react';
import { useLocation } from 'react-router-dom';

const Allclass = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const img = queryParams.get('img');
  const name = queryParams.get('name');
  const instructor = queryParams.get('instructor');
  const seats = queryParams.get('seats');
  const price = queryParams.get('price');

  return (
    <div>
      <h2>Class Details</h2>
      <div>
        <img src={img} alt="Class" />
        <h3>Name: {name}</h3>
        <p>Instructor: {instructor}</p>
        <p>Available Seats: {seats}</p>
        <p>Price: {price}</p>
      </div>
      {/* Display the rest of the class details here */}
    </div>
  );
};

export default Allclass;
