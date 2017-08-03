export default ({ image, job, name, description, education, links }) => (
    <div className="member col-xs-12 col-md-6 col-lg-4">
        <img className="member__portrait" src={image.src} alt={image.alt} />
        <div className="member__text">
            <h2><small>{job}</small> {name}</h2>
            <h3>{education}</h3>
            <div dangerouslySetInnerHTML={{ __html: description }} />
            <div dangerouslySetInnerHTML={{ __html: links }} />
        </div>
    </div>
);
