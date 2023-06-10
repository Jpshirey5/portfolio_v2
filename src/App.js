import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './Components/header';
import Main from './Components/main';
import About from './Components/about';
import Portfolio from './Components/portfolio';
import Resume from './Components/resume';
import Contact from './Components/contact';
import Footer from './Components/footer';
import Loading from './Components/loading';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="App">
      {isLoading ? (<Loading />
      ) : (
        <>
          <div className="header">
            <Header />
            <div className="main">
              <Main />
              <div className="about">
                <About />
                <div className="portfolio">
                  <Portfolio />
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
            </div>
          </div>
        </>
      )}
    </div>
  );
}
