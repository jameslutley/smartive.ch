import React from 'react';
import PropTypes from 'prop-types';

import { Button, TextBlock } from '../components/atoms';
import { BlogTeaser, Stage } from '../components/molecules';

const GSA = ({ data }) => {
  const post = data.allMediumPost.edges[0].node;
  const stageData = data.allStagesJson.edges[0].node;

  return (
    <div>
      <Stage
        modifiers={['landing-page', 'left-highlighted']}
        image={{
          src: stageData.imageSrc.childImageSharp.original.src,
          alt: stageData.imageAlt,
        }}
        title={
          <h1 dangerouslySetInnerHTML={{ __html: stageData.title }} />
        }
      >
        <div>
          {stageData.contentBlocks.map(block =>
            <p key={block.id}>{block.value}</p>,
          )}
        </div>
      </Stage>

      <div className="container">
        <TextBlock>
          <p>
            Eine qualitativ hochwertige All-in-One Lösung, wie sie Google bisher angeboten hatte, ist schwer zu finden.
            Es existieren zahlreiche Tools zur Suche und Indexierung von Webseiten. Mit <strong>Apache Nutch</strong> als
            bewährtem Crawler zur Indexierung im Zusammenspiel mit <strong>Elasticsearch</strong> zur Volltextsuche
            haben wir zwei Open Source Systeme mit weiter Verbreitung gefunden, welche gut harmonieren und somit eine
            nahezu gleichwertige Alternative zur Google Suche bieten.
          </p>
        </TextBlock>
        <TextBlock>
          <p>
            Mit diesen Technologien werden Webseiten-Inhalte effizient gelesen, gespeichert und durchsucht. Von Google
            bekannte Funktionen wie «Meinten Sie ...?», Inhaltsunterscheidung nach Sprache oder auch Metadaten wie
            Social Media Bilder und Seitenbeschreibungen können einfach erreicht werden.
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
          <p>Thilo Haas hat einen technischen Blogbeitrag auf Medium zu dieser Thematik veröffentlicht:</p>
        </TextBlock>
      </div>

      <div className="blog-list">
        <div className="container">
          <div className="row">
            <BlogTeaser
              url={`https://blog.smartive.ch/${post.uniqueSlug}`}
              subline={post.author.name}
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
          uniqueSlug
          author {
            name
          }
          virtuals {
            subtitle
            previewImage {
              imageId
            }
          }
        }
      }
    }
    allStagesJson(filter: {siteTitle: {eq: "GSA"}}) {
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
