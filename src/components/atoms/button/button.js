import React from 'react';
import PropTypes from 'prop-types';

import Link from 'gatsby-Link';

import './button.scss';

export const Button = ({ url, text, isPrimary }) =>
  (<Link to={url} className={`button${isPrimary ? ' button--primary' : ''}`}>
    {text}
  </Link>);

Button.propTypes = {
  url: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  isPrimary: PropTypes.bool,
};

Button.defaultProps = {
  isPrimary: false,
};

export default Button;
