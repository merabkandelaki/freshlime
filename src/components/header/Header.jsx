import React, { useRef, useEffect, useState } from 'react';
import { useScroll } from '../../context/ScrollContext';
import { motion } from 'framer-motion';
import Logo from '../../assets/icons/logo.png';
import './Header.css';
import Burger from "./Burger";

import { createPortal } from 'react-dom';

const Header = () => {
  const ref = useRef(null);
  const { registerRef } = useScroll();
  const [isFixed, setIsFixed] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  window.addEventListener('scroll', () => {
    window.scrollY >= 768 ? setIsFixed(true) : setIsFixed(false);
  });

  useEffect(() => {
    registerRef('header', ref);
  }, [registerRef]);

  const { scrollTo } = useScroll();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`header ${isFixed ? 'sticky' : ''}`} ref={ref}>
      <div>
        <img
          className="logo"
          src={Logo}
          alt="logo"
          onClick={() => scrollTo('hero')}
        />
      </div>
      <nav className="nav">
        <ul className={`nav-list ${isOpen ? 'open' : ''}`}>
          <li className="nav-link" onClick={() => scrollTo('works')}>
            How it works
          </li>
          <li className="nav-link" onClick={() => scrollTo('gym')}>
            Inside us
          </li>
          <li className="nav-link" onClick={() => scrollTo('testimonial')}>
            Testimonials
          </li>
          <li className="nav-link" onClick={() => scrollTo('pricing')}>
            Pricing
          </li>
          <li className="nav-link nav-cta" onClick={() => scrollTo('contact')}>
            Try for free
          </li>
        </ul>
      </nav>
      <div className="burger-menu" onClick={toggleMenu}>
        <motion.div
          className={`menu-icon ${isOpen ? 'open' : ''}`}
          initial={false}
          animate={isOpen ? "open" : "closed"}
        >
          <span></span>
          <span></span>
          <span></span>
        </motion.div>
      </div>
      {createPortal(
        <Burger isOpen={isOpen} toggleMenu={toggleMenu} />,
        document.body
      )}
    </div>
  );
};

export default Header;
