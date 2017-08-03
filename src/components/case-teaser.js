import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';

const CaseTeaser = ({ url, title, subline, image, body }) => (
  <div className="case-teaser">
    <div className="container container--case">
      <div className="row">
        <div className="case-teaser__col--img col-xs-12 col-lg-7 last-lg">
          <figure>
            <Link to={url}>
              <img className="case-image" src={image.src} alt={image.alt} />
            </Link>
          </figure>
        </div>
        <div className="case-teaser__col--body col-xs-12 col-lg-5 first-lg">
          <div className="case-teaser__text">
            <h2>
              <small>{subline}</small>
              {title}
            </h2>

            <div
              className="case-teaser__body"
              dangerouslySetInnerHTML={{ __html: body }}
            />
            <div className="case-teaser__actions">
              <Link to={url} className="button button--primary">Case anschauen</Link>
              <Link to="/arbeiten" className="button">alle unsere Arbeiten</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
CaseTeaser.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subline: PropTypes.string.isRequired,
  image: PropTypes.shape({
    src: PropTypes.string,
    alt: PropTypes.string,
  }).isRequired,
  body: PropTypes.string.isRequired,
};

export default CaseTeaser;
