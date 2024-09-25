import React, { useRef, useEffect } from 'react';
import { useScroll } from '../../context/ScrollContext';
import './Works.css';
import MealImage from '../../assets/images/meal.jpg';
import PersonalTrainerImage from '../../assets/images/personal-trainer.jpg';
import EquipmentImage from '../../assets/images/equipment.jpg';

const Works = () => {
  const ref = useRef(null);
  const { registerRef } = useScroll();

  useEffect(() => {
    registerRef('works', ref);
  }, [registerRef]);

  return (
    <div className="how-it-works" ref={ref}>
      <div className="container">
        <span className="subheading">how we work</span>
        <h2 className="heading-secondary">
          Our benefits and skills that make u happy
        </h2>
      </div>
      <div className="container grid grid-2-columns grid--center-v">
        <div className="step-text-box">
          <p className="step-number">01</p>
          <h3 className="heading-tertiary">
            For all 7 days in week our diet plan
          </h3>
          <p className="step-description">
            We have our own brand chef, who created diet meal plan for every
            single human being body time and all of this including in
            subscription price
          </p>
        </div>
        <div className="step-img-box">
          <img src={MealImage} alt="" className="step-img-first" />
        </div>
        <div className="step-img-box">
          <img src={PersonalTrainerImage} alt="" className="step-img-second" />
        </div>
        <div className="step-text-box">
          <p className="step-number">02</p>
          <h3 className="heading-tertiary">
            One of the best personal trainers
          </h3>
          <p className="step-description">
            In our gym u will find world of the champions of bodybuilding and
            exactly they will make sure that u will succeses
          </p>
        </div>
        <div className="step-text-box">
          <p className="step-number">03</p>
          <h3 className="heading-tertiary">Gym equipment</h3>
          <p className="step-description">
            In our gym we are trying to have fresh and newest gym equipments,
            follow the trend and have everything to make easy and light your
            workout session
          </p>
        </div>
        <div className="step-img-box">
          <img src={EquipmentImage} alt="" className="step-img-third" />
        </div>
      </div>
    </div>
  );
};

export default Works;
