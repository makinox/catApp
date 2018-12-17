import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from '../../pages/index'
import Breed from '../../pages/raza'

export default (props) => (
  <Router>
    <>
      {props.children}
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/breed" component={Breed} />
      </Switch>
    </>
  </Router>
)