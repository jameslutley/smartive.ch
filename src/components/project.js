import Link from 'next/link';

export default ({ image, subline, title, description, caseUrl }) => (
    <div className="project col-xs-12 col-md-6">
        <img className="project__img" src={image.src} alt={image.alt} />
        <div className="project__text">
            <h2><small>{subline}</small> {title}</h2>

            <div dangerouslySetInnerHTML={{ __html: description }} />

            {caseUrl
                ? <Link href={caseUrl}>
                      <a className="button button--primary">Case anschauen</a>
                  </Link>
                : null}
        </div>
    </div>
);
