import React from 'react';
import Fade from 'react-reveal/Fade';

export default function About() {
    return (
        <Fade top distance='10%' duration={1500}>
            <div className='about' id='about'>
                <h1>About Us</h1>
                <div className='text'>
                    <h2>
                    Boosted Technology Co. is a full-service development enterprise dedicated to boosting your online presence and driving your business growth. Specializing in web design, and user experience optimization, we provide comprehensive solutions to help businesses thrive in the digital landscape.
                    </h2>
                </div>
            </div>
        </Fade>
    );
}