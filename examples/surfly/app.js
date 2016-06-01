import React, { Component } from 'react'
import { render } from 'react-dom'
import { browserHistory, IndexRoute, Router, Route, Link, hashHistory } from 'react-router'

class Home extends Component {
  render() {
    return (
      <div>Home!</div>
    )
  }
}

class App extends Component {
  render() {
    return (
      <div className="app-container-body">
      	{this.props.children}
      </div>
    )
  }
}

render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
    </Route>
  </Router>
), document.getElementById('example'))
