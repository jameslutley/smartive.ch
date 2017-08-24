import React from 'react';
import { Map, Stage } from '../components/molecules';
import { getSiteHeader } from '../layouts';

import contactImage from '../data/contact.jpg';

export default function Contact() {
  return (
    <div>
      {getSiteHeader('Kontakt', 'Nehmen Sie mit uns Kontakt auf - wir freuen uns auf Ihren Anruf!')}

      <Stage
        modifiers={['left-highlighted', 'contact', 'gradient']}
        image={{
          src: contactImage,
          alt: 'smartive Büro bei Regen',
        }}
      >
        <h1>
          <p>
            smartive AG<br />Schiffbaustrasse 7<br />CH-8005 Zürich
          </p>
          <p>
            <a href="mailto:hello@smartive.ch">hello@smartive.ch</a>
            <br />
            <a href="tel:0041445335953">+41 44 533 59 53</a>
          </p>
        </h1>
      </Stage>
      <Map />
    </div>
  );
}
