import React, { useState } from 'react';
import axios from 'axios';
import Fade from 'react-reveal/Fade';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = { name, email, message };

    try {
      const response = await axios.post('/api/send-email', formData);
      console.log(response.data); // Handle the response from the server (e.g., success or error message)
      setIsSubmitted(true);
    } catch (error) {
      console.error('Error:', error);
      setErrorMessage('Failed to send email');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Fade top distance='10%' duration={1500}>
    <div className="container">
        <div className="contact_card">
          <div className="singup" id="contact">
            Let's Connect
          </div>
          {isSubmitted ? (
            <div className="success-message">Thank you for your message! We'll be in touch.</div>
          ) : (
            <form onSubmit={handleSubmit}>
              {errorMessage && <div className="error-message">{errorMessage}</div>}
              <div className="inputBox1">
                <input
                  type="text"
                  id="name"
                  className="user"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
                <span className="user-label">Name</span>
              </div>

              <div className="inputBox">
                <input
                  type="email"
                  id="email"
                  className="user"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <span>Email</span>
              </div>

              <div className="inputBox">
                <input
                  type="text"
                  id="message"
                  className="user"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                />
                <span>Message</span>
              </div>

              <button className="enter" type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Submitting...' : 'Submit'}
              </button>
            </form>
          )}
        </div>
      </div>
    </Fade>
  );
}
