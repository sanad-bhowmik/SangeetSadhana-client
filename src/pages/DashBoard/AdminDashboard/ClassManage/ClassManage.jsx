import React, { useEffect, useState } from 'react';

const ClassManage = () => {
  const [classes, setClasses] = useState([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const fetchClasses = () => {
      fetch('http://localhost:5000/addcls')
        .then((response) => response.json())
        .then((data) => setClasses(data))
        .catch((error) => console.error('Error:', error));
    };

    const interval = setInterval(fetchClasses, 5000);
    fetchClasses();

    return () => {
      clearInterval(interval);
    };
  }, []);

  const handleStatusChange = (classId, newStatus) => {
    // Make a PATCH request to update the status of the class
    fetch(`http://localhost:5000/addcls/${classId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ status: newStatus }),
    })
      .then((response) => response.json())
      .then((data) => {
        // Update the classes state with the updated class
        const updatedClasses = classes.map((cls) =>
          cls._id === data._id ? data : cls
        );
        setClasses(updatedClasses);
      })
      .catch((error) => console.error('Error:', error));
  };

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {classes.map((cls) => (
        <div key={cls._id} className="card bg-base-200 shadow-xl">
          <figure className="px-4 py-3">
            <img
              src={cls.img}
              alt={cls.name}
              className="object-cover rounded-xl h-64"
            />
          </figure>
          <div className="card-body p-4">
            <h2 className="card-title text-xl font-bold">{cls.name}</h2>
            <p className="text-gray-600">{cls.email}</p>
            <p className="text-gray-600">Number of Classes: {cls.numClasses}</p>
            {/* <h3 className="mt-4 mb-2 font-semibold">Classes:</h3> */}
            {cls.classes.map((classItem) => (
              <div key={classItem.id} className="mb-4">
                <h4 className="text-lg font-semibold">{classItem.name}</h4>
                <p className="text-gray-600">Available Seats: {classItem.availableSeats}</p>
                <p className="text-gray-600">Price: ${classItem.price}</p>
              </div>
            ))}
            <div className="flex justify-between">
              <div className="dropdown inline-block relative">
                <button className="btn btn-primary dropdown-toggle">
                  Status: {cls.status}
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <button
                      className="btn btn-link"
                      onClick={() => handleStatusChange(cls._id, 'approve')}
                    >
                      Approve
                    </button>
                  </li>
                  <li>
                    <button
                      className="btn btn-link"
                      onClick={() => handleStatusChange(cls._id, 'deny')}
                    >
                      Deny
                    </button>
                  </li>
                </ul>
              </div>
              <button className="btn btn-primary" onClick={openModal}>
                Send Feedback
              </button>
            </div>
          </div>
        </div>
      ))}
      {showModal && (
        <div className="modal flex items-center justify-center z-50">
          <div className="modal-box">
            <h2 className="modal-title">Send Feedback</h2>
            <textarea className="modal-textarea" placeholder="Enter your feedback..." />
            <div className="modal-action">
              <button className="btn" onClick={closeModal}>Cancel</button>
              <button className="btn btn-primary">Submit</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ClassManage;
