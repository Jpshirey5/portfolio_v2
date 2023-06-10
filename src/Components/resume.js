import React from 'react';
import Fade from 'react-reveal/Fade';

export default function Resume() {
    return (
        <Fade top distance='10%' duration={1500}>
            <div className='resume' id='resume'>
                <a className='resume_link' href='https://drive.google.com/file/d/18GAoPt1vuTPsigcOHWw8F0AJpJ0bAaSm/view?usp=sharing'>
                    <svg className='link' stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 24 24" height="1em" width="1em"><path d="M13 3L16.293 6.293 9.293 13.293 10.707 14.707 17.707 7.707 21 11 21 3z" /><path d="M19,19H5V5h7l-2-2H5C3.897,3,3,3.897,3,5v14c0,1.103,0.897,2,2,2h14c1.103,0,2-0.897,2-2v-5l-2-2V19z" /></svg></a>
                <h1 className='resume_title'>Resume</h1>
                <div className='resume_text'>
                    <h5>Throughout my career, I have created and developed great applications with my training from the University of Central Florida.
                        Couple my training with my passion for learning, team managment experience and consistent growth as a leader, I can work well with any team that I placed on to accomplish tasks at hand.
                    </h5>
                </div>
            </div>
        </Fade>

    );
}
