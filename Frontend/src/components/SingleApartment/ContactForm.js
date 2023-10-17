import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './ContactForm.css';


function ContactForm() {
    const [name, setName] = useState('');
    const [nameOwner, setNameOwner] = useState('This field will be deleted later');
    const [email, setEmail] = useState('');
    const [emailOwner, setEmailOwner] = useState('This field will be deleted later');
    const [number, setNumber] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
    
        // EmailJS initialization
        emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_USER_ID);
    
        // EmailJS parameters
        const emailParams = {
          name,
          email,
          emailOwner,
          nameOwner,
          number,
          message,
        };
    
        emailjs
          .send(
            process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
            process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
            emailParams
          )
          .then((response) => {
            console.log('Email sent successfully:', response);
          })
          .catch((error) => {
            console.error('Error sending email:', error);
          });
    
        setName('');
        setNameOwner('');
        setEmail('');
        setEmailOwner('');
        setNumber('');
        setMessage('');
    };


    return (
        <div className='contact-form-container'>
          <h1>Contact the owner</h1>
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="form-group">
                <label>Your name:</label>
                <input
                  type='text'
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label>Your email:</label>
                <input
                  type='email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label>Your number:</label>
                <input
                  type='text'
                  value={number}
                  onChange={(e) => setNumber(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="form-group">
                <label>Owner email:</label>
                <input
                  type='email'
                  value={emailOwner}
                  onChange={(e) => setEmailOwner(e.target.value)}
                  required
                />
              </div>
            <div className="form-group">
                <label>Owner name:</label>
                <input
                  type='text'
                  value={nameOwner}
                  onChange={(e) => setNameOwner(e.target.value)}
                  required
                />
              </div>

            <div className="form-group">
              <label>Message:</label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                rows={4}
                style={{ resize: 'vertical' }}
              />
            </div>
            <button type='submit'>Send</button>
          </form>
        </div>
      );
}

export default ContactForm;
