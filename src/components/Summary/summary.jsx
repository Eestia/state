import './summary.css';

function Summary({ goBack, plan = 'Arcade', period = 'monthly', addons = [] }) {

  // Exemple de prix pour les plans
  const plansPrices = {
    arcade: { monthly: 9, yearly: 90 },
    // ajoute les autres plans si tu en as
  };

  // Formater le texte du plan principal
  const planText = `${plan.charAt(0).toUpperCase() + plan.slice(1)} (${period.charAt(0).toUpperCase() + period.slice(1)})`;

  // Prix du plan selon période
  const planPrice = plansPrices[plan.toLowerCase()] ? plansPrices[plan.toLowerCase()][period] : 0;

  return (
    <div>
      <div id='div-finish'>
        <h2>Finishing up</h2>
        <p>Double-check everything looks OK before confirming.</p>

        <div id="summary-details">
          <div className="summary-plan">
            <span>{planText}</span>
            <span>{`$${planPrice}${period === 'monthly' ? '/mo' : '/yr'}`}</span>
          </div>

          {/* Liste des add-ons cochés */}
          {addons.filter(addon => addon.selected).length > 0 && (
            <div className="summary-addons">
              {addons.filter(addon => addon.selected).map(addon => (
                <div key={addon.id} className="summary-addon">
                  <span>{addon.title}</span>
                  <span>{`+$${period === 'monthly' ? addon.priceMonthly : addon.priceYearly}${period === 'monthly' ? '/mo' : '/yr'}`}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <div id='div-btn2'>
        <p onClick={goBack} style={{ cursor: 'pointer' }}>Go Back</p>
        <button>Next Step</button>
      </div>
    </div>
  );
}

export default Summary;

