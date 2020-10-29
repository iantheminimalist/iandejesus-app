import React from 'react'
import emailjs from 'emailjs-com'; 

export default function ContactUs() {

    function sendEmail(e) {
      e.preventDefault();
      const serviceID = process.env.REACT_APP_serviceID;
      const templateID = process.env.REACT_APP_templateID;
      const userID = process.env.REACT_APP_userID;
      emailjs.sendForm(serviceID, templateID, e.target, userID)
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text );
        });
        e.target.reset();
    }
  
    return (
      <form className="contact-form" onSubmit={sendEmail}>
        <input type="hidden" name="contact_number" />
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" />
      </form>
    );
  }
