import React from 'react'
import Img1 from '../../assets/shop/cat5.svg'
import './shop.css'

const RazaCard = (props) => (
	<div className="index-raza-card">
		<img src="https://picsum.photos/100/100" alt="Imagenes de razas de gatos" />
		<a href="/">{props.name}</a>
	</div>
)

export default (props) => (
  <>
    <div className="shop-header">
      <div>
        <img src={Img1} alt="Breed img" />
      </div>
      <div>
        <h2>Tienda</h2>
      </div>
    </div>
    <div className="shop-body">
      {props.cat.map(el => (
        <RazaCard name={el.name}/>
      ))}
    </div>
  </>
)