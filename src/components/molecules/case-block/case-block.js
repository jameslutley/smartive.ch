import React from 'react';
import PropTypes from 'prop-types';

import './case-block.scss';

export const CaseBlock = ({ title, subtitle, children, graphic }) =>
  (<div className="container">
    <div className="case-block">
      <div className="row">
        <div className="col-xs-12 col-lg-4">
          <div className="case-block__content">
            <h2>
              {title}
            </h2>
            <h3>
              {subtitle}
            </h3>
            {children}
          </div>
        </div>
        <div className="col-xs-12 col-lg-8 case-block__col-img">
          {graphic}
        </div>
      </div>
    </div>
  </div>);

CaseBlock.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  graphic: PropTypes.element,
};

CaseBlock.defaultProps = {
  graphic: null,
};

export default CaseBlock;
