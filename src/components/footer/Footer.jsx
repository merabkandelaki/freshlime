import React from 'react';
import { useScroll } from '../../context/ScrollContext';
import Logo from '../../assets/icons/logo.png';
import './Footer.css';

const Footer = () => {
  const { scrollTo } = useScroll();
  return (
    <footer className="footer">
      <div className="container grid grid--footer">
        <div className="logo-col">
          <div className="footer-logo">
            <img
              src={Logo}
              alt="Gym Logo"
              className="footer-logo"
              onClick={() => scrollTo('hero')}
            />
          </div>
          <ul className="social-links">
            <li>
              <div className="footer-link" onClick={() => scrollTo('hero')}>
                <ion-icon
                  class="footer-icon md hydrated"
                  name="logo-instagram"
                  role="img"
                ></ion-icon>
              </div>
            </li>
            <li>
              <div className="footer-link" onClick={() => scrollTo('hero')}>
                <ion-icon
                  class="footer-icon md hydrated"
                  name="logo-facebook"
                  role="img"
                ></ion-icon>
              </div>
            </li>
            <li>
              <div className="footer-link" onClick={() => scrollTo('hero')}>
                <ion-icon
                  class="footer-icon md hydrated"
                  name="logo-twitter"
                  role="img"
                ></ion-icon>
              </div>
            </li>
          </ul>
          <p className="copyright">
            Copyright © created in <span className="year">2024</span> by Merab
            Kandelaki
          </p>
        </div>
        <div className="adress-col">
          <p className="footer-heading">Contact us</p>
          <address className="contact">
            <p className="adress">
              Tbilisi Georgia, Chkheidze street
            </p>
            <p className="contacts">
              <span className="footer-link">+995599078287</span>
              <span className="footer-link">kandelakimerab@gmail.com</span>
            </p>
          </address>
        </div>
        <nav className="nav-col">
          <p className="footer-heading">Account</p>
          <ul className="footer-nav">
            <li>
              <span className="footer-link" onClick={() => scrollTo('hero')}>
                Create account
              </span>
            </li>
            <li>
              <span className="footer-link" onClick={() => scrollTo('hero')}>
                Sign in
              </span>
            </li>
            <li>
              <span className="footer-link" onClick={() => scrollTo('hero')}>
                IOS app
              </span>
            </li>
            <li>
              <span className="footer-link" onClick={() => scrollTo('hero')}>
                Android app
              </span>
            </li>
          </ul>
        </nav>
        <nav className="nav-col">
          <p className="footer-heading">Company</p>
          <ul className="footer-nav">
            <li>
              <span className="footer-link" onClick={() => scrollTo('hero')}>
                About FreshLime
              </span>
            </li>
            <li>
              <span className="footer-link" onClick={() => scrollTo('hero')}>
                For Business
              </span>
            </li>
            <li>
              <span className="footer-link" onClick={() => scrollTo('hero')}>
                Partners
              </span>
            </li>
            <li>
              <span className="footer-link" onClick={() => scrollTo('hero')}>
                Careers
              </span>
            </li>
          </ul>
        </nav>
        <nav className="nav-col">
          <p className="footer-heading">Resourses</p>
          <ul className="footer-nav">
            <li>
              <span className="footer-link" onClick={() => scrollTo('hero')}>
                Working plan
              </span>
            </li>
            <li>
              <span className="footer-link" onClick={() => scrollTo('hero')}>
                Help center
              </span>
            </li>
            <li>
              <span className="footer-link" onClick={() => scrollTo('hero')}>
                Privacy &amp; Terms
              </span>
            </li>
            <li>
              <span className="footer-link" onClick={() => scrollTo('hero')}>
                My other works
              </span>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
