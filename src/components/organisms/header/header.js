import React from 'react';
import Headroom from 'react-headroom';

import { LogoPositiv } from '../../atoms';
import { Navigation } from '../../molecules';

import './header.scss';

export const Header = () =>
  (<Headroom disableInlineStyles>
    <header className="header">
      <div className="container">
        <div className="row middle-lg">
          <div className="header__col--logo col-xs-12 col-md-6">
            <LogoPositiv />
          </div>

          <div className="header__col--navigation col-xs-12 col-md-6">
            <Navigation />
          </div>
        </div>
      </div>
    </header>
  </Headroom>);

export default Header;
