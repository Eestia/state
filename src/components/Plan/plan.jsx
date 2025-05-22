import { useState } from 'react';
import './plan.css';
import arcade from '../../assets/img/arcade.svg';
import advenced from '../../assets/img/advenced.svg';
import pro from '../../assets/img/pro.svg';

function Plan({ goBack, goToNext, period, setPeriod, plan, setPlan }) {
  // plus besoin de isYearly local
  const isYearly = period === 'yearly';

  const toggleHandler = () => {
    setPeriod(isYearly ? 'monthly' : 'yearly');
  };

  // Pour la sélection du plan, tu peux gérer plan et setPlan aussi ici

  const plans = [
    { id: 'arcade', title: 'Arcade', img: arcade, monthly: 9, yearly: 90 },
    { id: 'advanced', title: 'Advanced', img: advenced, monthly: 12, yearly: 120 },
    { id: 'pro', title: 'Pro', img: pro, monthly: 15, yearly: 150 },
  ];

  // Trouve index du plan sélectionné (pour surligner)
  const selectedIndex = plans.findIndex(p => p.id === plan.toLowerCase());

  return (
    <div id='plan-div'>
        <div id='text-top'>
            <h2>Select your plan</h2>
            <p>You have the option of monthly or yearly billing</p>
        </div>
      {/* ... */}
      <div id='div-cards'>
        {plans.map((p, i) => (
          <div
            key={p.id}
            className={`div-card ${selectedIndex === i ? 'selected' : ''}`}
            onClick={() => setPlan(p.title)}
            style={{ cursor: 'pointer' }}
          >
            <div className='img-logo'>
              <img src={p.img} alt={p.title} />
            </div>
            <div className='div-txt2'>
              <h3>{p.title}</h3>
              <p>{isYearly ? `$${p.yearly}/yr` : `$${p.monthly}/mo`}</p>
            </div>
          </div>
        ))}
      </div>
      <div id='toggle'>
        <p style={{ color: !isYearly ? '#001839' : 'gray', fontWeight: 'bold' }}>Monthly</p>
        <label className="switch">
          <input type="checkbox" checked={isYearly} onChange={toggleHandler} />
          <span className="slider round"></span>
        </label>
        <p style={{ color: isYearly ? '#001839' : 'gray', fontWeight: 'bold' }}>Yearly</p>
      </div>
      <div id='div-btn2'>
        <p id='goback' onClick={goBack} style={{ cursor: 'pointer' }}>Go Back</p>
        <button id='btn-deux' onClick={goToNext}>Next Step</button>
      </div>
    </div>
  );
}


export default Plan;
