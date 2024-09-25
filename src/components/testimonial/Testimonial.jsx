import React, { useRef, useEffect } from 'react';
import { useScroll } from '../../context/ScrollContext';
import './Testimonial.css';
import CustomerImg1 from '../../assets/images/customer-1.jpg';
import CustomerImg2 from '../../assets/images/customer-2.jpg';
import CustomerImg3 from '../../assets/images/customer-3.jpg';
import CustomerImg4 from '../../assets/images/customer-4.jpg';
import GymImg1 from '../../assets/images/gym-1.jpg';
import GymImg2 from '../../assets/images/gym-2.jpg';
import GymImg3 from '../../assets/images/gym-3.jpg';
import GymImg4 from '../../assets/images/gym-4.jpg';
import GymImg6 from '../../assets/images/gym-6.jpg';

const Testimonial = () => {
  const ref = useRef(null);
  const { registerRef } = useScroll();

  useEffect(() => {
    registerRef('testimonial', ref);
  }, [registerRef]);
  return (
    <div className="section-testimonial" ref={ref}>
      <div className="testimonial-container">
        <span className="subheading">how we work</span>
        <h2 className="heading-secondary">
          Our benefits and skills that make u happy
        </h2>
        <div className="testimonials">
          <figure className="testimonial">
            <img src={CustomerImg1} alt="" className="testimonial-img" />
            <blockquote className="testimonial-text">
              Hi there lola here, I never liked gym before. I am lazy hahahaha,
              but in Fresh Lime you just can't be lazy, wanna work hours and
              never stop!
            </blockquote>
            <span className="testimonial-name">— Lola Lee</span>
          </figure>
          <figure className="testimonial">
            <img src={CustomerImg2} alt="" className="testimonial-img" />
            <blockquote className="testimonial-text">
              I'm from Maldives and I never seen Gym like Fresh Lime, love
              everything. They have best machines for chest and my wife loves
              it.
            </blockquote>
            <span className="testimonial-name">— Marcus Stanford</span>
          </figure>
          <figure className="testimonial">
            <img src={CustomerImg3} alt="" className="testimonial-img" />
            <blockquote className="testimonial-text">
              In Fresh Lime I'm feeling like home, best stuff, amazing personal
              stuff, one of the best protain bars inside. I love everything!
            </blockquote>
            <span className="testimonial-name">— Marta Hansen</span>
          </figure>
          <figure className="testimonial">
            <img src={CustomerImg4} alt="" className="testimonial-img" />
            <blockquote className="testimonial-text">
              When I started I was skinny, Now I'm like mountain. Every single
              day coming to fresh line gave me energy, passion, happiness, joy
              and love!
            </blockquote>
            <span className="testimonial-name">— Steve Maccarthury</span>
          </figure>
        </div>
      </div>
      <div className="gallery">
        <figure className="gallery-item">
          <img src={GymImg1} alt="" />
        </figure>
        <figure className="gallery-item">
          <img src={GymImg2} alt="" />
        </figure>
        <figure className="gallery-item">
          <img src={GymImg3} alt="" />
        </figure>
        <figure className="gallery-item">
          <img src={GymImg4} alt="" />
        </figure>
        <figure className="gallery-item">
          <img src={GymImg1} alt="" />
        </figure>
        <figure className="gallery-item">
          <img src={GymImg6} alt="" />
        </figure>
      </div>
    </div>
  );
};

export default Testimonial;
