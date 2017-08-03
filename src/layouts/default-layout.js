import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../components/header';
import Footer from '../components/footer';
import '../scss/main.scss';

const defaultDescription = '';
const defaultTitle = '';

export default ({ title, description, currentRoute, children }) =>
  (<div>
    <Helmet>
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE-edge,chrome=1" />
      <meta name="viewport" content="width=device-width,initial-scale=1" />

      <meta name="description" content={description || defaultDescription} />
      <title>
        {title || defaultTitle}
      </title>
    </Helmet>

    <Header currentRoute={currentRoute} />

    <main>
      {children}
    </main>

    <Footer />
  </div>);
