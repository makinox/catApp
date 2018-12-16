import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from '../../pages/index'

export default (props) => (
  <Router>
    <>
      {props.children}
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </>
  </Router>
)