import React, { Component } from 'react';
import './Pants.css'

class Pants extends Component {
  render() {
    const { pants, addToCart } = this.props
    let pantsJSX = pants.map((pant, i) => {
      return (
        <PantItem key={i} pant={pant} addToCart={addToCart} />
      )
    })
    return (
      <div>
        <div className="row">
          {pantsJSX}
        </div>
      </div>
    );
  }
}

class PantItem extends Component {
  handleClick = () => {
    const { pant, addToCart } = this.props

    addToCart(
      pant.name,
      pant.price,
      pant.picture,
      pant.type
    )
  }

  render() {
    const { pant } = this.props
    return (
      <div className="col s3">
        <img className="responsive-img" src={pant.picture} alt="pants" />
        <div className="row">
          <div className="col s9">
            <h2 className="item-name">{pant.name}</h2>
            <p className="item-price">{pant.price} USD</p>
          </div>
          <div className="col s3">
            <button className="right-align" onClick={this.handleClick}>+</button>
          </div>
        </div>
      </div>
    )
  }
}

export default Pants;

