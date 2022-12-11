import React, { useState } from 'react'
import './Contact.css';
import emailjs from '@emailjs/browser';


import { useRef } from 'react';
 const Contact = () => {
  const form = useRef();


  const [done , setDone] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_zmm9qmi', 'template_9d3mw4v', form.current, 'yAzxC3-DjbCtoArTI')
      .then((result) => {
          console.log(result.text);
          setDone(true);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div className='contact-form'>
        <div className='w-left'>
            <div className='awesome'>
                <span>Get in touch</span>
                <span>Contact Me </span>
                <div className="blur s-blur1" 
                style={{background: '#ABF1FF94'}}
                ></div>
            </div>
        </div>

        {/*If user fill this form and send to you, get the message in your gmail */}
        {/* add the gmail library (npm add emailjs) or (npm i @emailjs/browser)*/}
        {/*after installing this go to google and search email js click in React*/}
        <div className='c-right'>
            <form ref={form} onSubmit={sendEmail}>
            <input type="text" name="user_name" className='user' placeholder='Name' required/>
            <input type="email" name="user_email" className='user' placeholder='Email' required/>
            <textarea name='message' className='user' placeholder='Message'/>
            <input type="submit" value="Send" className='button1' />
            <span>{done && 'Thanks for Contacting me...'}</span>
            <div className="blur c-blur1" 
            style={{background: 'var(--purple)'}}
            ></div>

            </form>
        </div>
    </div>
  )
}

export default Contact;
