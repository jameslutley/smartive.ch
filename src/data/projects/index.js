import filialfinder from './migros-filialfinder.jpg';
import cosmopolitan from './cosmopolitan.jpg';

export default [
  {
    title: 'Filialfinder',
    category: 'API und Webapplikation',
    description: 'Mit dem neuen Migros Filialfinder können Kundinnen und Kunden zu Hause oder unterwegs relevante Filialinformationen schnell und einfach abrufen. Als Backend wurde eine Node.js API mit Elasticsearch als Suchindex entwickelt. Mit diesem Stack können eine hohe Performance und die optimale Volltextsuche garantiert werden. Durch starke Suchmaschinenoptimierung (SEO) können auch alle Filialen inklusive deren Öffnungszeiten bei renommierten Suchmaschinen gefunden werden.',
    image: {
      src: filialfinder,
      alt: 'Filialfinder',
    },
  },
  {
    title: 'Cosmopolitan',
    category: 'CRM',
    description: 'Für die Cosmopolitan Vermögensverwaltungs AG haben wir, mit der Kundin zusammen, ein CRM-System entwickelt, welches die geschäftsspezifischen Prozesse genau abbildet. Die Webapplikation bietet viele Features wie Erfassungsassistenten, Vollständigkeitschecks, SIX API-Anbindung (Börse), Anlegetools und Reportings. Die Applikation wird in ihrer Funktionalität laufend erweitert.',
    image: {
      src: cosmopolitan,
      alt: 'Filialfinder',
    },
  },
];
