import React from 'react';
import PropTypes from 'prop-types';

import './text-block.scss';

export const TextBlock = ({ children }) => (
  <div className="text-block">
    <div className="row">
      <div className="col-xs-12 col-md-8 col-md-offset-2 col-lg-6 col-lg-offset-3">{children}</div>
    </div>
  </div>
);

export default TextBlock;

TextBlock.propTypes = {
  children: PropTypes.element.isRequired,
};
