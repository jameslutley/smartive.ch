import React from 'react';
import PropTypes from 'prop-types';

const TeamMember = ({ image, job, name, description, education, links }) =>
  (<div className="member col-xs-12 col-md-6 col-lg-4">
    <img className="member__portrait" src={image.src} alt={image.alt} />
    <div className="member__text">
      <h2>
        <small>{job}</small> {name}
      </h2>
      <h3>
        {education}
      </h3>
      <p dangerouslySetInnerHTML={{ __html: description }} />
      <p>
        {links
          .map(link =>
            (<a key={link.url} href={link.url}>
              {link.text}
            </a>),
          )
          .reduce((pre, cur) => [pre, ', ', cur])}
      </p>
    </div>
  </div>);

TeamMember.propTypes = {
  image: PropTypes.shape({
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
  }).isRequired,
  job: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  education: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  links: PropTypes.arrayOf(PropTypes.shape({ url: PropTypes.string.isRequired, text: PropTypes.string.isRequired })).isRequired,
};

export default TeamMember;
