import React from 'react'

import Presentation from '../presentation/presentation'
import Container from '../containers/container-2'
import './startraza.css'

const RazaCard = () => (
	<div className="starters-components-startraza-card">
		<img src="https://picsum.photos/150/150" alt="Imagenes de razas de gatos" />
		<a href="/">Gato siames</a>
	</div>
)

export default () => (
	<Container>

		<Presentation
		 title="Razas de gatos"
		 text="Porque no ver razas de gaticos? seguro que encuentras alguno que no conozcas o una que otra cosa que no sepas"
		 img="https://picsum.photos/200/200"
		 alt="Imagenes de razas de gatos"
		/>

		<div className="starters-components-startraza-item-two">

			<RazaCard />
			<RazaCard />
			<RazaCard />
			<RazaCard />

		</div>

	</Container>
)