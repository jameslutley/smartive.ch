import React from 'react';

export default ({ image, title, description }) =>
  (<div className="stage">
    <div className="container container--stage">
      <div className="row">
        <div className="stage__col--img col-xs-12 col-lg-6">
          <div className="img-container">
            <img className="teaser-image" src={image.src} alt={image.alt} />
          </div>
        </div>
        <div className="stage__col--body col-xs-12 col-lg-6">
          <div className="stage__text">
            <div dangerouslySetInnerHTML={{ __html: title }} />

            <div className="stage__description">
              <p>
                {description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>);
