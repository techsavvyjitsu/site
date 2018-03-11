// Package
import React, { Component } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

class Icon extends Component {
  render() {
    const {
      name,
      size
    } = this.props;

    let iconStyle = {
      'fab': true
    };

    iconStyle[`fa-${size}`] = true;

    if (name) {
      iconStyle[`fa-${name}`] = true;
    }

    iconStyle = classnames(iconStyle);

    return (
      <i className={iconStyle}></i>
    );
  }
}

Icon.defaultProps = {
  size: 'lg'
};

Icon.propTypes = {
  name: PropTypes.string,
  size: PropTypes.oneOf(['xs', 'sm', 'lg', '2x', '3x', '5x', '7x', '10x']),
};

export default Icon;