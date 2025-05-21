import { useState } from 'react'
import './App.css'
import Sidebar from './assets/img/sidebar.svg'
import Info from './components/Info/info'
import Plan from './components/Plan/plan'
import Add from './components/Add/add'
import Summary from './components/Summary/summary'
import Thx from './components/Thx/thx'

function App() {

  const [currentStep, setCurrentStep] = useState(1);
  const [plan, setPlan] = useState('Arcade');
  const goBack = (step) => {setCurrentStep(step);};
  const [period, setPeriod] = useState('monthly'); // 'monthly' ou 'yearly'
  const [addons, setAddons] = useState([
    { id: 1, title: 'Online service', priceMonthly: 1, priceYearly: 10, selected: true },
    { id: 2, title: 'Larger storage', priceMonthly: 2, priceYearly: 20, selected: false },
    { id: 3, title: 'Customizable Profile', priceMonthly: 2, priceYearly: 20, selected: true },
  ]);

  // Fonction pour revenir à l'étape précédente
  function handleGoBack() {
    setCurrentStep(currentStep - 1);
  }

  return (
    <>
      <section id='formulaire'>
        <img id='sidebar' src={Sidebar} alt="" />

        <section className="overlay-text">
          {/* point 1 */}
          <div className='div-un'>
            <div className={`div-nbr ${currentStep === 1 ? 'active-step' : ''}`}>
              <p>1</p>
            </div>
            <div className='div-txt'>
              <h5>STEP 1</h5>
              <p>YOUR INFO</p>
            </div>
          </div>
          {/* point 2 */}
          <div className='div-1'>
            <div className={`div-nbr ${currentStep === 2 ? 'active-step' : ''}`}>
              <p>2</p>
            </div>
            <div className='div-txt'>
              <h5>STEP 2</h5>
              <p>SELECT PLAN</p>
            </div>
          </div>
          {/* point 3 */}
          <div className='div-1'>
            <div className={`div-nbr ${currentStep === 3 ? 'active-step' : ''}`}>
              <p>3</p>
            </div>
            <div className='div-txt'>
              <h5>STEP 3</h5>
              <p>ADD-ONS</p>
            </div>
          </div>
          {/* point 4 */}
          <div className='div-1'>
            <div className={`div-nbr ${currentStep === 4 ? 'active-step' : ''}`}>
              <p>4</p>
            </div>
            <div className='div-txt'>
              <h5>STEP 4</h5>
              <p>SUMMARY</p>
            </div>
          </div>
        </section>

        <section id='info' style={{ display: currentStep === 1 ? 'block' : 'none' }}>
          <Info goToNext={() => setCurrentStep(2)} />
        </section>

        <section id='section-plan' style={{ display: currentStep === 2 ? 'block' : 'none' }}>
          <Plan
            goBack={() => setCurrentStep(1)}
            goToNext={() => setCurrentStep(3)}
            plan={plan}
            setPlan={setPlan}
            period={period}
            setPeriod={setPeriod}  // <-- pour que Plan puisse changer la période
          />
        </section>

        <section id='section-add-on' style={{ display: currentStep === 3 ? 'block' : 'none' }}>
          <Add
            goBack={() => setCurrentStep(2)}
            goToNext={() => setCurrentStep(4)}
            addons={addons}
            setAddons={setAddons}
            period={period}  // <-- passer la période ici pour ajuster les prix
          />

        </section>

        <section id='section-finish' style={{ display: currentStep === 4 ? 'block' : 'none' }}>
          <Summary
            goBack={setCurrentStep}
            onConfirm={() => setCurrentStep(5)}
            plan={plan}
            period={period}
            addons={addons}
          />
        </section>
          <section style={{ display: currentStep === 5 ? 'block' : 'none' }}>
            <Thx />
          </section>
      </section>
    </>
  )
}

export default App
