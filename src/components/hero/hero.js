import React from 'react'

import img1 from '../../assets/hero/cat.svg'
import './hero.css'

export default () => (
	<div>
		<div className="sections-component-hero-container">
			<div className="sections-component-hero-item-one">
				<h1>Todo sobre gatos</h1>
				<p>
					Todo sobre los mejores gatos que puedas encontrar.
					Si eres una amante de los gatos, deberias revisar accesorios de gatos para ti y tu mascota.
				</p>
			</div>
			<div className="sections-component-hero-item">
				<img src={img1} alt="Logo de catapp" />
			</div>
		</div>
	</div>
)