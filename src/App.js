import React, { Component } from 'react';
import './App.css';

import Header from './components/header';
import Footer from './components/footer';
import Hero from './components/hero';
import Card from './components/card';

class App extends Component {
  render() {
    return (
      <div className="App">
        
        <Header />
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

        <Footer />

      </div>
    );
  }
}

export default App;
