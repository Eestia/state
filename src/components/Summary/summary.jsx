import './summary.css';

function Summary({ goBack, onConfirm, plan = 'Arcade', period = 'monthly', addons = [] }) {

  // Liste complète des prix des plans
  const plansPrices = {
    arcade: { monthly: 9, yearly: 90 },
    advanced: { monthly: 12, yearly: 120 },
    pro: { monthly: 15, yearly: 150 },
  };

  // Formater le texte du plan principal
  const planText = `${plan.charAt(0).toUpperCase() + plan.slice(1)} (${period.charAt(0).toUpperCase() + period.slice(1)})`;

  // Récupérer le prix selon le plan et la période
  const planPrice = plansPrices[plan.toLowerCase()] ? plansPrices[plan.toLowerCase()][period] : 0;

  return (
    <div>
      <div id='div-finish'>
        <h2>Finishing up</h2>
        <p>Double-check everything looks OK before confirming.</p>

        <div id="summary-details">
        <div className="summary-plan">
          <div>
            <span>{planText}</span>{" "}
            <p className="change-button" onClick={() => goBack(2)}>Change</p>
          </div>
          <span>{`$${planPrice}${period === 'monthly' ? '/mo' : '/yr'}`}</span>
        </div>


          {/* Liste des add-ons cochés */}
          {addons.filter(addon => addon.selected).length > 0 && (
            <div className="summary-addons">
              {addons.filter(addon => addon.selected).map(addon => (
                <div key={addon.id} className="summary-addon">
                  <span id='span1'>{addon.title}</span>
                  <span id='span2'>{`+$${period === 'monthly' ? addon.priceMonthly : addon.priceYearly}${period === 'monthly' ? '/mo' : '/yr'}`}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <div id='div-btn2'>
        <p onClick={() => goBack(3)} style={{ cursor: 'pointer' }}>Go Back</p>
        <button onClick={onConfirm}>Confirm</button>
      </div>
    </div>
  );
}

export default Summary;

