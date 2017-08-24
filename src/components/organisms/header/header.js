import React from 'react';
import Link from 'gatsby-link';
import Headroom from 'react-headroom';

import { Navigation } from '../../molecules';
import logo from '../../../data/smartive.svg';

import './header.scss';

export const Header = () =>
  (<Headroom disableInlineStyles>
    <header className="header">
      <div className="container">
        <div className="row middle-lg">
          <div className="header__col--logo col-xs-12 col-md-6">
            <Link to="/" className="logo">
              <img src={logo} alt="smartive" />
            </Link>
          </div>

          <div className="header__col--navigation col-xs-12 col-md-6">
            <Navigation />
          </div>
        </div>
      </div>
    </header>
  </Headroom>);

export default Header;
