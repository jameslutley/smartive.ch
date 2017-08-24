import React from 'react';
import Stage from '../components/stage';
import Project from '../components/project';
import projects from '../data/projects';
import CaseTeaser from '../components/case-teaser';
import { getSiteHeader } from '../layouts';

import caseImage from '../data/cases/migros-filialfinder/case-study-migros.png';
import workImage from '../data/work.png';

export default () =>
  (<div>
    {getSiteHeader(
      'Projekte',
      'Wir lieben es, unsere Erfahrungen und unser Wissen mit Ihnen zu teilen und schrecken nicht vor anspruchsvollen Aufgaben innerhalb der Umsetzung ehrgeiziger Projekte zurück.',
    )}
    <div className="stage--gradient">
      <Stage
        image={{
          src: workImage,
          alt: 'Unsere Kunden',
        }}
        title="Let's <em>do</em> it!"
        description="In enger Zusammenarbeit mit unseren Kundinnen und Kunden entwickeln wir lösungsorientierte Systeme mit viel Liebe zum Detail. Wir setzen dabei auf innovative Technologien wie Node.js, Angular, React, D3.js, Symfony, Docker und Elasticsearch, wobei wir auf Qualität viel Wert legen. Diese stellen wir mittels gegenseitiger Code Reviews sowie Unit- und Functional Testings, zusammen mit Continuous Integration, sicher."
      />
    </div>

    <CaseTeaser
      url="/cases/migros-filialfinder"
      title="Auf der Suche nach der nächsten Migros Filiale"
      subline="Case"
      image={{
        src: caseImage,
        alt: 'Auf der Suche nach der nächsten Migros Filiale',
      }}
      body="<p>Für den grössten Schweizer Detailhändler, den Migros-Genossenschafts-Bund, haben wir den neuen Filialfinder umgesetzt.</p>"
    />

    <div className="project-list">
      <div className="container">
        <div className="row">
          {projects.map(project =>
            <Project key={project.title} title={project.title} category={project.category} description={project.description} image={project.image} caseUrl={project.caseUrl} />,
          )}
        </div>
      </div>
    </div>
  </div>);
