import React from 'react';
import ContactBox from '../components/contact-box';
import { Map } from '../components/molecules';
import { getSiteHeader } from '../layouts';

export default function Contact() {
  return (
    <div>
      {getSiteHeader('Kontakt', 'Nehmen Sie mit uns Kontakt auf - wir freuen uns auf Ihren Anruf!')}
      <div className="stage--left-highlighted stage--contact stage--gradient">
        <ContactBox />
      </div>
      <Map />
    </div>
  );
}
