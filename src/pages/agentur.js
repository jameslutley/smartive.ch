import React from 'react';
import Stage from '../components/stage';
import TeamMember from '../components/team-member';
import MediumTeaser from '../components/medium-teaser';

import { team } from '../data/team';

export default function Agency() {
  return (
    <div>
      <div className="stage--gradient stage--right-highlighted">
        <Stage
          image={{
            src:
              'https://prismic-io.s3.amazonaws.com/smartive/d12b7e81c6ea7d07260cf81ade530b35bee62f1e_team-babd8d3b.jpg',
            alt: 'Drei smartive Mitarbeiter bei einer Besprechung',
          }}
          title={'<h1>Im <em>Herzen</em> von Zürich.</h1>'}
          description="Wir sind ein junges, dynamisches Team, bestehend aus acht Leuten. Unser breit gestreutes Wissen in sämtlichen Webbereichen unterstützt Sie dabei, sich und Ihr Unternehmen weiterzuentwickeln."
        />
      </div>

      <div className="container">
        <div className="row">
          {team.map(member =>
            (<TeamMember
              {...member}
              key={member.name}
              image={{
                src: member.img,
                alt: member.name,
              }}
            />),
          )}
        </div>
      </div>
    </div>
  );
}
