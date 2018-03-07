import React, { Component } from 'react';

class Card extends Component {
  render() {
    return (  
      <div className="card card-component">
        <div className="card-image">
          <figure className="image">
            <img src="http://via.placeholder.com/180x100" alt="180x100" />
          </figure>
        </div>
        <div className="card-content">
          <div className="media">
            <div className="media-left">
              <figure className="image is-48x48">
                <img src="http://via.placeholder.com/96x96" alt="96x96" />
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
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
