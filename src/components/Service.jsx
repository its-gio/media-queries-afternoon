import React, { Component } from 'react';
import * as FontAwesome from 'react-icons/fa'

export default class Service extends Component {
  render() {
    return (
      <section id="services" className="section">
        <div className="section-title">
          <h3>Services</h3>
          <p>Lorem ipsum dolor sit amet consectetur.</p>
        </div>

        <div className="services-grid">
          <div className="services-grid--item">
            <div className="services-grid--item__icon-container">
              <FontAwesome.FaShoppingCart className="ShoppingCart" />
            </div>
            <h4>E-Commerce</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
          </div>
          
          <div className="services-grid--item">
            <div className="services-grid--item__icon-container">
              <FontAwesome.FaLaptop className="Laptop" />
            </div>
            <h4>Responsive Design</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
          </div>

          <div className="services-grid--item">
            <div className="services-grid--item__icon-container">
              <FontAwesome.FaLock className="Lock" />
            </div>
            <h4>Web Security</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
          </div>
        </div>
      </section>
    )
  }
}
