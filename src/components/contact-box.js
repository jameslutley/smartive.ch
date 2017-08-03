import React from 'react';
import PropTypes from 'prop-types';

const ContactBox = ({ image, address }) => (
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
            <div className="stage__description" dangerouslySetInnerHTML={{ __html: address }} />
            <a href="https://goo.gl/maps/qPMfmhUE4Xw" className="button button--primary">Zu Google Maps</a>
          </div>
        </div>
      </div>
    </div>
  </div>
);
ContactBox.propTypes = {
  image: PropTypes.shape({
    src: PropTypes.string,
    alt: PropTypes.string,
  }).isRequired,
  address: PropTypes.string.isRequired,
};

export default ContactBox;
