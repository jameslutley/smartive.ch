import React from 'react';
import Link from 'gatsby-link';
import PropTypes from 'prop-types';

const Service = ({ title, catchline, lead, body, image, linkedCase }) =>
  (<div className="service col-xs-12 col-lg-6">
    <div className="service__content">
      <div className="service__image">
        <img src={image.src} alt={image.alt} />
      </div>
      <h2>
        <small className="service__catchline">{catchline}</small>
        {title}
      </h2>
      <p className="service__lead">{lead}</p>
      <div className="service__body" dangerouslySetInnerHTML={{ __html: body }} />
      <div className="service__actions">
        {linkedCase ?
          <Link to={linkedCase.url} className="button button--primary">
            Case {linkedCase.title}
          </Link>
        : null}
        <Link to="/projekte" className="button button--white has-border">alle Projekte</Link>
      </div>
    </div>
  </div>);
Service.propTypes = {
  image: PropTypes.shape({
    src: PropTypes.string,
    alt: PropTypes.string,
  }).isRequired,
  title: PropTypes.string.isRequired,
  catchline: PropTypes.string.isRequired,
  lead: PropTypes.string,
  body: PropTypes.string.isRequired,
  linkedCase: PropTypes.shape({
    url: PropTypes.string,
    title: PropTypes.string,
  }),
};
Service.defaultProps = {
  linkedCase: null,
  lead: '',
};

export default Service;
