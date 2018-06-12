import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Home.css'

class Home extends Component {
  render() {
    const { handleKeyPress } = this.props

    return (
      <div>
        <nav>
          <div className="row main-nav">
            <div className="col s10 logo">
              <h1>JOHN ELLIOT</h1>
            </div>
            <div className="col s2 nav-links">
              <Link className="link-font" to="/">Home</Link> | <Link className="link-font" to="/shop">Shop</Link>
            </div>
          </div>
        </nav>
        <div className="row home-banner">
          <div className="col s12">
            <form>
              <input type="text" onKeyPress={handleKeyPress} placeholder="Enter your name..." />
            </form>
            <img className="responsive-img" src="/imgs/homepage.jpg" alt="john elliot homepage" />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;