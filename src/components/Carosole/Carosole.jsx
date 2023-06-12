import React, { useEffect, useState } from 'react';
import './Carosole.css';
import { Fade, Slide } from 'react-awesome-reveal';

const Carosole = () => {
  const [activeCourse, setActiveCourse] = useState(0);
  const headerTexts = [
    'Music is the universal language',
    'Music can evoke emotions',
    'Music brings people together',
    'Music has healing powers',
    'Music inspires creativity',
    'Music transcends boundaries',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCourse((prevCourse) => (prevCourse + 1) % 4);
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const courseImages = [
    'https://images.unsplash.com/photo-1605020420620-20c943cc4669?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    'https://images.unsplash.com/photo-1541447554742-4b7eff548fe1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    'https://images.unsplash.com/photo-1567184406952-9f6ba54cb614?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    'https://images.unsplash.com/photo-1479707341578-d3f239e493d1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
  ];

  return (
    <div className="home">
      <div className="home-popular">
        <div className="slider">
          <ul>
            {courseImages.map((image, index) => (
              <li key={index}>
                <img
                  className={`item ${index === activeCourse ? '' : 'small1'}`}
                  style={{ order: index }}
                  src={image}
                  alt={`Course ${index}`}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
      <Fade delay={1000} cascade damping={0.1}>
        <div className="home-header text-gray-100">
          <h1>{headerTexts[activeCourse]}</h1>
        </div>
      </Fade>
    </div>
  );
};

export default Carosole;
