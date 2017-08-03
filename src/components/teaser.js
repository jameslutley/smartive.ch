export default ({ title, subline, description }) => (
    <div className="teaser col-xs-12 col-sm-6 col-lg-4">
        <div className="teaser__content">
            <h2>
                <small>{subline}</small>
                {title}
            </h2>

            <div className="description" dangerouslySetInnerHTML={{ __html: description }} />
        </div>
    </div>
);
