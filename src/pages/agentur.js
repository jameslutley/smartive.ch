import React from 'react';
import Stage from '../components/stage';
import MediumTeaser from '../components/medium-teaser';

export default function Agency() {
  return (
    <div>
      <div className="stage--gradient stage--right-highlighted">
        <Stage
          image={{
            src: 'https://smartive.ch/images/services-c1ad2a9a.jpg',
            alt:
              'Zwei smartive Mitarbeiter bei einer Besprechung. smartive Wandlogo im Hintergrund.',
          }}
          title={'<h1>Zuhause im <em>Internet</em>.</h1>'}
          description="Als Digital Natives fühlen wir uns in einem Request-Response Umfeld, und allem was mit HTTP zu tun hat, am wohlsten. Unsere Expertise reicht dabei von effizienter Datenaggregation und -verarbeitung über moderne, leistungsfähige APIs und wiederverwendbaren UI Pattern Libraries bis hin zu skalierbares DevOps Lösungen. Kurzum: wir sind zuhause im Internet."
        />
      </div>

      <div className="container">
        <div className="row" />
      </div>

      <MediumTeaser
        backgroundImage="https://smartive.ch/assets/images/react-native-blog-teaser.png"
        url="https://blog.smartive.ch/react-native-ready-or-not-c599bf273e2d"
        subline="Ready or Not"
        title="React Native"
        lead="React Native allows developers to create cross-platform apps on a familiar stack. But can you start using it productively today?"
      />
    </div>
  );
}
