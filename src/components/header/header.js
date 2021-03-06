import './header.less';
import React, { Component } from 'react';
import LOGO from '../../assets/imgs/logo.png';
import Social from '../social';

class Header extends Component {
  constructor(props) {
    super(props);

    this.toggleBurgerMenu = this.toggleBurgerMenu.bind(this);
  }

  toggleBurgerMenu() {
    // Get all "navbar-burger" elements
    var $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
  
    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {
  
      // Add a click event on each of them
      $navbarBurgers.forEach(function ($el) {
        $el.addEventListener('click', function () {
  
          // Get the target from the "data-target" attribute
          var target = $el.dataset.target;
          var $target = document.getElementById(target);

          // Toggle the class on both the "navbar-burger" and the "navbar-menu"
          $el.classList.toggle('is-active');
          $target.classList.toggle('is-active');
  
        });
      });
    }
  }

  componentWillMount() {
    document.addEventListener('DOMContentLoaded', this.toggleBurgerMenu);
  }

  componentWillUnmount() {
    document.removeEventListener('DOMContentLoaded', this.toggleBurgerMenu);
  }

  render() {
    return (  
      <nav className="navbar is-light header-component">
        <div className="container">
          <div className="navbar-brand">
            <a className="navbar-item" href="https://heuristic-jepsen-714902.netlify.com/#/">
              <img src={LOGO} alt="Tech Savvy Jitsu Logo" /> <strong>Tech Savvy Jitsu</strong>
            </a>
            <div className="navbar-burger burger" data-target="navMenuColordark">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>

          <div id="navMenuColordark" className="navbar-menu">
            <div className="navbar-end">
              <div className="navbar-item">
                <Social isButtonStyle={true} showBrandName={true} />
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;
