import React from 'react';
import Link from 'gatsby-link';

import logo from './smartive.svg';

const items = [
  { href: '/projekte', label: 'Projekte' },
  { href: '/agentur', label: 'Agentur' },
  { href: '/kontakt', label: 'Kontakt' },
];

const Header = () =>
  (<header className="header">
    <div className="container">
      <div className="row middle-lg">
        <div className="header__col--logo col-xs-12 col-md-6">
          <Link to="/" className="logo">
            <img src={logo} alt="smartive" />
          </Link>
        </div>

        <div className="header__col--navigation col-xs-12 col-md-6">
          <nav className="navigation">
            <ul>
              {items.map(item =>
                (<li key={item.label}>
                  <Link to={item.href} activeClassName="is-active">
                    {item.label}
                  </Link>
                </li>),
              )}
              <li>
                <Link
                  className="navigation-item--medium"
                  to="https://blog.smartive.ch"
                  target="_blank"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </header>);

export default Header;
