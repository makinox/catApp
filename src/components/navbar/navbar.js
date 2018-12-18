import React from 'react'
import { Link } from 'react-router-dom'
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
				<Link to="/type">Tipos</Link>
			</div>
			<div>
				<Link to="/store">Tienda</Link>
			</div>
			<div>
				<Link to="/magic">Magia</Link>
			</div>
		</nav>
	</header>
)