import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import ReCAPTCHA from "react-google-recaptcha";

import './ContactForm.css';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ContactForm() {
    const [name, setName] = useState('');
    const [nameOwner, setNameOwner] = useState('This field will be deleted later');
    const [email, setEmail] = useState('');
    const [emailOwner, setEmailOwner] = useState('This field will be deleted later');
    const [number, setNumber] = useState('');
    const [message, setMessage] = useState('');
    const [captchaVerified, setVerified] = useState(false)

    const handleSubmit = (e) => {
        if (captchaVerified) {
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
                toast.success('Email sent succesfully!', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    closeButton: false
                });
              })
              .catch((error) => {
                toast.error('Email was not sent!', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    closeButton: false
                });
                console.error('Error sending email:', error);
              });
        
            setName('');
            setNameOwner('');
            setEmail('');
            setEmailOwner('');
            setNumber('');
            setMessage('');
        }
        
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
            <div style={{alignSelf: 'center'}}>
                <ReCAPTCHA
                    sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_KEY}
                    onChange={() => setVerified(true)}
                />
            </div>
            <button 
                disabled={!captchaVerified} 
                style={{ opacity: !captchaVerified ? 0.2 : 1 }} 
                type='submit'
            > Send </button>
          </form>
          <ToastContainer />
        </div>
      );
}

export default ContactForm;
