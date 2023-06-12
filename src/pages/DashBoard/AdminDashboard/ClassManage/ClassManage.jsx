import React, { useEffect, useState } from 'react';
import './ClassManage.css';

const ClassManage = () => {
  const [classes, setClasses] = useState([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const fetchClasses = () => {
      fetch('https://sangeet-sadhana-server.vercel.app/addcls')
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
    fetch(`https://sangeet-sadhana-server.vercel.app/addcls/${classId}`, {
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

  const getStatusButtonColor = (status) => {
    if (status === 'approve') {
      return 'btn-success';
    } else if (status === 'deny') {
      return 'btn-error';
    }
    return '';
  };

  const isButtonDisabled = (status, buttonStatus) => {
    return (
      (status === 'approve' && buttonStatus === 'deny') ||
      (status === 'deny' && buttonStatus === 'approve')
    );
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
            {cls.classes.map((classItem) => (
              <div key={classItem.id} className="mb-4">
                <h4 className="text-lg font-semibold">{classItem.name}</h4>
                <p className="text-gray-600">
                  Available Seats: {classItem.availableSeats}
                </p>
                <p className="text-gray-600">Price: ${classItem.price}</p>
              </div>
            ))}
            <div className="flex justify-between">
              <div className="dropdown inline-block relative">
                <button
                  className={`btn btn-info dropdown-toggle ${getStatusButtonColor(
                    cls.status
                  )}`}
                >
                  Status: {cls.status}
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <button
                      className={`btn btn-link ${
                        isButtonDisabled(cls.status, 'approve')
                          ? 'pointer-events-none'
                          : ''
                      }`}
                      onClick={() => handleStatusChange(cls._id, 'approve')}
                      disabled={isButtonDisabled(cls.status, 'approve')}
                    >
                      Approve
                    </button>
                  </li>
                  <li>
                    <button
                      className={`btn btn-link ${
                        isButtonDisabled(cls.status, 'deny')
                          ? 'pointer-events-none'
                          : ''
                      }`}
                      onClick={() => handleStatusChange(cls._id, 'deny')}
                      disabled={isButtonDisabled(cls.status, 'deny')}
                    >
                      Deny
                    </button>
                  </li>
                </ul>
              </div>
              <button
                className="btn btn-primary"
                onClick={() => openModal()} // Modify the click event handler here
              >
                Send Feedback
              </button>
              
            </div>
          </div>
        </div>
      ))}
      {showModal && (
        <div className="modal fixed inset-0 flex items-center justify-center z-50">
          <div className="modal-box bg-white rounded-xl p-6">
            <h2 className="modal-title text-2xl font-bold mb-4">
              Send Feedback
            </h2>
            <textarea
              className="modal-textarea p-4 border rounded-lg resize-none w-full mb-4"
              placeholder="Enter your feedback..."
            />
            <div className="modal-action flex justify-end">
              <button
                className="btn btn-outline btn-square mr-2"
                onClick={closeModal}
              >
                Cancel
              </button>
              <button className="btn btn-primary btn-square">Submit</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ClassManage;
