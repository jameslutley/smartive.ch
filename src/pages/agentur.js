import React, { Component } from 'react';
import Layout from '../layouts/default-layout';
import Stage from '../components/stage';
import TeamMember from '../components/team-member';
import MediumTeaser from '../components/medium-teaser';

// import { getTeamPage, getAllMembers } from '../services';

export default class Agency extends Component {

  render() {
    const { members } = this.props;

    return (
      <Layout
        title="Agentur - smartive AG"
        description="Nehmen Sie mit uns Kontakt auf - wir freuen uns auf Ihren Anruf!"
        currentRoute={this.props.url.pathname}
      >
        <div className="stage--gradient stage--right-highlighted">
          <Stage
            image={{
              src: stage.main.url,
              alt: stage.main.alt
            }}
            title={titleHtml}
            description={lead}
          />
        </div>

        <div className="container">
          <div className="row">
            {members.map(member => (
              <TeamMember
                {...member}
                key={member.id}
                image={{ src: member.image.main.url, alt: member.image.main.alt }}
              />
            ))}
          </div>
        </div>

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
