import React, { Component } from 'react';
import './Cart.css'

class Cart extends Component {
  render() {
    const { cart, cartTotal } = this.props

    let cartJSX = cart.map((cartItem) => {
      return (
        <div className="row cart-border">
          <div className="col s12">
            <div className="row">
              <div className="col s4">
                <img className="responsive-img" src={cartItem.picture} alt="cart-item" />
              </div>
              <div className="col s8">
                <h2 className="cart-item">{cartItem.name}</h2>
                <p className="cart-price">{cartItem.price} USD</p>
              </div>
            </div>
          </div>
        </div>
      )
    })
    return (
      <div>
        <h1 className="center-align">Shopping Cart</h1>
        {cartJSX}
        <h1 className="center-align">Total: {cartTotal} USD</h1>
      </div>
    );
  }
}

export default Cart;