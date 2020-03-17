import React, { Component } from 'react'

export default class Header extends Component {
  state = {
    isOpen: false
  }

  render() {
    return (
      <div id="navigation">
        <nav>
          <h1>Start Bootstrap</h1>

          <ul className="desk-nav">
            <a href="#services"><li>Services</li></a>
            <a href="#portfolio"><li>Portfolio</li></a>
            <a href="#"><li>About</li></a>
            <a href="#"><li>Team</li></a>
            <a href="#"><li>Contact</li></a>
          </ul>
          
          <div className="mobile-nav-btn" onClick={() => this.setState({ isOpen: !this.state.isOpen })}>
            <p>Menu</p>
            <img className="mobile-nav-btn__ham" src="https://slack-imgs.com/?c=1&o1=ro&url=https%3A%2F%2Fi.ya-webdesign.com%2Fimages%2Fhamburger-menu-icon-png-white-6.png" alt=""/>
          </div>
        </nav>

        <menu className={this.state.isOpen ? "mobile-nav mobile-nav--open" : "mobile-nav" }>
          <ul className="mobile-nav--menu">
            <a href="#services"><li>Services</li></a>
            <a href="#portfolio"><li>Portfolio</li></a>
            <a href="#"><li>About</li></a>
            <a href="#"><li>Team</li></a>
            <a href="#"><li>Contact</li></a>
          </ul>
        </menu>
      </div>
    )
  }
}