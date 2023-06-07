import React, { useEffect, useState } from 'react';
import './Quote.css'

const Quote = () => {
    const [hovered, setHovered] = useState(false);

    useEffect(() => {
        const handleMouseLeave = () => {
            setHovered(false);
        };

        const hoverElements = document.querySelectorAll('.hover');
        hoverElements.forEach((element) => {
            element.addEventListener('mouseleave', handleMouseLeave);
        });

        return () => {
            hoverElements.forEach((element) => {
                element.removeEventListener('mouseleave', handleMouseLeave);
            });
        };
    }, []);
    return (
        <div>
            <div className='ml-[24%]'>
                <figure className={`snip1574 ${hovered ? 'hover' : ''}`}>
                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sq-sample40.jpg" alt="profile-sample2" />
                    <figcaption>
                        <blockquote>
                            <p>"Music is the universal language of mankind."</p>
                        </blockquote>
                        <h3> - Henry Wadsworth Longfellow</h3>
                    </figcaption>
                </figure>
                <figure className={`snip1574 ${hovered ? 'hover' : ''}`}>
                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sq-sample37.jpg" alt="profile-sample7" />
                    <figcaption>
                        <blockquote>
                            <p>"Music gives a soul to the universe, wings to the mind, flight to the imagination, and life to everything." </p>
                        </blockquote>
                        <h3>- Plato</h3>
                    </figcaption>
                </figure>
                <figure className={`snip1574 ${hovered ? 'hover' : ''}`}>
                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sq-sample35.jpg" alt="profile-sample6" />
                    <figcaption>
                        <blockquote>
                            <p>"Where words fail, music speaks."</p>
                        </blockquote>
                        <h3> - Hans Christian Andersen</h3>
                    </figcaption>
                </figure>
            </div>
        </div>
    );
};

export default Quote;