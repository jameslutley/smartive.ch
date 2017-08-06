import React from 'react';
import Stage from '../components/stage';
import Project from '../components/project';
import projects from '../data/projects';
import { getSiteHeader } from '../layouts';

import workImage from '../data/work.png';

export default () => (
  <div>
    {getSiteHeader('Projekte', 'Wir lieben es, unsere Erfahrungen und unser Wissen mit Ihnen zu teilen und schrecken nicht vor anspruchsvollen Aufgaben innerhalb der Umsetzung ehrgeiziger Projekte zurück.')}
    <div className="stage--gradient">
      <Stage
        image={{
          src: workImage,
          alt: 'Zwei smartive Mitarbeiter bei einer Besprechung',
        }}
        title="Let's <em>do</em> it!"
        description="In enger Zusammenarbeit mit unseren Kundinnen und Kunden entwickeln wir lösungsorientierte Systeme mit viel Liebe zum Detail. Wir setzen dabei auf innovative Technologien wie Node.js, Angular, React, D3.js, Symfony, Docker und Elasticsearch, wobei wir auf Qualität viel Wert legen. Diese stellen wir mittels gegenseitiger Code Reviews sowie Unit- und Functional Testings, zusammen mit Continuous Integration, sicher."
      />
    </div>

    <div className="container">
      <p>Hier irgendwie Cases anzeigen</p>
    </div>
    <div className="project-list">
      <div className="container">
        <div className="row">
          {projects.map(project => (
            <Project
              title={project.title}
              category={project.category}
              description={project.description}
              image={project.image}
            />
          ))}
        </div>
      </div>
    </div>
  </div>
);

// export default class Projekte extends Component {
//   render() {
//     if (this.props.error) {
//       // Somehow properly handle this.
//       console.error(this.props.error);
//     }

//     const {
//             titleHtml,
//       lead,
//       stage
//         } = this.props.doc;

//     return (
//       <Layout
//         title="Projekte - smartive AG"
//         description="Wir lieben es, unsere Erfahrungen und unser Wissen mit Ihnen zu teilen und schrecken nicht vor anspruchsvollen Aufgaben innerhalb der Umsetzung ehrgeiziger Projekte zurück."
//         currentRoute={this.props.url.pathname}
//       >
//         <div className="stage--left-highlighted stage--gradient">
//           <Stage
//             image={{
//               src: stage.main.url,
//               alt: stage.main.alt
//             }}
//             title={titleHtml}
//             description={lead}
//           />
//         </div>

//         <div className="container">
//           <p>Hier irgendwie Cases anzeigen</p>
//         </div>
//       </Layout>
//     );
//   }
// }
