import './info.css';

function Info() {

  return (
    <div id='perso-info'>
        <div id='first-div' >
            <h2>Personal info</h2>
            <p>Please provide your name, email address. and phone number.</p>
        </div>
        <div className='div-all'>
            <h3>Your name is :</h3>
            <input type="text" placeholder='Vingt-Six' />
        </div>
        <div className='div-all'>
            <h3>Your email is :</h3>
            <input type="email" placeholder='vinat six@email.com' />
        </div>
        <div className='div-all'>
            <h3>Your phone number is :</h3>
            <input type="tel" placeholder='e.g.+1 234 567 890' />
        </div>
        <div id='div-btn'>
            <button>Next Step</button>
        </div>
    </div>
  );
}

export default Info;