import React from 'react';


export default function Nav() {
  return (
      <nav className='nav-bar' id='home'>
        <ul>
          <button>
          <li>
            <a href="#about">About</a>
          </li></button>
          <button><li>
            <a href="#portfolio">Services</a>
          </li></button>
          <button><li>
            <a href="#resume">Resume</a>
          </li></button>
          <button><li>
            <a href="#contact">Contact</a>
          </li></button>
        </ul>
      </nav>
  );
}
