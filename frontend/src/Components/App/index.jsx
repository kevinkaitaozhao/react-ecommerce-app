import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from '../Home/'
import Shop from '../Shop/'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      username: ''
    }
  }

  handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault()
      this.setState({
        username: event.target.value
      })
      event.target.value = ''
    }
  }

  componentDidUpdate() {
    const { username } = this.state
    localStorage.setItem('username', JSON.stringify(username))
  }

  componentDidMount() {
    const username = JSON.parse(localStorage.getItem('username'))

    if (username) {
      this.setState({
        username
      })
    }
  }

  render() {
    const { username } = this.state
    return (
      <div className="container">
        <Router>
          <Switch>
            <Route
              exact path="/"
              render={routerProps => <Home
                {...routerProps}
                handleKeyPress={this.handleKeyPress}
              />}
            />
            <Route
              path="/shop"
              render={routerProps => <Shop {...routerProps}
              username={username}
              />}
            />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
