import React from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import WebFont from 'webfontloader';

import 'flexboxgrid/dist/flexboxgrid.min.css';

import Header from '../components/header';
import Footer from '../components/footer';

import '../scss/main.scss';

class Index extends React.Component {
  componentWillMount() {
    WebFont.load({
      google: {
        families: ['Roboto:300,400,700,900'],
      },
    });
  }

  render() {
    return (
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE-edge,chrome=1" />
          <meta name="viewport" content="width=device-width,initial-scale=1" />

          <meta name="description" content={'description' || 'asdf'} />
          <title>
            {'title' || 'asdf'}
          </title>
        </Helmet>

        <Header />

        <main>
          {this.props.children()}
        </main>

        <Footer />
      </div>
    );
  }
}
Index.propTypes = {
  children: PropTypes.func.isRequired,
};

export default Index;
