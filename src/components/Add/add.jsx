import { useState } from 'react';
import './add.css';

function Add({ goBack, goToNext, addons, setAddons, period }) {

  // prix dynamiques selon période
  const priceSuffix = period === 'monthly' ? '/mo' : '/yr';

  const addonsData = [
    { id: 1, title: 'Online service', desc: 'Access to multiplayer games', priceMonthly: 1, priceYearly: 10 },
    { id: 2, title: 'Larger storage', desc: 'Extra 1TB of cloud save', priceMonthly: 2, priceYearly: 20 },
    { id: 3, title: 'Customizable Profile', desc: 'Custom theme on your profile', priceMonthly: 2, priceYearly: 20 },
  ];

  // Mets à jour la liste d'addons affichée
  // (Ici, pour simplifier, tu peux reconstruire le tableau ou bien utiliser addons + setAddons)

  return (
    <div>
      <div id='div-haut'>
        <h2>Pick add-ons</h2>
        <p>Add-ons help enhance your gaming experience.</p>
      </div>
      <div>
        {addonsData.map(({id, title, desc, priceMonthly, priceYearly}) => (
          <div
            id='les-rectangles'
            key={id}
            className={`rectangle ${addons.some(a => a.id === id && a.selected) ? 'selected' : ''}`}
            onClick={() => {
              // toggler sélection en mettant à jour addons
              const updatedAddons = addons.map(a =>
                a.id === id ? { ...a, selected: !a.selected } : a
              );
              setAddons(updatedAddons);
            }}
          >
            <div className='rectangle-input'>
              <input type="checkbox" checked={addons.some(a => a.id === id && a.selected)} readOnly />
            </div>
            <div className='rectangle-txt'>
              <h3>{title}</h3>
              <p>{desc}</p>
            </div>
            <div className='rectangle-nbr'>
              <p>{`+$${period === 'monthly' ? priceMonthly : priceYearly}${priceSuffix}`}</p>
            </div>
          </div>
        ))}
      </div>
      <div id='div-btn2'>
        <p id='goback2' onClick={goBack} style={{ cursor: 'pointer' }}>Go Back</p>
        <button id='btn-trois' onClick={goToNext}>Next Step</button>
      </div>
    </div>
  );
}


export default Add;

