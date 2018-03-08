import React, { Component } from 'react';

class Hero extends Component {
  render() {
    return (  
      <section class="hero is-info is-large">
        <div class="hero-body">
          <div class="container has-text-centered">
            <p class="title">
              Title
            </p>
            <p class="subtitle">
              Subtitle
            </p>
          </div>
        </div>

        <div class="hero-foot">
          <nav class="tabs is-boxed is-fullwidth">
            <div class="container">
              <ul>
                <li class="is-active">
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
