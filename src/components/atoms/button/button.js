import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';

import './button.scss';

const mod = modifier => ` button--${modifier}`;

export const Button = ({ url, text, isPrimary, isWhite, hasBorder }) => (
  <Link
    to={url}
    className={`button${isPrimary ? mod('primary') : ''}${isWhite ? mod('white') : ''}${hasBorder
      ? ' has-border'
      : ''}`}
  >
    {text}
  </Link>
);

export default Button;

Button.propTypes = {
  url: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  isPrimary: PropTypes.bool,
  isWhite: PropTypes.bool,
  hasBorder: PropTypes.bool,
};

Button.defaultProps = {
  isPrimary: false,
  isWhite: false,
  hasBorder: false,
};
