import React from 'react';
import './Feature.css';
import TechCruch from '../../assets/images/techcrunch.png';
import BusinessInsider from '../../assets/images/business-insider.png';
import NewYorkTimes from '../../assets/images/the-new-york-times.png';
import Forbes from '../../assets/images/forbes.png';
import UsaToday from '../../assets/images/usa-today.png';

const Feature = () => {
  return (
    <div className="section-feature">
      <div className="container">
        <h2 className="heading-featured">As featured in hello</h2>
        <div className="logos">
          <img src={TechCruch} alt="" />
          <img src={BusinessInsider} alt="" />
          <img src={NewYorkTimes} alt="" />
          <img src={Forbes} alt="" />
          <img src={UsaToday} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Feature;
