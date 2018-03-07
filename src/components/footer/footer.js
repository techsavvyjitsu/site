import './footer.less';
import React, { Component } from 'react';
import Social from '../social';

class Footer extends Component {
  render() {
    return (  
      <footer className="footer footer-component">
        <div className="container">
          <p className="has-text-centered">
            <strong>Follow us on</strong>
            <Social showBrandName={false} />
          </p>
          <hr />
          <div className="content has-text-centered">
            <p>
              <strong>
                <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/channel/UCQHsDMLPAkQhXx26ofphqYQ">Tech Savvy Jitsu</a>
              </strong> is developed and maintained with <i className="fas fa-heart fa-lg" /> by <a rel="noopener noreferrer" target="_blank" href="https://github.com/hegdeashwin">Ashwin Hegde</a>.
            </p>
            <p>
              The source code is licensed
              <a target="_blank" href="http://opensource.org/licenses/mit-license.php" rel="noopener noreferrer"> MIT</a>. The website content
              is licensed <a target="_blank" href="http://creativecommons.org/licenses/by-nc-sa/4.0/" rel="noopener noreferrer">CC BY NC SA 4.0</a>.
            </p>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
