import React from 'react';
import Image from './images/profile.jpg'
import Fade from 'react-reveal/Fade';

export default function About() {
    return (
        <Fade top distance='10%' duration={1500}>
            <div className='about' id='about'>
                <h1>About</h1>
                <img id='image' src={Image} alt='profile'></img>
                <div className='text'>
                    <p>
                        Hello! My name is John and I am a software developer.
                        I thrive in designing and developing to help you succeed in your journey.
                    </p>
                    <p>
                        With a background in tech, customer service and a life-long dedication to learning, I
                        am effective at combining creativity and problem solving to create user-friendly applications.
                    </p>
                </div>
            </div>
        </Fade>
    );
}