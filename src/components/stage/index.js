import React from 'react';
import PropTypes from 'prop-types';

import stage from './stage.jpg';

const Stage = () =>
  (<div className="stage">
    <div className="container container--stage">
      <div className="row">
        <div className="stage__col--img col-xs-12 col-lg-6">
          <div className="img-container">
            <img className="teaser-image" src={stage} alt="Zukunfts­weisende Web­applikationen für anspruchs­volle Unternehmen." />
          </div>
        </div>
        <div className="stage__col--body col-xs-12 col-lg-6">
          <div className="stage__text">
            <h1>Zukunfts­weisende <span className="emphasis">Web­applikationen</span> für anspruchs­volle Unternehmen.</h1>

            <div className="stage__description">
              <p>
                Wir sind smartive — eine dynamische, innovative Schweizer Webentwicklungsagentur. Die Realisierung zeitgemässer Weblösungen gehört genauso zu unserer Passion, wie die konstruktive Zusammenarbeit mit unseren Kundinnen und Kunden. Gerne begleiten wir Sie von der ersten Idee über die Konzeption bis hin zur Umsetzung.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>);

export default Stage;
