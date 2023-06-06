import React, { useState } from 'react';
import './Carosole.css';

const Carosole = () => {
    const [activeCourse, setActiveCourse] = useState(0);

    const togglePrevious = () => {
        setActiveCourse((prevCourse) => (prevCourse - 1 >= 0 ? prevCourse - 1 : 3));
    };

    const toggleNext = () => {
        setActiveCourse((prevCourse) => (prevCourse + 1 <= 3 ? prevCourse + 1 : 0));
    };

    const courseTitles = [
        'Guitar',
        'Ukulele',
        'Flute',
        'Banjo',
    ];
    const courseImages = [
        'https://images.unsplash.com/photo-1605020420620-20c943cc4669?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
        'https://images.unsplash.com/photo-1541447554742-4b7eff548fe1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
        'https://images.unsplash.com/photo-1567184406952-9f6ba54cb614?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
        'https://images.unsplash.com/photo-1479707341578-d3f239e493d1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    ];

    const courseDescriptions = [
        'The timeless chords of the guitar echo through the ages, captivating hearts with their classical allure.',
        'The ukuleles cheerful strums transport us to sunny shores, where melodies dance on the gentle waves of its four strings.',
        'The flutes ethereal notes whisper secrets of nature, enchanting the air with their delicate and graceful melodies.',
        'The banjos lively twang ignites the spirit of folk, its rhythmic resonance echoing the soul of American roots music.',
    ];

    return (
        <div className="home">
            <div className="home-popular">
                <div className="slider">
                    <div className="slider-prev" onClick={togglePrevious}></div>

                    <ul>
                        {courseImages.map((image, index) => (
                            <li key={index}>
                                <img
                                    className={`item ${index === activeCourse ? 'big1' : 'small1'}`}
                                    style={{ order: index }}
                                    src={image}
                                />
                            </li>
                        ))}
                    </ul>


                    <div className="slider-next" onClick={toggleNext}></div>
                </div>

                <div className="description">
                    {courseTitles.map((title, index) => (
                        <h3 className='' key={index} data-index={index} style={{ display: index === activeCourse ? 'block' : 'none' }}>
                            {title}
                        </h3>
                    ))}
                </div>

                <div className="further-description">
                    {courseDescriptions.map((description, index) => (
                        <h2 key={index} data-index={index} style={{ display: index === activeCourse ? 'block' : 'none' }}>
                            {description}
                        </h2>
                    ))}
                </div>
            </div>

            <div className="home-header">
                <h1>Bring music to life!</h1>
                <h1>Start to play today</h1>
            </div>
        </div>
    );
};

export default Carosole;
