import React from 'react';
import './App.css';
 import Main from './Components/main';
import About from './Components/about';
import Resume from './Components/resume';
import Contact from './Components/contact';
import Footer from './Components/footer';

export default function App() {
 
  return (
    <div className="App">
      
        <>
           <div className="main">
              <Main />
              <div className="about">
                <About />
                  <div className="resume">
                    <Resume />
                  </div>
                  <div className="contact">
                    <Contact />
                  </div>
                  <div className="footer">
                    <Footer />
                  </div>
                  </div>
                  </div>
        </>
    </div>
  );
}
