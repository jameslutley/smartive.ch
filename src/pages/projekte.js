import React from 'react';
import PropTypes from 'prop-types';
import { CaseTeaser, Project, Stage } from '../components/molecules';
import { getSiteHeader } from '../layouts';

import caseImage from '../data/cases/migros-filialfinder/case-study-migros.png';
import workImage from '../data/work.png';

const Projects = ({ data }) =>
  (<div>
    {getSiteHeader(
      'Projekte',
      'Wir lieben es, unsere Erfahrungen und unser Wissen mit Ihnen zu teilen und schrecken nicht vor anspruchsvollen Aufgaben innerhalb der Umsetzung ehrgeiziger Projekte zurück.',
    )}

    <Stage
      modifiers={['gradient']}
      image={{
        src: workImage,
        alt: 'Unsere Kunden',
      }}
      title={
        <h1>
          Let&apos;s <em>do</em> it!
        </h1>
      }
    >
      <p>
        In enger Zusammenarbeit mit unseren Kundinnen und Kunden entwickeln wir lösungsorientierte
        Systeme mit viel Liebe zum Detail. Wir setzen dabei auf innovative Technologien wie Node.js,
        Angular, React, D3.js, Symfony, Docker und Elasticsearch, wobei wir auf Qualität viel Wert
        legen. Diese stellen wir mittels gegenseitiger Code Reviews sowie Unit- und Functional
        Testings, zusammen mit Continuous Integration, sicher.
      </p>
    </Stage>

    <CaseTeaser
      url="/cases/migros-filialfinder"
      title="Auf der Suche nach der nächsten Migros Filiale"
      subline="Case"
      image={{
        src: caseImage,
        alt: 'Auf der Suche nach der nächsten Migros Filiale',
      }}
    >
      <p>
        Für den grössten Schweizer Detailhändler, den Migros-Genossenschafts-Bund, haben wir den
        neuen Filialfinder umgesetzt.
      </p>
    </CaseTeaser>

    <div className="project-list">
      <div className="container">
        <div className="row">
          {data.allProjectsJson.edges.map(({ node }) =>
            (<Project
              key={node.title}
              title={node.title}
              category={node.category}
              image={{
                src: node.image.childImageSharp.original.src,
                alt: node.title,
              }}
              caseUrl={node.caseUrl}
            >
              <p dangerouslySetInnerHTML={{ __html: node.description }} />
            </Project>),
          )}
        </div>
      </div>
    </div>
  </div>);

Projects.propTypes = {
  data: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default Projects;

export const pageQuery = graphql`
query ProjectsQuery {
  allProjectsJson {
    edges {
      node {
        title
        category
        description
        image {
          childImageSharp {
            original {
              src
            }
          }
        }
        caseUrl
      }
    }
  }
}
`;
