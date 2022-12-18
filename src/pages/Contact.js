import React from 'react'
import { BsFacebook, BsInstagram, BsGithub } from 'react-icons/bs';

import './Contact.css'

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-header">
        <h1>Contact</h1>
        <div className="underline"></div>
      </div>
      <div className="contact-content">
        <h3>Get in touch, let's talk.</h3>
        <p>Feel free to send me an email at <b>lanuevo68@gmail.com</b></p>
        <div className="links">
          <div className="links-header">
            <h4>Other Social Media Accounts:</h4>
          </div>
          <a href="https://www.facebook.com/joshivan1234" target="_blank" rel="noreferrer">
            <BsFacebook/ >
          </a>
          <a href="https://www.instagram.com/joshlanuevo/" target="_blank" rel="noreferrer">
            <BsInstagram />
          </a>
          <a href="https://github.com/Joshlanuevo" target="_blank" rel="noreferrer">
            <BsGithub />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Contact;