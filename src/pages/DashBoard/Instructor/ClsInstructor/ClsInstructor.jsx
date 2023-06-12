import React, { useEffect, useState } from 'react';

const ClsInstructor = () => {
  const [classes, setClasses] = useState([]);
  const [selectedClass, setSelectedClass] = useState(null);
  const [updateFields, setUpdateFields] = useState({ classes: [] });

  useEffect(() => {
    fetchClasses();

    // Poll for updates every 5 seconds
    const interval = setInterval(fetchClasses, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const fetchClasses = () => {
    fetch('http://localhost:5000/addcls')
      .then((response) => response.json())
      .then((data) => setClasses(data))
      .catch((error) => console.error('Error:', error));
  };

  const handleUpdateClick = (cls) => {
    setSelectedClass(cls);
    setUpdateFields({
      img: cls.img,
      classes: cls.classes.map((classItem) => ({
        id: classItem.id,
        name: classItem.name,
        availableSeats: classItem.availableSeats,
        price: classItem.price,
      })),
    });
  };

  const handleFieldChange = (field, value) => {
    setUpdateFields((prevFields) => ({
      ...prevFields,
      [field]: value,
    }));
  };

  const handleUpdateSubmit = (event) => {
    event.preventDefault();
    if (!selectedClass || !selectedClass._id) {
      return;
    }

    const updatedClass = {
      ...selectedClass,
      ...updateFields,
    };

    fetch(`http://localhost:5000/addcls/${selectedClass._id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updateFields), // Send updateFields instead of updatedClass
    })
      .then((response) => response.json())
      .then((data) => {
        const updatedClasses = classes.map((cls) => (cls._id === data._id ? data : cls));
        setClasses(updatedClasses);
        setSelectedClass(null);
        setUpdateFields({});
      })
      .catch((error) => console.error('Error:', error));
  };

  const getStatusButtonColor = (status) => {
    if (status === 'pending') {
      return 'btn-info';
    } else if (status === 'deny') {
      return 'btn-error';
    } else if (status === 'approve') {
      return 'btn-success';
    }
    return '';
  };

  return (
    <div>
      <div className="grid grid-cols-3 gap-4">
        {classes.map((cls) => (
          <div key={cls._id} className="bg-white rounded-lg shadow-lg p-4">
            <img
              src={cls.img}
              alt={cls.name}
              className="w-full h-40 object-cover mb-4 rounded-lg"
            />
            <h2 className="text-xl font-bold mb-2">{cls.name}</h2>
            <p className="text-gray-600 mb-4">{cls.email}</p>
            {cls.classes.map((classItem) => (
              <div key={classItem.id} className="mb-2">
                <h3 className="text-lg font-semibold">{classItem.name}</h3>
                <p className="text-gray-600">Available Seats: {classItem.availableSeats}</p>
                <p className="text-gray-600">Price: ${classItem.price}</p>
              </div>
            ))}
            <span
              className={`inline-block px-3 py-1 text-sm font-semibold rounded-full ${
                getStatusButtonColor(cls.status)
              } text-white`}
            >
              {cls.status.toUpperCase()}
            </span>
            <button
              className="mt-4 bg-blue-500 text-white font-semibold py-2 px-4 rounded"
              onClick={() => handleUpdateClick(cls)}
            >
              Update
            </button>
          </div>
        ))}
      </div>

      {/* Update Modal */}
      {selectedClass && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75">
          <div className="bg-white rounded-lg p-6">
            <h2 className="text-xl font-bold mb-4">Update Class</h2>
            <form onSubmit={handleUpdateSubmit}>
              <div className="mb-4">
                <label htmlFor="updateImg" className="block text-gray-700 font-semibold mb-2">
                  Image URL
                </label>
                <input
                  type="text"
                  id="updateImg"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  value={updateFields.img || ''}
                  onChange={(e) => handleFieldChange('img', e.target.value)}
                />
              </div>
              {updateFields.classes &&
                updateFields.classes.map((classItem) => (
                  <div key={classItem.id} className="mb-4">
                    <label
                      htmlFor={`updateClassName${classItem.id}`}
                      className="block text-gray-700 font-semibold mb-2"
                    >
                      Class Name
                    </label>
                    <input
                      type="text"
                      id={`updateClassName${classItem.id}`}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md"
                      value={classItem.name || ''}
                      onChange={(e) =>
                        handleFieldChange(
                          'classes',
                          updateFields.classes.map((c) =>
                            c.id === classItem.id ? { ...c, name: e.target.value } : c
                          )
                        )
                      }
                    />
                    <label
                      htmlFor={`updateClassSeats${classItem.id}`}
                      className="block text-gray-700 font-semibold mb-2 mt-2"
                    >
                      Available Seats
                    </label>
                    <input
                      type="number"
                      id={`updateClassSeats${classItem.id}`}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md"
                      value={classItem.availableSeats || ''}
                      onChange={(e) =>
                        handleFieldChange(
                          'classes',
                          updateFields.classes.map((c) =>
                            c.id === classItem.id ? { ...c, availableSeats: parseInt(e.target.value) } : c
                          )
                        )
                      }
                    />
                    <label
                      htmlFor={`updateClassPrice${classItem.id}`}
                      className="block text-gray-700 font-semibold mb-2 mt-2"
                    >
                      Price
                    </label>
                    <input
                      type="number"
                      id={`updateClassPrice${classItem.id}`}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md"
                      value={classItem.price || ''}
                      onChange={(e) =>
                        handleFieldChange(
                          'classes',
                          updateFields.classes.map((c) =>
                            c.id === classItem.id ? { ...c, price: parseFloat(e.target.value) } : c
                          )
                        )
                      }
                    />
                  </div>
                ))}
              <div className="flex justify-end">
                <button
                  type="button"
                  className="mr-2 bg-gray-500 text-white font-semibold py-2 px-4 rounded"
                  onClick={() => setSelectedClass(null)}
                >
                  Cancel
                </button>
                <button type="submit" className="bg-blue-500 text-white font-semibold py-2 px-4 rounded">
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ClsInstructor;
