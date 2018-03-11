import React, { Component } from 'react';

class Hero extends Component {
  render() {
    return (  
      <section className="hero is-info is-large">
        <div className="hero-body">
          <div className="container has-text-centered">
            <p className="title">
              Title
            </p>
            <p className="subtitle">
              Subtitle
            </p>
          </div>
        </div>

        <div className="hero-foot">
          <nav className="tabs is-boxed is-fullwidth">
            <div className="container">
              <ul>
                <li className="is-active">
                  <a>Overview</a>
                </li>
                <li>
                  <a>Modifiers</a>
                </li>
                <li>
                  <a>Grid</a>
                </li>
                <li>
                  <a>Elements</a>
                </li>
                <li>
                  <a>Components</a>
                </li>
                <li>
                  <a>Layout</a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </section>
    );
  }
}

export default Hero;
