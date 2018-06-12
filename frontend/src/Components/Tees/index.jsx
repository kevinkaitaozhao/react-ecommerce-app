import React, { Component } from 'react';
import './Tees.css'

class Tees extends Component {
  render() {
    const { tees, addToCart } = this.props

    let teesJSX = tees.map((tee, i) => {
      return (
        <TeeItem key={i} tee={tee} addToCart={addToCart} />
      )
    })

    return (
      <div>
        <div className="row">
          {teesJSX}
        </div>
      </div>
    );
  }
}

class TeeItem extends Component {
  handleClick = () => {
    const { tee, addToCart } = this.props

    addToCart(
      tee.name,
      tee.price,
      tee.picture,
      tee.type
    )
  }

  render() {
    const { tee } = this.props
    return (
      <div className="col s3">
        <img className="responsive-img" src={tee.picture} alt="tee" />
        <div className="row">
          <div className="col s9">
            <h2 className="item-name">{tee.name}</h2>
            <p className="item-price">{tee.price} USD</p>
          </div>
          <div className="col s3">
            <button onClick={this.handleClick}>+</button>
          </div>
        </div>
      </div>

    )
  }
}

export default Tees;