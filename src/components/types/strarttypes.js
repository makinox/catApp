import React from 'react'

import Presentation from '../presentation/presentation'
import Container from '../containers/container-2'
import './starttypes.css'

const TypeCard = () => (
	<div className="starters-components-startypes-card">
		<a href="/">Raza siames <span role="img" aria-label="Emoji section">😜</span></a>
	</div>
)

export default () => (
	<Container>

		<div className="starters-components-startypes-item-one">

			<TypeCard />
			<TypeCard />
			<TypeCard />
			<TypeCard />
			<TypeCard />
			<TypeCard />
			<TypeCard />
			<TypeCard />

		</div>

		<Presentation
			title="Razas de gatos"
			text="Porque no ver razas de gaticos? seguro que encuentras alguno que no conozcas o una que otra cosa que no sepas"
			img="https://picsum.photos/200/200"
			alt="Imagenes de razas de gatos"
		/>

	</Container>
)