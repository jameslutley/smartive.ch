import React from 'react';
import Stage from '../components/stage';
import TeamMember from '../components/team-member';

import { team } from '../data/team';

import teamStageSrc from '../data/team/thilo-peter-meeting.jpg';

export default function Agency() {
  return (
    <div>
      <div className="stage--gradient stage--right-highlighted">
        <Stage
          image={{
            src: teamStageSrc,
            alt: 'Zwei smartive Mitarbeiter bei einer Besprechung',
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
