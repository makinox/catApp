import React from 'react'
import img1 from '../../assets/hero/cat.svg'
import './navbar.css'

export default () => (
	<header>
		<nav>
			<div>
				<a href="#razas"><img src={img1} alt="Logo de jesús bossa" /></a>
			</div>
			<div>
				<a href="#tipos">Razas</a>
			</div>
			<div>
				<a href="#experience">Tipos</a>
			</div>
			<div>
				<a href="#store">Tienda</a>
			</div>
			<div>
				<a href="#store">Magia</a>
			</div>
		</nav>
	</header>
)