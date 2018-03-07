import './social.less';
import Socials from './socialData';
import React, { Component } from 'react';
import classnames from 'classnames';

class Social extends Component {
  render() {
    const {
      showBrandName,
      isButtonStyle
    } = this.props;

    return (
      <p className="field is-grouped social-component">
        {
          Socials.reference.map((social, index) => {

            let linkStyle = {
              'button': (isButtonStyle) ? true : false
            };

            let paraIconStyle = {
              'control': true,
              'icon-space':  (isButtonStyle) ? false : true
            };

            let iconStyle = {
              'fab': true,
              'fa-lg': true
            };
            
            linkStyle[social.brand] = true;
            linkStyle = classnames(linkStyle);
            
            paraIconStyle = classnames(paraIconStyle);
            
            iconStyle[`fa-${social.brand}`] = true;
            iconStyle = classnames(iconStyle);

            return (
              <span className={paraIconStyle} key={index}>
                <a className={linkStyle} rel="noopener noreferrer" 
                  data-social-network={social.brand} data-social-action={social.brand} 
                  data-social-target={social.linkTo} 
                  target="_blank" href={social.linkTo} title={social.title}>
                  <i className={iconStyle} /> { showBrandName && <span>{social.title}</span> }
                </a>
              </span>
            )
          })
        }
      </p>
    );
  }
}

export default Social;