import React from 'react';
import { motion } from 'framer-motion';
import { useScroll } from '../../context/ScrollContext';

const menuVariants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: "100%" },
};

const Burger = ({ isOpen, toggleMenu }) => {
  const { scrollTo } = useScroll();

  return (
    <motion.div
      className="mobile-menu"
      initial="closed"
      animate={isOpen ? "open" : "closed"}
      variants={menuVariants}
      transition={{ duration: 0.3 }}
    >
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
      <ul className="mobile-nav-list">
        <li
          className="nav-link"
          onClick={() => {
            scrollTo('works');
            toggleMenu();
          }}
        >
          How it works
        </li>
        <li
          className="nav-link"
          onClick={() => {
            scrollTo('gym');
            toggleMenu();
          }}
        >
          Inside us
        </li>
        <li
          className="nav-link"
          onClick={() => {
            scrollTo('testimonial');
            toggleMenu();
          }}
        >
          Testimonials
        </li>
        <li
          className="nav-link"
          onClick={() => {
            scrollTo('pricing');
            toggleMenu();
          }}
        >
          Pricing
        </li>
        <li
          className="nav-link nav-cta"
          onClick={() => {
            scrollTo('contact');
            toggleMenu();
          }}
        >
          Try for free
        </li>
      </ul>
    </motion.div>
  );
};

export default Burger;
