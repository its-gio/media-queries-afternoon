import React, { Component } from 'react'

export default class Header extends Component {
  state = {
    isOpen: false
  }

  render() {
    return (
      <div>
        <nav>
          <h1>Start Bootstrap</h1>

          <ul className="desk-nav">
            <li>Services</li>
            <li>Portfolio</li>
            <li>About</li>
            <li>Team</li>
            <li>Contact</li>
          </ul>
          
          <div className="mobile-nav-btn" onClick={() => this.setState({ isOpen: !this.state.isOpen })}>
            <p>Menu</p>
            <img className="mobile-nav-btn__ham" src="https://slack-imgs.com/?c=1&o1=ro&url=https%3A%2F%2Fi.ya-webdesign.com%2Fimages%2Fhamburger-menu-icon-png-white-6.png" alt=""/>
          </div>
        </nav>

        <menu className={this.state.isOpen ? "mobile-nav mobile-nav--open" : "mobile-nav" }>
          <ul className="mobile-nav--menu">
            <li>Services</li>
            <li>Portfolio</li>
            <li>About</li>
            <li>Team</li>
            <li>Contact</li>
          </ul>
        </menu>
      </div>
    )
  }
}