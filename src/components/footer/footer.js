import './footer.less';
import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (  
      <footer className="footer footer-component">
        <div className="container">
          <hr />
          <div className="content has-text-centered">
            <div>
              <strong>
                <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/channel/UCQHsDMLPAkQhXx26ofphqYQ">Tech Savvy Jitsu</a>
              </strong> is developed and maintained with <i className="fas fa-heart fa-lg" /> by <a href="profile">Ashwin Hegde</a>.
            </div>
            <div>
              The source code is licensed
              <a target="_blank" href="http://opensource.org/licenses/mit-license.php" rel="noopener noreferrer"> MIT</a>. The website content
              is licensed <a target="_blank" href="http://creativecommons.org/licenses/by-nc-sa/4.0/" rel="noopener noreferrer">CC BY NC SA 4.0</a>.
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
