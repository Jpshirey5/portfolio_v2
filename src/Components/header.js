import React from 'react';
import logo from './images/S3 Logo_no words.png';
import Fade from 'react-reveal/Fade';


export default function Header() {
  return (
    <Fade top distance='10%' duration={1500}>
      <nav className='nav-bar' id='home'>
        <img src={logo} alt="Logo" />
        <ul>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#portfolio">Portfolio</a>
          </li>
          <li>
            <a href="#resume">Resume</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </Fade>
  );
}
