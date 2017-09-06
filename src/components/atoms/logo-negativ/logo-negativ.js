import React from 'react';
import Link from 'gatsby-link';

import logo from './smartive-negativ.svg';

import './logo-negativ.scss';

export const LogoNegativ = () =>
  (<Link to="/" className="logo-negativ">
    <img src={logo} alt="smartive" />
  </Link>);

export default LogoNegativ;
