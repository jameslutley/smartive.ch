import React from 'react';

import { CaseBlock, Facts, Stage } from '../../components/molecules';

import stageImg from '../../data/cases/cosmo-crm/case-study-cosmo.png';
import featureImg from '../../data/cases/cosmo-crm/feature-stack-cosmo.png';
import techImg from '../../data/cases/cosmo-crm/cosmo-tech-stack.png';

const CosmoCrmCase = () =>
  (<div>
    <Stage
      modifiers={['gradient', 'case']}
      image={{
        src: stageImg,
        alt: 'Cosmopolitan Logo auf einem Laptop',
      }}
      title={<h1>Digitale Geschäftsprozesse als <em>Herzstück</em>.</h1>}
    >
      <p>
        Für die Cosmopolitan Vermögensverwaltungs AG konzipierten wir ein CRM System, welches die spezifischen Geschäftsprozesse genau abbildet. Der
        Wunsch, die Daten von einigen Excel Files in eine ausgereifte Datenstruktur zu überführen, hat zu einer Webapplikation geführt, welche
        mittlerweile das Herzstück der Firma bildet - alle Daten werden zentral und einheitlich verwaltet.
      </p>
      <p>Die Webapplikation bietet, unter anderen, die folgenden Features:</p>
      <ul>
        <li>Erfassungsassistenten</li>
        <li>Datenprüfungen mit Aufgaben-, und Warnsystem</li>
        <li>SIX API-Anbindung (Aktienkurse)</li>
        <li>Verwaltung von Anlagen</li>
        <li>Reports</li>
      </ul>
    </Stage>

    <div className="container">
      <Facts title="Insights">
        <ul>
          <li>Intelligente Suche</li>
          <li>Dynamische Kundenprofile</li>
          <li>Über 20 digitale Geschäftsprozesse</li>
          <li>Automatisierung von komplexen und zeitintensiven Abläufen</li>
          <li>Aufbereitung von Reports mittels Mausklick</li>
          <li>Datenexporte für Drittsysteme</li>
          <li>Automatisierte Datenkontrollen</li>
        </ul>
      </Facts>
    </div>

    <CaseBlock
      title="Digitale Transformation"
      subtitle="Automatisierung"
      graphic={
        <picture>
          <img className="case-img" src={featureImg} alt="Funktionalitäten der CRM Applikation" />
        </picture>
      }
    >
      <p>
        Dank des professionellen Requirement Engineerings wurden die Bedürfnisse und Anforderungen der Benutzer von Anfang an in die Konzeption
        miteinbezogen. Das agile Vorgehen und der modulare Aufbau des CRM haben dazu beigetragen, das System zielgerichtet auf die Bedürfnisse des
        Kunden anzupassen. So kann die Applikation stetig weiterentwickelt und verbessert werden, zum Beispiel durch die Anbindung des E-Bankings zur
        Datensynchronisation. Dies hilft die Prozesse noch weiter zu automatisieren und zu vereinfachen.
      </p>
    </CaseBlock>

    <CaseBlock
      title="Technologische Übersicht"
      subtitle="Lose Koppelung"
      graphic={
        <picture>
          <img src={techImg} alt="Performance Vergleich zwischen alt und neu" className="case-img" />{' '}
        </picture>
      }
    >
      <p>
        Durch eine stabile Architektur ist die Skalier-, und Verfügbarkeit der Applikation gewährleistet und einfach erweiterbar. Zusätzliche
        Drittsysteme können problemlos in die Anwendung eingebunden werden.
      </p>
    </CaseBlock>
  </div>);

export default CosmoCrmCase;
