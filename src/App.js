import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        
        <nav className="navbar is-light">
          <div className="container">
            <div className="navbar-brand">
              <a className="navbar-item" href="https://techsavvyjitsu.github.io/site">
                Tech Savvy Jitsu
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
                  <div className="field is-grouped">
                    <p className="control">
                      <a className="twitter button" rel="noopener noreferrer" data-social-network="Twitter" data-social-action="tweet" data-social-target="https://twitter.com/techsavvyjitsu" target="_blank" href="https://twitter.com/techsavvyjitsu">
                        <i className="fab fa-twitter"></i> Twitter
                      </a>
                    </p>
                    <p className="control">
                      <a className="youtube button" rel="noopener noreferrer" data-social-network="YouTube" data-social-action="youtube" data-social-target="https://www.youtube.com/channel/UCQHsDMLPAkQhXx26ofphqYQ" target="_blank" href="https://www.youtube.com/channel/UCQHsDMLPAkQhXx26ofphqYQ">
                        <i className="fab fa-youtube"></i> YouTube
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>

        <section className="hero is-primary">
          <div className="hero-body">
            <div className="container">
              <h1 className="title">
                Primary title
              </h1>
              <h2 className="subtitle">
                Primary subtitle
              </h2>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="columns">
              <div className="column">
                <div className="card">
                  <div className="card-image">
                    <figure className="image">
                      <img src="http://via.placeholder.com/180x100" alt="Placeholder image" />
                    </figure>
                  </div>
                  <div className="card-content">
                    <div className="media">
                      <div className="media-left">
                        <figure className="image is-48x48">
                          <img src="http://via.placeholder.com/96x96" alt="Placeholder image" />
                        </figure>
                      </div>
                      <div className="media-content">
                        <p className="title is-4">John Smith</p>
                        <p className="subtitle is-6">@johnsmith</p>
                      </div>
                    </div>
        
                    <div className="content">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Phasellus nec iaculis mauris. <a>@bulmaio</a>.
                      <a href="#">#css</a> <a href="#">#responsive</a>
                      <br />
                      <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
                    </div>
                  </div>
                </div>
              </div>
              <div className="column">
                <div className="card">
                  <div className="card-image">
                    <figure className="image">
                      <img src="http://via.placeholder.com/180x100" alt="Placeholder image" />
                    </figure>
                  </div>
                  <div className="card-content">
                    <div className="media">
                      <div className="media-left">
                        <figure className="image is-48x48">
                          <img src="http://via.placeholder.com/96x96" alt="Placeholder image" />
                        </figure>
                      </div>
                      <div className="media-content">
                        <p className="title is-4">John Smith</p>
                        <p className="subtitle is-6">@johnsmith</p>
                      </div>
                    </div>
        
                    <div className="content">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Phasellus nec iaculis mauris. <a>@bulmaio</a>.
                      <a href="#">#css</a> <a href="#">#responsive</a>
                      <br />
                      <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
                    </div>
                  </div>
                </div>
              </div>
              <div className="column">
                <div className="card">
                  <div className="card-image">
                    <figure className="image">
                      <img src="http://via.placeholder.com/180x100" alt="Placeholder image" />
                    </figure>
                  </div>
                  <div className="card-content">
                    <div className="media">
                      <div className="media-left">
                        <figure className="image is-48x48">
                          <img src="http://via.placeholder.com/96x96" alt="Placeholder image" />
                        </figure>
                      </div>
                      <div className="media-content">
                        <p className="title is-4">John Smith</p>
                        <p className="subtitle is-6">@johnsmith</p>
                      </div>
                    </div>
        
                    <div className="content">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Phasellus nec iaculis mauris. <a>@bulmaio</a>.
                      <a href="#">#css</a> <a href="#">#responsive</a>
                      <br />
                      <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
                    </div>
                  </div>
                </div>
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
                    <img src="https://placehold.it/160x80" />
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
                    <img src="https://placehold.it/160x80" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer class="footer">
          <div class="container">
            <div class="content has-text-centered">
              <p>
                <strong>Tech Savvy Jitsu</strong> by <a href="https://github.com/hegdeashwin">Ashwin Hegde</a>.
              </p>
              <p>The source code is licensed
                <a href="http://opensource.org/licenses/mit-license.php"> MIT</a>. The website content
                is licensed <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY NC SA 4.0</a>.
              </p>
            </div>
          </div>
        </footer>

      </div>
    );
  }
}

export default App;
