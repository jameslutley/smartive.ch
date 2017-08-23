import React from 'react';
import PropTypes from 'prop-types';
import Stage from '../components/stage';
import Teaser from '../components/teaser';
import { CaseTeaser } from '../components/molecules';
import MediumTeasers from '../components/medium-teasers';

import caseImage from '../data/cases/migros-filialfinder/case-study-migros.png';
import homeImage from '../data/home.jpg';

const teasers = [
  {
    title: 'Die akkurate Daten­aufbereitung.',
    subline: 'API-Entwicklung',
    description:
      'Machen Sie das Beste aus Ihren Daten. Wir aggregieren und vereinheitlichen Ihre Systeme und machen sie so zu einer standardisierten Schnittstelle für die Verwendung im Web.',
  },
  {
    title: 'Eine grossartige Präsen­tation.',
    subline: 'Webapplikationen',
    description:
      'Da wir mit massgeschneiderten Applikationen, CRMs und interaktiven Visualisierungen arbeiten, können wir Ihnen genau die Lösung anbieten, die vollkommen an Ihre Bedürfnisse angepasst ist.',
  },
  {
    title: 'Mit kompetenter Unter­stützung.',
    subline: 'Konzeption und Beratung',
    description:
      'Profitieren Sie von unseren fundierten Ausbildungen und von unserer langjährigen Erfahrung. Wir unterstützen Sie in der Konzeption und der Umsetzung und begleiten Ihr Projekt von Ihrer ersten Idee bis zur fertigen Umsetzung im Web.',
  },
];

const Index = ({ data }) =>
  (<div>
    <div className="stage--left-highlighted stage--landing-page">
      <Stage
        image={{
          src: homeImage,
          alt: 'Zwei smartive Mitarbeiter bei einer Besprechung',
        }}
        title={'Zukunfts­weisende <em>Web­applikationen</em> für anspruchs­volle Unternehmen.'}
        description="Wir sind smartive — eine dynamische, innovative Schweizer Webentwicklungsagentur. Die Realisierung zeitgemässer Weblösungen gehört genauso zu unserer Passion, wie die konstruktive Zusammenarbeit mit unseren Kundinnen und Kunden. Gerne begleiten wir Sie von der ersten Idee über die Konzeption bis hin zur Umsetzung."
      />
    </div>
    <div className="teaser-list">
      <div className="container">
        <div className="row center-sm left-lg">
          {teasers.map(teaser => <Teaser key={teaser.title} title={teaser.title} subline={teaser.subline} description={teaser.description} />)}
        </div>
      </div>
    </div>
    <CaseTeaser
      url="/cases/migros-filialfinder"
      title="Auf der Suche nach der nächsten Migros Filiale"
      subline="Case"
      image={{
        src: caseImage,
        alt: 'Auf der Suche nach der nächsten Migros Filiale',
      }}
      allProjects
    >
      <p>Für den grössten Schweizer Detailhändler, den Migros-Genossenschafts-Bund, haben wir den neuen Filialfinder umgesetzt.</p>
    </CaseTeaser>

    <MediumTeasers posts={data.allMediumPost} users={data.allMediumUser} />
  </div>);
Index.propTypes = {
  data: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default Index;

export const pageQuery = graphql`
  query IndexQuery {
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
