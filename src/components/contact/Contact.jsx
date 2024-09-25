import React, { useRef, useEffect } from 'react';
import { useScroll } from '../../context/ScrollContext';
import emailjs from '@emailjs/browser';

import './Contact.css';

const Contact = () => {
  const ref = useRef(null);
  const form = useRef();

  const { registerRef } = useScroll();

  useEffect(() => {
    registerRef('contact', ref);
  }, [registerRef]);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_xsyr52e', 'template_7gvxzle', form.current, {
        publicKey: 'KwbVTqbe9Opzo7xMK',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        }
      );
  };
  return (
    <div className="section-cta" id="cta" ref={ref}>
      <div className="container">
        <div className="cta">
          <div className="cta-text-box">
            <h2 className="heading-secondary">Get your first week for free</h2>
            <p className="cta-text">
              A lot and all kinds of hummers waiting for you. Start working out
              today, make your best shape as possible, stay health and active
              with us!
            </p>
            <form className="cta-form" onSubmit={sendEmail} ref={form}>
              <div>
                <label htmlFor="full-name">Full Name</label>
                <input
                  id="full-name"
                  type="text"
                  placeholder="Mark Godwin"
                  required=""
                />
              </div>
              <div>
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  type="email"
                  placeholder="me@example.com"
                  required=""
                />
              </div>
              <div>
                <label htmlFor="select-where">Where did u hear from us?</label>
                <select id="select-where">
                  <option value="">Please choose one option:</option>
                  <option value="friends">Friends and Family</option>
                  <option value="youtube">YouTube video</option>
                  <option value="podcast">Podcast</option>
                  <option value="ad">Facebook ad</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <button className="btn btn--form">Sign up now</button>
            </form>
          </div>
          <div className="cta-img-box" role="img" aria-label="">
            img
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
