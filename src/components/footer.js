import Link from 'gatsby-link';

const items = [
    { href: 'https://github.com/smartive', src: '/static/github.svg', alt: 'smartive auf GitHub' },
    {
        href: 'https://twitter.com/smartive_ch',
        src: '/static/twitter.svg',
        alt: 'smartive auf Twitter'
    },
    {
        href: 'https://facebook.com/smartive.ch',
        src: '/static/facebook.svg',
        alt: 'smartive auf Facebook'
    }
];

export default () => (
    <footer className="footer">
        <div className="container">
            <div className="footer__row--logo row">
                <div className="col-xs-12">
                    <img className="logo" src="/static/smartive.svg" alt="smartive AG" />
                </div>
            </div>
            <div className="footer__row--contact row center-xs start-md middle-lg">
                <div className="address col-xs-12 col-md-3">
                    <p>
                        Schiffbaustrasse 7<br />
                        Ch-8005 Zürich
                    </p>
                </div>
                <div className="contact col-xs-12 col-md-3">
                    <p>
                        <Link to="tel:+41 44 533 59 53">
                            <a>+41 44 533 59 53</a>
                        </Link>
                        <br />
                        <Link to="mailto:hello@smartive.ch">
                            <a>hello@smartive.ch</a>
                        </Link>
                    </p>
                </div>
                <div className="footer__navigation col-xs-12 col-md-6">
                    <nav className="social">
                        <ul className="row">
                            {items.map(item => (
                                <li key={item.href} className="col-xs">
                                    <Link to={item.href}>
                                        <a><img src={item.src} alt={item.alt} /></a>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    </footer>
);
