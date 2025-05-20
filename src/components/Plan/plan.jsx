import './plan.css';
import arcade from '../../assets/img/arcade.svg'
import advenced from '../../assets/img/advenced.svg'
import pro from '../../assets/img/pro.svg'
function Plan() {

  return (
    <div>
        <div id='text-top'>
            <h2>Select your plan</h2>
            <p>the option Of monthy or yearty</p>
        </div>
        <div id='div-cards'>
            <div className='div-card'>
                <div className='img-logo'>
                    <img src={arcade} alt="" />
                </div>
                <div className='div-txt2'>
                    <h3>Arcade</h3>
                    <p>$9/mo</p>
                </div>
            </div>
            <div className='div-card'>
                <div className='img-logo'>
                    <img src={advenced} alt="" />
                </div>
                <div className='div-txt2'>
                    <h3>Advanced</h3>
                    <p>$12/mo</p>
                </div>
            </div>
            <div className='div-card'>
                <div className='img-logo'>
                    <img src={pro} alt="" />
                </div>
                <div className='div-txt2'>
                    <h3>Pro</h3>
                    <p>$15/mo</p>
                </div>
            </div>
        </div>
        <div id='toggle'>
                <p>Monthly</p>
                <label class="switch">
                    <input type="checkbox"/>
                    <span class="slider round"></span>
                </label>
                <p>Yearly</p>
        </div>
        <div id='div-btn2'>
            <p>Go Back</p>
            <button>Next Step</button>
        </div>
    </div>
  );
}

export default Plan;