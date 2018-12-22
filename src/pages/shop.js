import React from 'react'
import Shop from '../components/shop/shop'
// import {unsplash} from '../utils/api/index'

export default class extends React.Component {

  state = {
    cat: [{}]
  }

  async componentDidMount() {
    const res = await fetch('https://api.mercadolibre.com/categories/MLA1081')
    const {children_categories: cat} = await res.json()

    this.setState({cat})

    // const ponse = await unsplash.photos.listPhotos(2, 15, "latest")
    // const body = await ponse.json()
    // console.log(body)
  }

  render(){return <Shop cat={this.state.cat}/>}
}