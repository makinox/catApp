import React from 'react'
import Navbar from '../components/navbar/navbar'
import Hero from '../components/hero/hero'
import Raza from '../components/raza/startraza'
import Types from '../components/types/strarttypes'

export default class extends React.Component {
	render() {
		return (
			<div>
				<Navbar />
				<Hero />
				<div>
					<Raza />
					<Types />
				</div>
			</div>
		)
	}
}
