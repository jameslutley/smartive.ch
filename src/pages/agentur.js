import React from 'react';
import PropTypes from 'prop-types';
import Stage from '../components/stage';
import MediumTeasers from '../components/medium-teasers';
import { getSiteHeader } from '../layouts';
import { Member } from '../components/molecules';

import team from '../data/team';

import teamStageSrc from '../data/team/thilo-peter-meeting.jpg';

const Agency = ({ data }) =>
  (<div>
    {getSiteHeader(
      'Agentur',
      'Wir sind ein junges, dynamisches Team, bestehend aus acht Leuten. Unser breit gestreutes Wissen in sämtlichen Webbereichen unterstützt Sie dabei, sich und Ihr Unternehmen weiterzuentwickeln.',
    )}
    <div className="stage--gradient stage--right-highlighted">
      <Stage
        image={{
          src: teamStageSrc,
          alt: 'Zwei smartive Mitarbeiter bei einer Besprechung',
        }}
        title="Creating a <em>smarter</em> web, together."
        description="Wir sind ein junges, dynamisches Team, bestehend aus acht Leuten. Unser breit gestreutes Wissen in sämtlichen Webbereichen unterstützt Sie dabei, sich und Ihr Unternehmen weiterzuentwickeln."
      />
    </div>

    <div className="container">
      <div className="row">
        {team.map(member =>
          (<Member
            key={member.name}
            name={member.name}
            job={member.job}
            image={{
              src: member.img,
              alt: member.name,
            }}
            education={member.education}
            links={member.links}
          >
            <p dangerouslySetInnerHTML={{ __html: member.description }} />
          </Member>),
        )}
      </div>
    </div>

    <MediumTeasers posts={data.allMediumPost} users={data.allMediumUser} />
  </div>);

Agency.propTypes = {
  data: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default Agency;

export const pageQuery = graphql`
  query AgencyQuery {
    allMediumPost(limit: 2, sort: { fields: [createdAt], order: DESC }) {
      edges {
        node {
          title
          creatorId
          slug
          uniqueSlug
          virtuals {
            subtitle
            previewImage {
              imageId
            }
          }
        }
      }
    }
    allMediumUser {
      edges {
        node {
          id
          name
        }
      }
    }
  }
`;
