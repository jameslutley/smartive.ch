import React, { Component } from 'react';
import Layout from '../layouts/default-layout';
import ContactBox from '../layouts/contact-box';

export default class Contact extends Component {
    render() {
        const {
            address,
            image
        } = this.props.doc;

        return (
            <Layout
                title="Kontakt - smartive AG"
                description="Nehmen Sie mit uns Kontakt auf - wir freuen uns auf Ihren Anruf!"
                currentRoute={this.props.url.pathname}
            >
                <div className="stage--left-highlighted stage--contact stage--gradient">
                    <ContactBox
                        image={{
                            src: image.main.url,
                            alt: image.main.alt
                        }}
                        address={address}
                    />
                </div>
            </Layout>
        );
    }
}
