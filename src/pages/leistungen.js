import React from 'react';
import PropTypes from 'prop-types';
import { Service, Stage } from '../components/molecules';
import { getSiteHeader } from '../layouts';

import servicesImage from '../data/services.jpg';

const Services = ({ data }) =>
  (<div>
    {getSiteHeader(
      'Projekte',
      'Wir lieben es, unsere Erfahrungen und unser Wissen mit Ihnen zu teilen und schrecken nicht vor anspruchsvollen Aufgaben innerhalb der Umsetzung ehrgeiziger Projekte zurück.',
    )}
    <Stage
      modifiers={['left-highlighted', 'gradient']}
      image={{
        src: servicesImage,
        alt: 'Zwei smartive Mitarbeiter bei einer Besprechung',
      }}
      title={
        <h1>
          <em>Digital</em> by default.
        </h1>
      }
    >
      <div>
        <p>
          Wir schätzen uns glücklich, im Zeitalter des Internets aufgewachsen zu sein und so dessen
          Entwicklung selbst mitverfolgt und im kleinen Rahmen mitgestaltet zu haben. Wir glauben an
          das Potenzial, welches das Web für unsere Kundinnnen und Kunden mit sich bringt.
        </p>
        <p>
          Als Digital Natives teilen wir uns alle bei smartive unsere Passion für die Entwicklung
          von Webapplikationen unter Einsatz angesagter Technologien — sowohl am Arbeitsplatz, als
          auch in unserer Freizeit.
        </p>
        <p>
          Wir lieben es, unsere Erfahrungen und unser Wissen mit Ihnen zu teilen und schrecken nicht
          vor anspruchsvollen Aufgaben innerhalb der Umsetzung ehrgeiziger Projekte zurück.
        </p>
      </div>
    </Stage>
    <div className="container">
      <div className="row">
        {data.allServicesJson.edges.map(({ node }) =>
          (<Service
            key={node.title}
            title={node.title}
            catchline={node.catchline}
            lead={node.lead}
            image={{
              src: node.image.childImageSharp.original.src,
              alt: node.title,
            }}
            linkedCase={node.linkedCase}
          >
            <div dangerouslySetInnerHTML={{ __html: node.body }} />
          </Service>),
        )}
      </div>
    </div>
  </div>);

Services.propTypes = {
  data: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default Services;

export const pageQuery = graphql`
query ServicesQuery {
  allServicesJson {
    edges {
      node {
        title
        catchline
        lead
        body
        image {
          childImageSharp {
            original {
              src
            }
          }
        }
        linkedCase {
          url
          title
        }
      }
    }
  }
}
`;
