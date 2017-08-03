import React from 'react';
import PropTypes from 'prop-types';

const Teaser = ({ title, subline, description }) => (
  <div className="teaser col-xs-12 col-sm-6 col-lg-4">
    <div className="teaser__content">
      <h2>
        <small>{subline}</small>
        {title}
      </h2>

      <div className="description">
        <p dangerouslySetInnerHTML={{ __html: description }} />
      </div>
    </div>
  </div>
);
Teaser.propTypes = {
  title: PropTypes.string.isRequired,
  subline: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Teaser;
