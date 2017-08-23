import React from 'react';

import Stage from '../../components/stage';
import { CaseBlock, Facts } from '../../components/molecules';

import stageImg from '../../data/cases/migros-filialfinder/case-study-migros.png';
import aggregationImg from '../../data/cases/migros-filialfinder/data-aggregation.png';
import frontendImg from '../../data/cases/migros-filialfinder/filialfinder-frontend.png';
import chartImg from '../../data/cases/migros-filialfinder/chart.png';

const MigrosFilialfinderCase = () =>
  (<div>
    <div className="stage--gradient stage--case">
      <Stage
        image={{
          src: stageImg,
          alt: 'Migros Logo auf einem Laptop',
        }}
        title="Auf der Suche nach der nächsten <em>Migros-Filiale</em>."
        descriptionHtml="<p>Für den grössten Schweizer Detailhändler, den Migros-Genossenschafts-Bund, haben wir den neuen Filialfinder umgesetzt. Ziel war es, eine responsive und ansprechende Lösung zu entwickeln, die es dem Kunden erlaubt, zu Hause oder unterwegs für ihn interessante Informationen zu Filialen in der Nähe schnell und einfach abrufen zu können.</p><ul><li>Elasticsearch</li><li>Varnish</li><li>SEO</li><li>BackboneJS</li><li>Symfony2</li><li>Google Maps mit Clustering</li></ul>"
      />
    </div>

    <div className="container">
      <Facts title="Facts & Figures">
        <ul>
          <li>Mehr als 1000 Filialen aggregiert aus 3 unterschiedlichen Datensystemen</li>
          <li>
            {'Suche in < 0.2 Sekunden'}
          </li>
          <li>Über 33 Filtermöglichkeiten in 3 Sprachen</li>
          <li>5 angebundene APIs</li>
        </ul>
      </Facts>
    </div>

    <CaseBlock
      title="Welche Daten?"
      subtitle="Aggregation und Vereinheitlichung im Backend!"
      graphic={
        <picture>
          <img className="case-img" src={aggregationImg} alt="Infografik Datenaggregation" />
        </picture>
      }
    >
      <p>
        Um die Daten und Suchabfragen zu optimieren werden die Filialdaten über eine performante Web-Schnittstelle, basierend auf Elasticsearch und
        Node.js, ausgeliefert.
      </p>
      <p>
        Die Schnittstelle aggregiert und vereinheitlicht Filialdaten aus dem SAP, der Migros-API und weiteren Drittsystemen. Alle relevanten
        Informationen einer Filiale sind dadurch durchsuchbar und die Resultate können effizient über eine JSON REST Schnittstelle ausgespielt werden.
        Um die Latenz der Schnittstelle zu verringern wird die API über Varnish gecached und ausgeliefert.
      </p>
    </CaseBlock>

    <CaseBlock
      title="Warum Elasticsearch und Varnish?"
      subtitle="Dynamik und Speed - das Beste von beiden!"
      graphic={
        <picture>
          <img src={chartImg} alt="Performance Vergleich zwischen alt und neu" className="case-img" />{' '}
        </picture>
      }
    >
      <p>
        Durch diese Kombination erreichten wir eine um bis zu 26x schnellere Auslieferung der Daten und eine Verbesserung der Volltextsuche zusammen
        mit Location-based Search mit Geocoding durch Google.
      </p>
      <p>
        Die Erweiterbarkeit und Dynamik der state-of-the-art Suche Elasticsearch, gepaart mit der blitzschnellen Auslieferung durch Varnish ist die
        perfekte Kombination!
      </p>
    </CaseBlock>

    <CaseBlock
      title="Nicht nur Suchen"
      subtitle="sondern Finden!"
      graphic={
        <picture className="is-highlighted">
          <img src={frontendImg} alt="Frontend Screenshot" className="case-img" />
        </picture>
      }
    >
      <p>
        Durch einen starken Fokus auf Suchmaschinenoptimierung (SEO) können auch alle Filialen bei Suchmaschinen inklusive deren Öffnungszeiten
        gefunden werden.
      </p>
      <p>
        Alle Filialinformationen sind als strukturierte Daten mit dem Linked Data Web verknüpft und unterstützen somit die Auffindbarkeit und
        Interpretation durch Suchmaschinen.
      </p>
    </CaseBlock>
  </div>);

export default MigrosFilialfinderCase;
