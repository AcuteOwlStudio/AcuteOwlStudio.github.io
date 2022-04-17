import React, {useState} from 'react';
import {send} from 'emailjs-com';
import config from '../config.js';

function Contact() {
  const [toSend, setToSend] = useState({
    from_name: '',
    email: '',
    message: ''
  })

  const onSubmit = (e) => {
    e.preventDefault();
    send(
      config.emailjs.id,
      config.emailjs.template,
      toSend,
      config.emailjs.key
    )
    .then((response) => {
      console.log('SUCCESS!', response.status,response.text);
      setToSend({ ...toSend, from_name:"", email:'', message:''});
    })
    .catch((err) => {
      console.log('failure', err);
    })
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value});
  }

  return (
    <div>
      <main className="contactContainer">

        <form id="contact" onSubmit={onSubmit}>
          <h2> Contact us </h2>
          <input type='text' alt="Name" placeholder='Name'
            name='from_name'
            value={toSend.from_name}
            onChange={handleChange} required/>
          <br/>
          <br/>
          <input type='text' alt="email address" placeholder='email@address.com'
            name='email'
            value={toSend.email}
            onChange={handleChange} required/>
          <br/>
          <br/>
          <textarea className="messageInput" rows="2" col="1" alt="Message" placeholder='Your Message'
            name='message'
            value={toSend.message}
            onChange={handleChange} required/>
          <button type="submit" className="button">Submit</button>
        </form>

      </main>
    </div>
  );


}

export default Contact;
