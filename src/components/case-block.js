import React from 'react';

const CaseBlock = ({ h2, h3, children, gfx }) =>
  (<div className="container">
    <div className="case-block">
      <div className="row">
        <div className="col-xs-12 col-lg-4">
          <div className="case-block__content">
            <h2>
              {h2}
            </h2>
            <h3>
              {h3}
            </h3>
            {children}
          </div>
        </div>
        <div className="col-xs-12 col-lg-8 case-block__col-img">
          {gfx}
        </div>
      </div>
    </div>
  </div>);

export default CaseBlock;
