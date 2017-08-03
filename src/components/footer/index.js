import React from 'react';

import logo from '../../data/smartive.svg';

import githubImgSrc from './github.svg';
import twitterImgSrc from './twitter.svg';
import facebookImgSrc from './facebook.svg';

const items = [
  { href: 'https://github.com/smartive', src: githubImgSrc, alt: 'smartive auf GitHub' },
  {
    href: 'https://twitter.com/smartive_ch',
    src: twitterImgSrc,
    alt: 'smartive auf Twitter',
  },
  {
    href: 'https://facebook.com/smartive.ch',
    src: facebookImgSrc,
    alt: 'smartive auf Facebook',
  },
];

export default () =>
  (<footer className="footer">
    <div className="container">
      <div className="footer__row--logo row">
        <div className="col-xs-12">
          <img className="logo" src={logo} alt="smartive AG" />
        </div>
      </div>
      <div className="footer__row--contact row center-xs start-md middle-lg">
        <div className="address col-xs-12 col-md-3">
          <p>
            Schiffbaustrasse 7<br />
            Ch-8005 Zürich
          </p>
        </div>
        <div className="contact col-xs-12 col-md-3">
          <p>
            <a href="tel:+41 44 533 59 53">+41 44 533 59 53</a>
            <br />
            <a href="mailto:hello@smartive.ch">hello@smartive.ch</a>
          </p>
        </div>
        <div className="footer__navigation col-xs-12 col-md-6">
          <nav className="social">
            <ul className="row">
              {items.map(item =>
                (<li key={item.href} className="col-xs">
                  <a href={item.href}>
                    <img src={item.src} alt={item.alt} />
                  </a>
                </li>),
              )}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </footer>);
