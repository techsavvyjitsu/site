// Packages
import React, { Component } from 'react';

// Components
import Hero from '../../components/hero';
import Card from '../../components/card';

class Home extends Component {
  render() {
    return (  
      <section className="home-component">
        <Hero />
        
        <section className="section">
          <div className="container">
            <div className="columns">
              <div className="column">
                <Card />
              </div>
              <div className="column">
                <Card />
              </div>
              <div className="column">
                <Card />
              </div>
            </div>
          </div>
        </section>

        <section className="hero is-light">
          <div className="hero-body">
            <div className="container">
              <div className="columns">
                <div className="column is-half">
                  <div className="image is-2by1">
                    <img src="https://placehold.it/160x80" alt="160x80" />
                  </div>
                </div>
                <div className="column is-one-third is-offset-1">
                  <h1 className="title">hello world</h1>
                  <h2 className="subtitle">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
                  </h2>
                  <p>
                    <button className="button is-primary">Get started</button>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="hero is-dark">
          <div className="hero-body">
            <div className="container">
              <div className="columns">
                <div className="column is-one-third is-offset-1">
                  <h1 className="title">hello world</h1>
                  <h2 className="subtitle">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
                  </h2>
                  <p>
                    <button className="button is-primary">Get started</button>
                  </p>
                </div>
                <div className="column is-half">
                  <div className="image is-2by1">
                    <img src="https://placehold.it/160x80" alt="160x80" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    );
  }
}

export default Home;
