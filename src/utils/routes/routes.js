import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from '../../pages/index'
import Breed from '../../pages/raza'
import Types from '../../pages/type'
import Shop from '../../pages/shop'
import Magic from '../../pages/magia'

export default (props) => (
  <Router>
    <>
      {props.children}
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/breed" component={Breed} />
        <Route exact path="/type" component={Types} />
        <Route exact path="/store" component={Shop} />
        <Route exact path="/magic" component={Magic} />
      </Switch>
    </>
  </Router>
)