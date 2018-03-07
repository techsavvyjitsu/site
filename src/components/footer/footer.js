import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (  
      <footer class="footer footer-component">
        <div class="container">
          <div class="content has-text-centered">
            <p>
              <strong>Tech Savvy Jitsu</strong> is developed and maintained by <a rel="noopener noreferrer" target="_blank" href="https://github.com/hegdeashwin">Ashwin Hegde</a>.
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
