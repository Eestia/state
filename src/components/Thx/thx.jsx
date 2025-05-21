import './thx.css';
import thank from '../../assets/img/thankyou.svg';
function Thx() {

  return (
    <div id='thx-section'>
        <img src={thank} alt="" />
        <h2>Thank you!</h2>
        <p>Thanks for confirming your subscription! We hope you have <br/>
        fun using our platform. If you ever need support, please <br/>
        feel free to email us at support@loremgaming.com.</p>
    </div>
  );
}

export default Thx;