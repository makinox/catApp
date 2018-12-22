import React from 'react'
import Shop from '../components/shop/shop'

export default class extends React.Component {

  state = {
    cat: [{}]
  }

  async componentDidMount() {
    const res = await fetch('https://api.mercadolibre.com/categories/MLA1081')
    const {children_categories: cat} = await res.json()

    this.setState({cat})
  }

  render(){return <Shop cat={this.state.cat}/>}
}