import React from 'react';
import PropTypes from 'prop-types';

import { Button, TextBlock } from '../components/atoms';
import { BlogTeaser, Stage } from '../components/molecules';

import stageImage from '../data/laptop-sitzsack.jpg';

const GSA = ({ data }) => {
  const post = data.allMediumPost.edges[0].node;
  const user = data.allMediumUser.edges[0].node;

  return (
    <div>
      <Stage
        modifiers={['landing-page', 'left-highlighted']}
        image={{
          src: stageImage,
          alt: 'Mitarbeiter an einem Laptop, drei Zimmerpflanzen im Hintergrund',
        }}
        title={
          <h1>
            <em>Auf der Suche</em> nach einer Alternative zu GSA?
          </h1>
        }
      >
        <div>
          <p>
            Google stellt die Suchdienste GSA und GSS ein. Daher machten wir uns für unsere Kunden auf die Suche nach
            einer Alternative. Dabei entschieden wir uns für eine Auswahl an Open Source Tools für die Datenbeschaffung,
            die Indizierung der Daten und die Suche an sich.
          </p>
          <p>
            Dieses Setup unterstützt auch die Verwendung von dynamischen JavaScript-Inhalten, mehrsprachigen Webseiten
            und die Verwendung von Mikroformaten.
          </p>
        </div>
      </Stage>

      <div className="container">
        <TextBlock>
          <p>
            Eine qualitativ hochwertige All-in-One Lösung, wie von Google zur Verfügung gestellt, ist schwer zu finden.
            <strong> Apache Nutch</strong> spielt mit <strong>Elasticsearch</strong> sehr gut zusammen und bietet eine
            gleichwertige Alternative zu Google.
          </p>
        </TextBlock>
        <TextBlock>
          <p>
            Mit diesen Technologien werden Webseiten-Inhalte effizient gelesen, gespeichert und durchsucht. Von Google
            bekannte Funktionen wie «Meinten Sie ...?», Inhaltsunterscheidung nach Sprache oder auch Metadaten können
            einfach erreicht werden.
          </p>
        </TextBlock>
        <TextBlock>
          <p>
            Wenn Sie auf der Suche nach einer guten Alternative zu Ihrer aktuellen GSA Lösung sind, beraten wir Sie
            gerne über Ihre Möglichkeiten und helfen Ihnen bei einer zeitnahen Ablösung.
          </p>
        </TextBlock>
        <TextBlock>
          <p>
            <Button url="/kontakt" text="Kontakt aufnehmen" isPrimary />
          </p>
        </TextBlock>
        <TextBlock>
          <p>Thilo Haas hat einem technischen Blogbeitrag auf Medium zu dieser Thematik veröffentlicht:</p>
        </TextBlock>
      </div>

      <div className="blog-list">
        <div className="container">
          <div className="row">
            <BlogTeaser
              url={`https://blog.smartive.ch/${post.uniqueSlug}`}
              subline={user.name}
              title={post.title}
              lead={post.virtuals.subtitle}
              img={`https://cdn-images-1.medium.com/max/1200/${post.virtuals.previewImage.imageId}`}
            />
            <BlogTeaser
              url="https://github.com/smartive/docker-nutch-elasticsearch-mongodb/"
              subline="smartive auf GitHub"
              title="Unser Hackday Ergebnis"
              lead="An einem Hackday hat unser Team die beschriebene Lösung auf Herz und Nieren geprüft. Daraus resultierte ein Docker Image mit Apache Nutch, Elasticsearch und MongoDB, welches wir auf GitHub veröffentlicht haben."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GSA;

GSA.propTypes = {
  data: PropTypes.objectOf(PropTypes.object).isRequired,
};

export const pageQuery = graphql`
  query GSAQuery {
    allMediumPost(limit: 1, filter: { id: { eq: "813838691a2" } }) {
      edges {
        node {
          id
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
    allMediumUser(limit: 1, filter: { id: { eq: "e6cb4e49f496" } }) {
      edges {
        node {
          id
          name
        }
      }
    }
  }
`;
