import React from 'react';
import Link from 'gatsby-link';
import PropTypes from 'prop-types';

const items = [
  { href: '/projekte', label: 'Projekte' },
  { href: '/agentur', label: 'Agentur' },
  { href: '/kontakt', label: 'Kontakt' },
  { href: 'https://blog.smartive.ch', label: 'Blog', css: 'navigation-item--medium' },
];

function getClassNames(currentRoute, item) {
  const classes = [item.css ? item.css : null, currentRoute === item.href ? 'is-active' : null];

  return classes.filter(Boolean).join(' ');
}

const Header = ({ currentRoute }) => (
  <header className="header">
    <div className="container">
      <div className="row middle-lg">
        <div className="header__col--logo col-xs-12 col-md-6">
          <Link href="/">
            <a className="logo">
              <img src="/static/smartive.svg" alt="smartive" />
            </a>
          </Link>
        </div>

        <div className="header__col--navigation col-xs-12 col-md-6">
          <nav className="navigation">
            <ul>
              {items.map(item => (
                <li key={item.label}>
                  <Link to={item.href}>
                    <a className={getClassNames(currentRoute, item)}>{item.label}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </header>
);
Header.propTypes = {
  currentRoute: PropTypes.string.isRequired,
};

export default Header;
