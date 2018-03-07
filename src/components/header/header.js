import './header.less';
import React, { Component } from 'react';
import LOGO from '../../assets/imgs/logo.png';
import Social from '../social';

class Header extends Component {
  render() {
    return (  
      <nav className="navbar is-light header-component">
        <div className="container">
          <div className="navbar-brand">
            <a className="navbar-item" href="https://techsavvyjitsu.github.io/site">
              <img src={LOGO} alt="Tech Savvy Jitsu Logo" />Tech Savvy Jitsu
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
                <Social showBrandName={true} />
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;
