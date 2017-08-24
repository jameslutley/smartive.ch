import React from 'react';
import PropTypes from 'prop-types';

import { getSiteHeader } from '../layouts';
import { Member, Stage } from '../components/molecules';
import { MediumTeaser } from '../components/organisms';

import team from '../data/team';

import teamStageSrc from '../data/team/thilo-peter-meeting.jpg';

const Agency = ({ data }) =>
  (<div>
    {getSiteHeader(
      'Agentur',
      'Wir sind ein junges, dynamisches Team, bestehend aus acht Leuten. Unser breit gestreutes Wissen in sämtlichen Webbereichen unterstützt Sie dabei, sich und Ihr Unternehmen weiterzuentwickeln.',
    )}
    <Stage
      modifiers={['gradient', 'right-highlighted']}
      image={{
        src: teamStageSrc,
        alt: 'Zwei smartive Mitarbeiter bei einer Besprechung',
      }}
      title={
        <h1>
          Creating a <em>smarter</em> web, together.
        </h1>
      }
    >
      <p>
        Wir sind ein junges, dynamisches Team, bestehend aus acht Leuten. Unser breit gestreutes
        Wissen in sämtlichen Webbereichen unterstützt Sie dabei, sich und Ihr Unternehmen
        weiterzuentwickeln.
      </p>
    </Stage>

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

    <MediumTeaser posts={data.allMediumPost} users={data.allMediumUser} />
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
