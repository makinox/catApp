import React from 'react'
import './raza.css'
import Img1 from '../../assets/raza/cat3.svg'

const RazaCard = () => (
  <div className="raza-card">
    <div>
      <img src="https://picsum.photos/200/100" alt="Raza img"/>
    </div>
    <div>
      <h3>Raza de gato</h3>
    </div>
  </div>
)

export default () => (
  <>
    <div className="raza-header">
      <div>
        <img src={Img1} alt="Breed img" />
      </div>
      <div>
        <h2>Razas</h2>
      </div>
    </div>
    <div className="raza-body">
      <RazaCard />
      <RazaCard />
      <RazaCard />
      <RazaCard />
      <RazaCard />
      <RazaCard />
      <RazaCard />
      <RazaCard />
      <RazaCard />
      <RazaCard />
      <RazaCard />
      <RazaCard />
      <RazaCard />
      <RazaCard />
      <RazaCard />
      <RazaCard />
    </div>
  </>
)