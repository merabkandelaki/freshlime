import React, { useRef, useEffect } from 'react';
import { useScroll } from '../../context/ScrollContext';
import './Pricing.css';

const Pricing = () => {
  const ref = useRef(null);
  const { registerRef } = useScroll();

  useEffect(() => {
    registerRef('pricing', ref);
  }, [registerRef]);

  const { scrollTo } = useScroll();
  return (
    <div className="section-pricing" ref={ref}>
      <div className="container">
        <span className="subheading">Pricing</span>
        <h2 className="heading-secondary">Get your dream body</h2>
      </div>
      <div className="container grid grid-2-columns margin-bottom-md">
        <div className="pricing-plan pricing-plan--montly">
          <header className="pricing-header">
            <p className="pricing-name">Montly</p>
            <p className="price-plan">
              <span>$</span>45
            </p>
            <p className="pricing-text">Pay every single month</p>
          </header>
          <ul className="gym-items-list">
            <li className="items-list">
              <ion-icon
                class="gym-card-icon md hydrated"
                name="speedometer-outline"
                role="img"
              ></ion-icon>
              <span>High quality stuff</span>
            </li>
            <li className="items-list">
              <ion-icon
                class="gym-card-icon md hydrated"
                name="speedometer-outline"
                role="img"
              ></ion-icon>
              <span>Open 24/7</span>
            </li>
            <li className="items-list">
              <ion-icon
                class="gym-card-icon md hydrated"
                name="speedometer-outline"
                role="img"
              ></ion-icon>
              <span>Every 10th protein free</span>
            </li>
            <li className="items-list">
              <ion-icon
                class="gym-card-icon md hydrated"
                name="close-outline"
                role="img"
              ></ion-icon>
            </li>
          </ul>
          <div className="price-sign-up">
            <span
              className="btn btn--full margin-right-sm"
              onClick={() => scrollTo('hero')}
            >
              Get your month pass
            </span>
          </div>
        </div>
        <div className="pricing-plan pricing-plan--yearly">
          <header className="pricing-header">
            <p className="pricing-name">Yearly</p>
            <p className="price-plan">
              <span>$</span>600
            </p>
            <p className="pricing-text">Per month it's just 30$</p>
          </header>
          <ul className="gym-items-list">
            <li className="items-list">
              <ion-icon
                class="gym-card-icon md hydrated"
                name="speedometer-outline"
                role="img"
              ></ion-icon>
              <span>Free sauna</span>
            </li>
            <li className="items-list">
              <ion-icon
                class="gym-card-icon md hydrated"
                name="speedometer-outline"
                role="img"
              ></ion-icon>
              <span>Free chocolate bars</span>
            </li>
            <li className="items-list">
              <ion-icon
                class="gym-card-icon md hydrated"
                name="speedometer-outline"
                role="img"
              ></ion-icon>
              <span>Chapm with you</span>
            </li>
            <li className="items-list">
              <ion-icon
                class="gym-card-icon md hydrated"
                name="speedometer-outline"
                role="img"
              ></ion-icon>
              <span>Plan of the year</span>
            </li>
          </ul>
          <div className="price-sign-up">
            <span
              className="btn btn--full margin-right-sm"
              onClick={() => scrollTo('hero')}
            >
              Get your yearly pass
            </span>
          </div>
        </div>
      </div>
      <div className="container grid">
        <aside className="plan-details">
          Prices include all applicable taxes. You can cancel at any time. Both
          plans include the following:
        </aside>
      </div>
      <div className="container grid grid-4-columns">
        <div className="feature">
          <ion-icon
            class="feature-icon md hydrated"
            name="pulse-outline"
            role="img"
          ></ion-icon>
          <p className="feature-title">Tranin every day!</p>
          <p className="feature-text">
            Our gym is open 365 days in year, even holidays you can come!
          </p>
        </div>
        <div className="feature">
          <ion-icon
            class="feature-icon md hydrated"
            name="restaurant-outline"
            role="img"
          ></ion-icon>
          <p className="feature-title">Natural and organic</p>
          <p className="feature-text">
            Our proteins are best in the world and organic good for health
          </p>
        </div>
        <div className="feature">
          <ion-icon
            class="feature-icon md hydrated"
            name="rocket-outline"
            role="img"
          ></ion-icon>
          <p className="feature-title">motivation</p>
          <p className="feature-text">
            We have motivation speakers to motivate you every day
          </p>
        </div>
        <div className="feature">
          <ion-icon
            class="feature-icon md hydrated"
            name="pause-outline"
            role="img"
          ></ion-icon>
          <p className="feature-title">pause anytime</p>
          <p className="feature-text">
            You got full year and have vacation? pause it, it is possible with
            us
          </p>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
