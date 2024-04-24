import React from 'react';
import Fade from 'react-reveal/Fade';

export default function Services() {
    return (
        <Fade top distance='10%' duration={1500}>
            <div className='resume' id='resume'>
                <h1 className='resume_title'>Services</h1>
                <div className='resume_text'>
                    <h5>
                        {/* Make Cards for these different bullet points: */}
                    Experienced Professionals: Our team consists of experienced professionals with a proven track record of delivering results. <br />
                    Customized Solutions: We understand that every business is unique. That's why we take the time to understand your specific needs and develop customized solutions to help you achieve your goals.<br />
                    Transparent Communication: We believe in transparency and open communication. You'll always know exactly what we're doing and why we're doing it. <br />
                    Measurable Results: We believe in delivering measurable results that drive real business growth. With our data-driven approach, you'll see a clear return on your investment. <br />    
                    </h5>
                </div>
            </div>
        </Fade>

    );
}
