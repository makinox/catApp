import React from 'react'
import img1 from '../../assets/navbar/logo.svg'
import './navbar.css'

export default () => (
	<header>
		<nav>
			<div>
				<a href="#pan"><img src={img1} alt="Logo de jesús bossa" /></a>
			</div>
			<div>
				<a href="#about">Razas</a>
			</div>
			<div>
				<a href="#experience">Tipos</a>
			</div>
			<div>
				<a href="#studies">Accesorios</a>
			</div>
		</nav>
	</header>
)