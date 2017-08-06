import React from 'react';
import ContactBox from '../components/contact-box';
import Map, { baseUrl } from '../components/map';
import { getSiteHeader } from '../layouts';

export default function Contact() {
  return (
    <div>
      { getSiteHeader('Kontakt', 'Nehmen Sie mit uns Kontakt auf - wir freuen uns auf Ihren Anruf!') }
      <div className="stage--left-highlighted stage--contact stage--gradient">
        <ContactBox />
      </div>
      <div className="map">
        <div className="container">
          <div className="col-xs-12">
            <div className="map__container">
              <Map
                googleMapURL={baseUrl}
                loadingElement={<div style={{ height: '100%' }} />}
                containerElement={<div style={{ height: '100%' }} />}
                mapElement={
                  <div className="map__container--loading">
                    <span className="map__container__loading-text">Karte wird geladen...</span>
                  </div>
                }
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
