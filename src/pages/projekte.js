import React, { Component } from 'react';
import Layout from '../layouts/default-layout';
import Stage from '../components/stage';

const services = [];

export default class Projekte extends Component {
    render() {
        if (this.props.error) {
            // Somehow properly handle this.
            console.error(this.props.error);
        }

        const {
            titleHtml,
            lead,
            stage
        } = this.props.doc;

        return (
            <Layout
                title="Projekte - smartive AG"
                description="Wir lieben es, unsere Erfahrungen und unser Wissen mit Ihnen zu teilen und schrecken nicht vor anspruchsvollen Aufgaben innerhalb der Umsetzung ehrgeiziger Projekte zurück."
                currentRoute={this.props.url.pathname}
            >
                <div className="stage--left-highlighted stage--gradient">
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
                    <p>Hier irgendwie Cases anzeigen</p>
                </div>
            </Layout>
        );
    }
}
