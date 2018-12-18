import React from 'react'
import './raza.css'
import Img1 from '../../assets/raza/cat3.svg'

export default () => (
  <div className="raza-header">
    <div>
      <img src={Img1} alt="Breed img"/>
    </div>
    <div>
      <h2>Razas</h2>
    </div>
  </div>
)