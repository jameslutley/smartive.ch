import React from 'react';
import { withGoogleMap, GoogleMap, Marker, InfoWindow } from 'react-google-maps';
import withScriptjs from 'react-google-maps/lib/async/withScriptjs';

export const baseUrl =
  'https://maps.googleapis.com/maps/api/js?v=3.27&libraries=places,geometry&key=AIzaSyD1q6iI1c4XGqrbKGBPZfO2bnRTRVaRg04';

const AsyncMap = withScriptjs(
  withGoogleMap(props =>
    (<GoogleMap
      ref={props.onMapLoad}
      defaultZoom={15}
      defaultCenter={{ lat: 47.3884069, lng: 8.5181335 }}
    >
      <Marker
        icon="https://smartive.ch/assets/images/map-marker.png"
        position={{ lat: 47.3884069, lng: 8.5181335 }}
      >
        <InfoWindow>
          <div className="map__schema" itemScope itemType="https://schema.org/ContactPage">
            <p className="map-info">
              <span itemProp="name" className="map-info--name">
                smartive AG
              </span>
              <span itemScope itemProp="address" itemType="https://schema.org/PostalAddress">
                <span className="map-info--street" itemProp="streetAddress">
                  Schiffbaustrasse 7
                </span>
                <span className="map-info--zip" itemProp="postalCode">
                  8005
                </span>
                <span className="map-info--locality" itemProp="addressLocality">
                  Zürich
                </span>
              </span>
            </p>
          </div>
        </InfoWindow>
      </Marker>
    </GoogleMap>),
  ),
);

export default AsyncMap;
