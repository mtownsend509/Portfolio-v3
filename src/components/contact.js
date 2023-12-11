import React, { useState } from 'react';
import { validateEmail } from '../utils/helpers';
import emailjs from "@emailjs/browser";

function Contact() { 

    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
  
    const test = (e) => {
        console.log(e.target)
        // if (e.target.value) {
        //     setErrorMessage('')
        // } else {
        //     setErrorMessage('All fields must be filled out')
        // }
    }

      emailjs.init("xS1KzW64gULKTGH6m");


    const handleInputChange = (e) => {
    
      const { target } = e;
      const inputType = target.name;
      const inputValue = target.value;
      setErrorMessage('')
  
      if (inputType === 'email') {
        setEmail(inputValue);
      } else if (inputType === 'name') {
        setName(inputValue);
      } else {
        setMessage(inputValue);
      }
    };
  
    const handleFormSubmit = async (e) => {
      e.preventDefault();
  
      if (!validateEmail(email)) {
        setErrorMessage('Email is invalid');
        return;
      }

      if (!name) {
        setErrorMessage('Please fill out the name field');
        return;
      }

      if (!message) {
        setErrorMessage('Please enter a message');
        return;
      }
      
      const serviceId = "service_is50ts4";
      const templateId = "contact_form";
      // const userId = "xS1KzW64gULKTGH6m";
      const templateParams = {
        name,
        email,
        message,
      };

      await emailjs
        .send(serviceId, templateId, templateParams)
        .then((response) => console.log(response))
        .then((error) => console.log(error));

      setName('');
      setMessage('');
      setEmail('');
      setErrorMessage('Your message has been sent!')
    };

    return (
    <div id='formDiv'>
      <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></script>
      <script type="text/javascript"></script>
      <form className="form">
        <div id='emailName'>
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
        </div>
        <textarea
        id='message'
          value={message}
          name="message"
          onChange={handleInputChange}
          type="message"
          placeholder="message"
          onMouseLeave={test}
        />
        <button type="button" onClick={handleFormSubmit}>Submit</button>
      </form>
      <div id="errMessagePad">
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
      </div>
      <div id="altContacts">
          <p id ='email' class="altContact">Email:<br/>mgtownsend509@gmail.com</p>
          <p id ='phone' class="altContact">Phone: <br></br>509-362-3839</p>
      </div>
    </div>
  );
}

export default Contact