import React from 'react';
import PropTypes from 'prop-types';

import './stage.scss';

export const Stage = ({ title, image, children, modifiers }) =>
  (<div className={modifiers.map(modifier => `stage--${modifier}`).join(' ')}>
    <div className="stage">
      <div className="container container--stage">
        <div className="row">
          <div className="stage__col--img col-xs-12 col-lg-6">
            <div className="img-container">
              <img className="teaser-image" src={image.src} alt={image.alt} />
            </div>
          </div>
          <div className="stage__col--body col-xs-12 col-lg-6">
            <div className="stage__text">
              {title}

              {children
                ? <div className="stage__description">
                  {children}
                </div>
                : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>);

Stage.propTypes = {
  modifiers: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.element,
  image: PropTypes.shape({
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
  }).isRequired,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]),
};

Stage.defaultProps = {
  modifiers: [],
  title: null,
  children: null,
};

export default Stage;
