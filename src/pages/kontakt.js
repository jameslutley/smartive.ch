import React from 'react';
import PropTypes from 'prop-types';

import { Map, Stage } from '../components/molecules';
import { getSiteHeader } from '../layouts';

const Contact = ({ data }) => {
  const stageData = data.allStagesJson.edges[0].node;

  return (
    <div>
      {getSiteHeader(stageData.siteTitle, stageData.siteDescription)}

      <Stage
        modifiers={['left-highlighted', 'contact', 'gradient']}
        image={{
          src: stageData.imageSrc.childImageSharp.original.src,
          alt: stageData.imageAlt,
        }}
      >
        <h1>
          {stageData.contentBlocks.map(block =>
            <p key={block.id} dangerouslySetInnerHTML={{ __html: block.value }} />,
          )}
        </h1>
      </Stage>
      <Map />
    </div>
  );
};

Contact.propTypes = {
  data: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default Contact;

export const pageQuery = graphql`
query ContactQuery {
  allStagesJson(filter: {siteTitle: {eq: "Kontakt"}}) {
    edges {
      node {
        id
        siteTitle
        siteDescription
        title
        contentBlocks {
          id
          value
        }
        imageSrc {
          childImageSharp {
            original {
              src
            }
          }
        }
        imageAlt
      }
    }
  }
}
`;
