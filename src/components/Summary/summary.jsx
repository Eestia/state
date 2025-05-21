import './summary.css';

function Summary({ goBack }) {

  return (
    <div>
      <div id='div-finish'>
        <h2>Finishing up</h2>
        <p>Double-check everything looks OK before confirming.</p>
      </div>
      <div id='div-btn2'>
        <p onClick={goBack} style={{ cursor: 'pointer' }}>Go Back</p>
        <button>Next Step</button>
      </div>
    </div>
  );
}

export default Summary;
