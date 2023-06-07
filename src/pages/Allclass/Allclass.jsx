import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../../Shared/Header/Header';
import Footer from '../../Shared/Footer/Footer';

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

    return (
        <>
            <Header />
            <div>
                <img src={cls.img} alt={cls.name} />
            </div>
            <Footer />
        </>
    );
};

export default Allclass;
