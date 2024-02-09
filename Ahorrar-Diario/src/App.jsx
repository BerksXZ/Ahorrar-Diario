import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Calen from './Calen.jsx';

function App() {
  
  return(
    <>
      <main>
        <section>
          <nav>
            <div id='Logo'>
              <span>AhorrarDiario</span>
            </div>
            <div id='Nav-Btn'>
              <ul>
                <li>Asignar Meta</li>
                <li>Rubros</li>
              </ul>
            </div>
          </nav>
          <div id='Hero'>
            <h1>Calendario de Ahorro</h1>
            <Calen />
          </div>
        </section>
      </main>
    </>
  )
}

export default App
