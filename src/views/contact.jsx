import React from 'react';
import Header from './components/header.jsx';
import Footer from './components/footer.jsx';

function Contact() {
  return (
    <div>
      <main className="contactContainer">
        <form id="contact">
          <p>Name:</p>
          <input alt="Name"/>
          <p>Email:</p>
          <input alt="email address"/>
          <p>Message:</p>
          <textarea className="messageInput" rows="2" col="1" alt="Message"/>
        </form>
        <a type="button" className="button" form="#contact">Submit</a>
      </main>
    </div>
  );
}

export default Contact;
