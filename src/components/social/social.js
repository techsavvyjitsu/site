import './social.less';
import React, { Component } from 'react';

class Social extends Component {
  render() {
    const {
      showBrandName
    } = this.props;

    return (  
      <div class="field is-grouped social-component">
        <p className="control">
          <a className="twitter button" rel="noopener noreferrer" data-social-network="Twitter" data-social-action="tweet" data-social-target="https://twitter.com/techsavvyjitsu" target="_blank" href="https://twitter.com/techsavvyjitsu">
            <i className="fab fa-twitter fa-lg"></i> { showBrandName && <span>Follow us on Twitter</span> }
          </a>
        </p>
        <p className="control">
          <a className="youtube button" rel="noopener noreferrer" data-social-network="YouTube" data-social-action="youtube" data-social-target="https://www.youtube.com/channel/UCQHsDMLPAkQhXx26ofphqYQ" target="_blank" href="https://www.youtube.com/channel/UCQHsDMLPAkQhXx26ofphqYQ">
            <i className="fab fa-youtube fa-lg"></i> { showBrandName && <span>Subscribe to our YouTube channel</span> }
          </a>
        </p>
      </div>
    );
  }
}

export default Social;
