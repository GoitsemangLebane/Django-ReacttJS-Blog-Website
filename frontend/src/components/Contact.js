import React, { useRef } from "react";
import emailjs from '@emailjs/browser';
import "./Contact.css";

const Contact = () => {
	const form = useRef;
	
	const sendEmail = (e) => {
		e.preventDefault();
		
		emailjs.sendForm('service_un2y6ts', 'template_7ftcde8', form.current, '7cy5Flf899BvRewrI')
		    .then((result) => {
				console.log(result.text);
			}, (error) => {
				console.log(error.text);
			});
	};
	

  return (
    <form className="form" onSubmit={sendEmail}> 
      <h1>Contact Us 🤳</h1>

      <label>Names</label>
      <input type='text' placeholder="Name" name="User name" />
	  
	  <label>Email</label>
      <input type='email' placeholder="Email" name="User email" />
	  
	  <label>Message</label>
      <textarea name="message" placeholder="Talk to us..." />
	  
      <button type="submit">SEND</button>
    </form>
  );
};

export default Contact;