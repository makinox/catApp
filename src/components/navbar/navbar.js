import React from 'react'
import {Link} from 'react-router-dom'
import img1 from '../../assets/hero/cat.svg'
import './navbar.css'

export default () => (
	<header>
		<nav>
			<div>
				<Link to="/"><img src={img1} alt="Logo de jesús bossa" /></Link>
			</div>
			<div>
				<Link to="/breed">Razas</Link>
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