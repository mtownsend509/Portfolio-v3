import React, { useState } from 'react';
import { validateEmail } from '../utils/helpers';

function Contact() { 

    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
  
    const test = (e) => {
        console.log(e.target)
        if (e.target.value) {
            setErrorMessage('')
        } else {
            setErrorMessage('All fields must be filled out')
        }
    }

    const handleInputChange = (e) => {
    
      const { target } = e;
      const inputType = target.name;
      const inputValue = target.value;
  
      if (inputType === 'email') {
        setEmail(inputValue);
      } else if (inputType === 'name') {
        setName(inputValue);
      } else {
        setMessage(inputValue);
      }
    };
  
    const handleFormSubmit = (e) => {
      e.preventDefault();
  
      if (!validateEmail(email) || !name) {
        setErrorMessage('Email or name is invalid');
        return;
      }

      if (!message) {
        setErrorMessage('Please enter a message');
        return;
      }
  
      setName('');
      setMessage('');
      setEmail('');
      setErrorMessage('Your message has been sent! (not really though)')
    };

    return (
    <div id='formDiv'>
      <form className="form">
        <input
          id = 'firstInput'
          value={email}
          name="email"
          onChange={handleInputChange}
          type="email"
          placeholder="email"
          onMouseLeave={test}
        />
        <input
          value={name}
          name="name"
          onChange={handleInputChange}
          type="text"
          placeholder="name"
          onMouseLeave={test}
        />
        <input
          value={message}
          name="message"
          onChange={handleInputChange}
          type="message"
          placeholder="message"
          onMouseLeave={test}
        />
        <button type="button" onClick={handleFormSubmit}>Submit</button>
      </form>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
    </div>
  );
}

export default Contact