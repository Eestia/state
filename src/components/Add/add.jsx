import './add.css';

function Add() {

  return (
    <div>
      <div id='div-haut'>
        <h2>Pick add-ons</h2>
        <p>Add-ons help enhance your gaming experience.</p>
      </div>
      <div>
        {/* 🔵 */}
        <div className='rectangle'>
          <div className='rectangle-input'>
            <input type="checkbox" name="" id="" />
          </div>

          <div className='rectangle-txt'>
            <h3>Online service</h3>
            <p>Access to multiplayer games</p>
          </div>

          <div className='rectangle-nbr'>
            <p>+$10/yr</p>
          </div>
        </div>
        {/* 🔵 */}
        <div className='rectangle'>
          <div className='rectangle-input'>
            <input type="checkbox" name="" id="" />
          </div>

          <div className='rectangle-txt'>
            <h3>Larger storage</h3>
            <p>Extra 1TB of cloud save</p>
          </div>

          <div className='rectangle-nbr2'>
            <p>+$20/yr</p>
          </div>
        </div>
        {/* 🔵 */}
        <div className='rectangle'>
          <div className='rectangle-input'>
            <input type="checkbox" name="" id="" />
          </div>

          <div className='rectangle-txt'>
            <h3>Customizable Profile</h3>
            <p>Custom theme on your profile</p>
          </div>

          <div className='rectangle-nbr3'>
            <p>+$20/yr</p>
          </div>
        </div>
      </div>
      <div id='div-btn2'>
            <p>Go Back</p>
            <button>Next Step</button>
      </div>
    </div>
  );
}

export default Add;
