import React from 'react';
import Link from 'gatsby-link';

import logo from './smartive.svg';

import './logo-positiv.scss';

export const LogoPositiv = () =>
  (<Link to="/" className="logo">
    <img src={logo} alt="smartive" />
  </Link>);

export default LogoPositiv;
