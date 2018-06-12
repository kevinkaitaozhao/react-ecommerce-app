import React, { Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import axios from 'axios'

import Tees from '../Tees/'
import Pants from '../Pants/'
import Cart from '../Cart/'

import './Shop.css'

class Shop extends Component {
  constructor(props) {
    super(props)

    this.state = {
      cart: [],
      tees: [
        {
          name: 'Anti-Expo Tee Ocean',
          price: 88,
          picture: '/imgs/tees/ANTI_EXPO_TEE_FLAT_OCEAN.jpg',
          type: 'tee'
        },
        {
          name: 'Big Tee Army',
          price: 72,
          picture: '/imgs/tees/BIG_TEE_FLAT_ARMY.jpg',
          type: 'tee'
        },
        {
          name: 'Classic Crew Grey',
          price: 68,
          picture: '/imgs/tees/CLASSIC_CREW_FLAT_GREY.jpg',
          type: 'tee'
        },
        {
          name: 'Classic Crew Mojave',
          price: 68,
          picture: '/imgs/tees/CLASSIC_CREW_FLAT_MOJAVE.jpg',
          type: 'tee'
        },
        {
          name: 'Cotton Classic Crew',
          price: 68,
          picture: '/imgs/tees/COTTON_CLASSIC_CREW_FLAT_BLACK.jpg',
          type: 'tee'
        },
        {
          name: 'Curve U-Neck',
          price: 72,
          picture: '/imgs/tees/CURVE_U_NECK_FLAT_BLACK.jpg',
          type: 'tee'
        },
        {
          name: 'Anti-Expo Tee Grey',
          price: 88,
          picture: '/imgs/tees/FINISHED_ANTI_EXPO_TEE_FLAT_GREY.jpg',
          type: 'tee'
        },
        {
          name: 'LS Classic Tee Black',
          price: 108,
          picture: '/imgs/tees/LS_CLASSIC_MERCER_FLAT_BLACK.jpg',
          type: 'tee'
        },
        {
          name: 'LS Classic Tee White',
          price: 108,
          picture: '/imgs/tees/LS_CLASSIC_MERCER_FLAT_WHITE.jpg',
          type: 'tee'
        },
        {
          name: 'LS Classic Tee Red',
          price: 108,
          picture: '/imgs/tees/LS_CLASSIC_TEE_FLAT_RED.jpg',
          type: 'tee'
        },
        {
          name: 'Cotton Mercer Tee Black',
          price: 82,
          picture: '/imgs/tees/MERCER_TEE_FLAT_BLACK.jpg',
          type: 'tee'
        },
        {
          name: 'Cotton Mercer Tee Grey',
          price: 82,
          picture: '/imgs/tees/MERCER_TEE_FLAT_GREY_53468a53-076a-47e9-b2b5-1de25a9294e0.jpg',
          type: 'tee'
        }
      ],
      pants: [
        {
          name: 'Ebisu Sweatpants',
          price: 208,
          picture: '/imgs/pants/EBISU_SWEATPANTS_FLAT_DARK_GREY_NEW.jpg',
          type: 'pants'
        },
        {
          name: 'Escobar Sweatpants',
          price: 198,
          picture: '/imgs/pants/ESCOBAR_SWEATPANTS_FLAT_BLACK_NEW.jpg',
          type: 'pants'
        },
        {
          name: 'The Cast 2 Cairo',
          price: 428,
          picture: '/imgs/pants/THE_CAST_2_FLAT_CAIRO.jpg',
          type: 'pants'
        },
        {
          name: 'The Cast 2 Carbon',
          price: 370,
          picture: '/imgs/pants/THE_CAST_2_FLAT_CARBON.jpg',
          type: 'pants'
        },
        {
          name: 'The Cast 2 Crane',
          price: 428,
          picture: '/imgs/pants/THE_CAST_2_FLAT_CRANE.jpg',
          type: 'pants'
        },
        {
          name: 'The Cast 2 Hanoi',
          price: 468,
          picture: '/imgs/pants/THE_CAST_2_FLAT_HANOI.jpg',
          type: 'pants'
        },
        {
          name: 'The Cast 2 Masa Indigo',
          price: 528,
          picture: '/imgs/pants/THE_CAST_2_FLAT_MASA_INDIGO.jpg',
          type: 'pants'
        },
        {
          name: 'The Cast 2 Sahara',
          price: 468,
          picture: '/imgs/pants/THE_CAST_2_FLAT_SAHARA.jpg',
          type: 'pants'
        },
        {
          name: 'Vintage Sweatpants Army',
          price: 198,
          picture: '/imgs/pants/VINTAGE_SWEATPANTS_FLAT_ARMY.jpg',
          type: 'pants'
        },
        {
          name: 'Vintage Sweatpants Yellow',
          price: 198,
          picture: '/imgs/pants/VINTAGE_SWEATPANTS_FLAT_YELLOW.jpg',
          type: 'pants'
        }
      ],
      cartTotal: 0
    }
  }

  componentDidMount() {
    axios.get('http://localhost:8080/')
      .then((response) => {
        this.setState({
          cart: response.data.cart,
          cartTotal: response.data.cartTotal
        })
      }).catch((error) => {
        console.log(error)
      })
  }

  componentDidUpdate() {
    const { cart, cartTotal } = this.state
    axios.post('http://localhost:8080/', { cart, cartTotal })
      .then((response) => {
        console.log(response)
      }).catch((error) => {
        console.log(error)
      })
  }

  addToCart = (name, price, picture, type) => {
    const { cart, cartTotal } = this.state

    cart.push({
      name: name,
      price: price,
      picture: picture,
      type: type
    })

    this.setState({
      cart,
      cartTotal: cartTotal + price
    })
  }

  render() {
    const { match, username } = this.props
    const { 
      tees, 
      pants, 
      cart, 
      cartTotal 
    } = this.state
    return (
      <div>
        <nav>
          <div className="row main-nav">
            <div className="col s8 logo">
              <h1>JOHN ELLIOT</h1>
            </div>
            <div className="col s2 nav-links">
              <Link className="link-font" to="/">Home</Link> | <Link className="link-font" to="/shop">Shop</Link>
            </div>
            <div className="col s2 nav-links">
              <Link className="link-font" to={match.url + '/tees'}>Tees</Link> | <Link className="link-font" to={match.url + '/pants'}>Pants</Link>
            </div>
          </div>
        </nav>
        <div className="row main-section">
          <div className="col s3 shopping-cart">
            <h1 className="center-align welcome">Welcome {username}</h1>
            <Cart cart={cart} cartTotal={cartTotal}/>
          </div>
          <div className="col-9 item-container">
            <Switch>
              <Route
                path={match.url + '/tees'}
                render={routerProps => <Tees
                  {...routerProps}
                  tees={tees}
                  addToCart={this.addToCart}
                />}
              />
              <Route
                path={match.url + '/pants'}
                render={routerProps => <Pants
                  {...routerProps}
                  pants={pants}
                  addToCart={this.addToCart}
                />}
              />
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}

export default Shop;