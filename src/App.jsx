import { useState } from 'react'
import './App.css'
import Sidebar from './assets/img/sidebar.svg'
import Info from './components/Info/info'
function App() {

  return (
    <>
    <section id='formulaire'>
      <img id='sidebar' src={Sidebar} alt="" />

      <section className="overlay-text">
      {/* point 1 */}
        <div className='div-un'>
          <div className='div-nbr'>
            <p>1</p>
          </div>
          <div className='div-txt'>
            <h5>STEP 1</h5>
            <p>YOUR INFO</p>
          </div>
        </div>
        {/* point 2 */}
        <div className='div-1'>
          <div className='div-nbr'>
            <p>2</p>
          </div>
          <div className='div-txt'> 
            <h5>STEP 2</h5>
            <p>SELECT PLAN</p>
          </div>
        </div>
        {/* point 3 */}
        <div className='div-1'>
          <div className='div-nbr'>
            <p>3</p>
          </div>
          <div className='div-txt'>
            <h5>STEP 3</h5>
            <p>ADD-ONS</p>
          </div>
        </div>
        {/* point 4 */}
        <div className='div-1'>
          <div className='div-nbr'>
            <p>4</p>
          </div>
          <div className='div-txt'>
            <h5>STEP 4</h5>
            <p>SUMMARY</p>
          </div>
        </div>
      </section>
      <section id='info'>
        <Info/>
      </section>
    </section>
    </>
  )
}

export default App
