import { useState } from 'react';
import './plan.css';
import arcade from '../../assets/img/arcade.svg';
import advenced from '../../assets/img/advenced.svg';
import pro from '../../assets/img/pro.svg';

function Plan({ goBack, goToNext }) {
  const [isYearly, setIsYearly] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null); // index ou string pour plan sélectionné

  const toggleHandler = () => {
    setIsYearly(prev => !prev);
  };

  // tableau pour simplifier le rendu
  const plans = [
    { id: 'arcade', title: 'Arcade', img: arcade, monthly: 9, yearly: 90 },
    { id: 'advanced', title: 'Advanced', img: advenced, monthly: 12, yearly: 120 },
    { id: 'pro', title: 'Pro', img: pro, monthly: 15, yearly: 150 },
  ];

  return (
    <div id='plan-div'>
      <div id='text-top'>
        <h2>Select your plan</h2>
        <p>You have the option of monthly or yearly billing</p>
      </div>

      <div id='div-cards'>
        {plans.map((plan, index) => (
          <div
            key={plan.id}
            className={`div-card ${selectedPlan === index ? 'selected' : ''}`}
            onClick={() => setSelectedPlan(index)}
            style={{ cursor: 'pointer' }}
          >
            <div className='img-logo'>
              <img src={plan.img} alt={plan.title} />
            </div>
            <div className='div-txt2'>
              <h3>{plan.title}</h3>
              <p>{isYearly ? `$${plan.yearly}/yr` : `$${plan.monthly}/mo`}</p>
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
        <p onClick={goBack} style={{ cursor: 'pointer' }}>Go Back</p>
        <button onClick={goToNext}>Next Step</button>
      </div>
    </div>
  );
}

export default Plan;
