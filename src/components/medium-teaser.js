import React from 'react';
import PropTypes from 'prop-types';

const MediumTeaser = ({ backgroundImage, url, subline, title, lead }) => (
  <div className="blog-list">
    <div className="container">
      <div className="row">
        <div
          className="blog-teaser blog-teaser--image col-xs-12 col-lg-7"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        >
          <a className="blog-teaser__link" href={url} target="_blank">
            <div className="blog-teaser__content">
              <h2>
                <small>{subline}</small>
                {title}
              </h2>
              <p>{lead}</p>
            </div>
          </a>
        </div>

        <div className="blog-teaser col-xs-12 col-lg-5 first-lg">
          <div className="blog-teaser__content">
            <h2>
              <small>Medium</small>
              Wir sind jetzt auf Medium!
                        </h2>
            <p>
              Neu veröffentlichen wir unsere Artikel auf Medium.
              Folgen Sie unserer Publikation für die neuesten Updates.
            </p>
            <a
              href="https://blog.smartive.ch"
              target="_blank"
              rel="noopener noreferrer"
              className="button button--white"
            >
              zu Medium
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
);
MediumTeaser.propTypes = {
  backgroundImage: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  subline: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  lead: PropTypes.string.isRequired,
};

export default MediumTeaser;
