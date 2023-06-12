import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Enroll = () => {
    const [payments, setPayments] = useState([]);

    useEffect(() => {
        fetchPayments();
    }, []);

    const fetchPayments = async () => {
        try {
            const response = await axios.get('http://localhost:5000/payments');
            setPayments(response.data);
        } catch (error) {
            console.log('Error fetching payments:', error);
        }
    };

    const renderCards = () => {
        return payments.map((payment) => (
            <>
                <div key={payment._id} className="card w-96 bg-base-100 shadow-xl image-full mb-6">
                    <figure>
                        <img src={payment.classImg} alt="Class Image" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">{payment.className}</h2>
                        <p>Price: ${payment.price}</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Welcome</button>
                        </div>
                    </div>
                </div>
            </>
        ));
    };

    const renderRows = () => {
        const rows = [];
        const numCardsPerRow = 3;

        for (let i = 0; i < payments.length; i += numCardsPerRow) {
            const row = (
                <div key={i} className="card-row">
                    {renderCards().slice(i, i + numCardsPerRow)}
                </div>
            );
            rows.push(row);
        }

        return rows;
    };

    return <div className="container">{renderRows()}</div>;
};

export default Enroll;
