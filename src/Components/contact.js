import React from 'react';
import Fade from 'react-reveal/Fade';

export default function Contact() {
 

  return (
    <Fade top distance='10%' duration={1500}>
    <div className="container">
        <div className="contact_card">
          <div className="singup" id="contact">
            Let's Connect and Create!
          </div>
            <div className="contact-info">
          <a href="mailto:jayshirey@icloud.com"><svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 1024 1024" height="60px" width="60px"><path d="M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 110.8V792H136V270.8l-27.6-21.5 39.3-50.5 42.8 33.3h643.1l42.8-33.3 39.3 50.5-27.7 21.5zM833.6 232L512 482 190.4 232l-42.8-33.3-39.3 50.5 27.6 21.5 341.6 265.6a55.99 55.99 0 0 0 68.7 0L888 270.8l27.6-21.5-39.3-50.5-42.7 33.2z" /></svg></a>
          </div>
        </div>
      </div>
    </Fade>
  );
}
