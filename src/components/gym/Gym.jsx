import React, { useRef, useEffect } from 'react';
import { useScroll } from '../../context/ScrollContext';
import './Gym.css';
import CardImageFirst from '../../assets/images/card-img-1.jpg';
import CardImageSecond from '../../assets/images/card-img-2.jpg';

const Gym = () => {
  const ref = useRef(null);
  const { registerRef } = useScroll();

  useEffect(() => {
    registerRef('gym', ref);
  }, [registerRef]);

  const { scrollTo } = useScroll();
  return (
    <div className="section-gym" ref={ref}>
      <div className="container center-text">
        <span className="subheading">Inside Us</span>
        <h2 className="heading-secondary">
          At our gym u will find everything u need
        </h2>
      </div>
      <div className="container grid grid-3-columns margin-bottom-md">
        <div className="gym-card">
          <img src={CardImageFirst} alt="" className="gym-img" />
          <div className="gym-content">
            <div className="gym-tags">
              <span className="tag tag--cardio">Fresh new cardio</span>
            </div>
            <p className="card-name">cardio part</p>
            <ul className="gym-items-list">
              <li className="items-list">
                <ion-icon
                  class="gym-card-icon md hydrated"
                  name="speedometer-outline"
                  role="img"
                ></ion-icon>
                <span>High tempo cardio</span>
              </li>
              <li className="items-list">
                <ion-icon
                  class="gym-card-icon md hydrated"
                  name="eye-outline"
                  role="img"
                ></ion-icon>
                <span>best view</span>
              </li>
              <li className="items-list">
                <ion-icon
                  class="gym-card-icon md hydrated"
                  name="accessibility-outline"
                  role="img"
                ></ion-icon>
                <span>all kind</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="gym-card">
          <img src={CardImageSecond} alt="" className="gym-img" />
          <div className="gym-content">
            <div className="gym-tags">
              <span className="tag tag--bar">Heavy Bars</span>
            </div>
            <p className="card-name">Best Bars</p>
            <ul className="gym-items-list">
              <li className="items-list">
                <ion-icon
                  class="gym-card-icon md hydrated"
                  name="barbell-outline"
                  role="img"
                ></ion-icon>
                <span>
                  <strong>100KG</strong>plus
                </span>
              </li>
              <li className="items-list">
                <ion-icon
                  class="gym-card-icon md hydrated"
                  name="trophy-outline"
                  role="img"
                ></ion-icon>
                <span>champion</span>
              </li>
              <li className="items-list">
                <ion-icon
                  class="gym-card-icon md hydrated"
                  name="volume-high-outline"
                  role="img"
                ></ion-icon>
                <span>support</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="gym-stuff">
          <h3 className="heading-tertiary">Our equipment:</h3>
          <ul className="list">
            <li className="list-item">
              <ion-icon
                class="list-icon md hydrated"
                name="checkmark-done-outline"
                role="img"
              ></ion-icon>
              <span>CHEST PRESS MACHINE</span>
            </li>
            <li className="list-item">
              <ion-icon
                class="list-icon md hydrated"
                name="checkmark-done-outline"
                role="img"
              ></ion-icon>
              <span>SEATED DIP MACHINE</span>
            </li>
            <li className="list-item">
              <ion-icon
                class="list-icon md hydrated"
                name="checkmark-done-outline"
                role="img"
              ></ion-icon>
              <span>CHEST FLY MACHINE</span>
            </li>
            <li className="list-item">
              <ion-icon
                class="list-icon md hydrated"
                name="checkmark-done-outline"
                role="img"
              ></ion-icon>
              <span>BENCH PRESS</span>
            </li>
            <li className="list-item">
              <ion-icon
                class="list-icon md hydrated"
                name="checkmark-done-outline"
                role="img"
              ></ion-icon>
              <span>INCLINE BENCH PRESS</span>
            </li>
            <li className="list-item">
              <ion-icon
                class="list-icon md hydrated"
                name="checkmark-done-outline"
                role="img"
              ></ion-icon>
              <span>ADJUSTABLE BENCH</span>
            </li>
            <li className="list-item">
              <ion-icon
                class="list-icon md hydrated"
                name="checkmark-done-outline"
                role="img"
              ></ion-icon>
              <span>OLYMPIC WEIGHT BENCH</span>
            </li>
            <li className="list-item">
              <ion-icon
                class="list-icon md hydrated"
                name="checkmark-done-outline"
                role="img"
              ></ion-icon>
              <span>GHD MACHINE</span>
            </li>
            <li className="list-item">
              <ion-icon
                class="list-icon md hydrated"
                name="duplicate-outline"
                role="img"
              ></ion-icon>
              <span>AND WAY MORE</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="container all-stuff">
        <span className="link" onClick={() => scrollTo('hero')}>
          Check our equipments →
        </span>
      </div>
    </div>
  );
};

export default Gym;
