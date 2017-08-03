import React, { Component } from 'react';

import Layout from '../layouts/default-layout';
import Stage from '../layouts/stage';
import Teaser from '../layouts/teaser';
import CaseTeaser from '../layouts/case-teaser';
import MediumTeaser from '../layouts/medium-teaser';

export default class Index extends Component {
  render() {
    // const {
    //   title,
    //   titleHtml,
    //   lead,
    //   stage,
    //   teasers,
    //   featuredCase
    // } = this.props.doc;
    let title = titleHtml = lead = stage = 'asdf';

    return (
      <Layout title={`${title} - smartive AG`} description={lead} currentRoute={this.props.url.pathname}>
        <div className="stage--left-highlighted stage--landing-page">
          <Stage
            image={{
              src: stage.main.url,
              alt: stage.main.alt
            }}
            title={titleHtml}
            description={lead}
          />
        </div>

        <div className="teaser-list">
          <div className="container">
            <div className="row center-sm left-lg">
              {teasers.map(teaser => (
                <Teaser
                  key={teaser.title}
                  title={teaser.title}
                  subline={teaser.subline}
                  description={teaser.description}
                />
              ))}
            </div>
          </div>
        </div>

        <CaseTeaser
          url={featuredCase.url}
          title={featuredCase.title}
          subline={featuredCase.subline}
          image={{
            src: featuredCase.image.url,
            alt: featuredCase.image.alt
          }}
          body={featuredCase.body}
        />

        <MediumTeaser
          backgroundImage="https://smartive.ch/assets/images/react-native-blog-teaser.png"
          url="https://blog.smartive.ch/react-native-ready-or-not-c599bf273e2d"
          subline="Ready or Not"
          title="React Native"
          lead="React Native allows developers to create cross-platform apps on a familiar stack. But can you start using it productively today?"
        />

      </Layout>
    );
  }
}
