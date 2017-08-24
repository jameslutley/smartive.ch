import React from 'react';
import PropTypes from 'prop-types';

import { Button } from '../../atoms';
import './project.scss';

export const Project = ({ title, category, image, children, caseUrl }) =>
  (<div className="project col-xs-12 col-md-6">
    <img className="project__img" src={image.src} alt={image.alt} />
    <div className="project__text">
      <h2>
        <small>{category}</small> {title}
      </h2>

      {children}

      {caseUrl ? <Button url={caseUrl} text="Case anschauen" isPrimary /> : null}
    </div>
  </div>);

Project.propTypes = {
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  image: PropTypes.shape({
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
  }).isRequired,
  children: PropTypes.element.isRequired,
  caseUrl: PropTypes.string,
};

Project.defaultProps = {
  caseUrl: null,
};

export default Project;
