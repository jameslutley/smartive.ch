import React from 'react';

import stage from './stage.jpg';

const ContactBox = () =>
  (<div className="stage">
    <div className="container container--stage">
      <div className="row">
        <div className="stage__col--img col-xs-12 col-lg-6">
          <div className="img-container">
            <img className="teaser-image" src={stage} alt="smartive Büro von aussen" />
          </div>
        </div>
        <div className="stage__col--body col-xs-12 col-lg-6">
          <div className="stage__text">
            <div className="stage__description">
              <p>
                smartive AG<br />Schiffbaustrasse 7<br />CH-8005 Zürich
              </p>
              <p>
                <a href="mailto:hello@smartive.ch">hello@smartive.ch</a>
                <br />
                <a href="tel:0041445335953">+41 44 533 59 53</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>);

export default ContactBox;
