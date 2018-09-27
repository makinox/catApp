import React from 'react'
import Navbar from './sections/components/navbar'
import Hero from './sections/components/hero'
import Starters from './sections/components/starterscomponent'

export default class extends React.Component {
    render() {
        return(
            <div>
                <Navbar />
                <Hero />
                <Starters />
            </div>
        )
    }
}