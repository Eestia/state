import { useState } from 'react';
import './info.css';

function Info({ goToNext }) {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  return (
    <div id='perso-info'>
      <div id='first-div'>
        <h2>Personal info</h2>
        <p>Please provide your name, email address, and phone number.</p>
      </div>

      <div className='div-all'>
        <h3>Your name is: {name}</h3>
        <input
          type="text"
          placeholder='Vingt-Six'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div className='div-all'>
        <h3>Your email is: {email}</h3>
        <input
          type="email"
          placeholder='vingt six@email.com'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className='div-all'>
        <h3>Your phone number is: {phone}</h3>
        <input
          type="tel"
          placeholder='e.g. +1 234 567 890'
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </div>

      <div id='div-btn'>
        <button id='btn-une' onClick={goToNext}>Next Step</button>
      </div>
    </div>
  );
}

export default Info;
