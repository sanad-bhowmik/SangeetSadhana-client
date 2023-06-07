import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../../Shared/Header/Header';
import Footer from '../../Shared/Footer/Footer';
import './Allclass.css'
const Allclass = () => {
    const [cls, setCls] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        fetch('http://localhost:5000/teachers')
            .then((response) => response.json())
            .then((data) => {
                const foundTeacher = data.find((teacher) => teacher._id === id);
                setCls(foundTeacher);
            });
    }, [id]);

    if (!cls) {
        return (
            <div className="flex items-center justify-center h-screen">
                <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-gray-900"></div>
            </div>
        );
    }

    const handleSelectClass = () => {
        // Logic to handle class selection
    };

    return (
        <>
            <Header />
            <div className="card-hover ml-[40%] mt-24">
                <div className="card-hover__content h-[39%]">
                    <h3 className="card-hover__title ">{cls.name}</h3>
                    <p className="card-hover__text">Instructor: {cls.name}</p>
                    <p className="card-hover__text">Available seats: {cls.classes[0].availableSeats}</p>
                    <p className="card-hover__text">Price: {cls.classes[0].price}</p>
                    {cls.classes[0].availableSeats === 0 ? (
                        <div className="class-card-error">No available seats</div>
                    ) : (
                        <button
                        className="btn-donate mb-6"
                            onClick={handleSelectClass}
                            disabled={cls.classes[0].availableSeats === 0 || cls.isAdmin || cls.isInstructor}
                        >
                            Select
                        </button>
                    )}
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
