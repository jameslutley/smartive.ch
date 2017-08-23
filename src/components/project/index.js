import React from 'react';
import Link from 'gatsby-link';
import PropTypes from 'prop-types';

import { Button } from '../atoms';

const Project = ({ image, category, title, description, caseUrl }) =>
  (<div className="project col-xs-12 col-md-6">
    <img className="project__img" src={image.src} alt={image.alt} />
    <div className="project__text">
      <h2>
        <small>{category}</small> {title}
      </h2>

      <div dangerouslySetInnerHTML={{ __html: description }} />

      {caseUrl ? <Button url={caseUrl} text="Case anschauen" isPrimary /> : null}
    </div>
  </div>);
Project.propTypes = {
  image: PropTypes.shape({
    src: PropTypes.string,
    alt: PropTypes.string,
  }).isRequired,
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  caseUrl: PropTypes.string,
};
Project.defaultProps = {
  caseUrl: null,
};

export default Project;
