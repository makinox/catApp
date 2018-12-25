import React from 'react'
import Magia from '../components/magia/magia'
import {unsplash} from '../utils/api/index'

export default class extends React.Component {

  state = {
    cats: [{}]
  }

  async componentDidMount() {
    const res = await unsplash.search.photos("cats", 1, 20)
    let {results: cats} = await res.json()
    cats = cats.map(el => ({description: el.description, thumb: el.urls.thumb}))
    this.setState({cats})
  }

  render(){return <Magia cats={this.state.cats} />}
}