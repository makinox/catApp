import React from 'react'
import Navbar from './sections/components/navbar'
import Hero from './sections/components/hero'

export default class extends React.Component {
    render() {
        return(
            <div>
                <Navbar />
                <Hero />
            </div>
        )
    }
}