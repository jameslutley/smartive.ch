import React from 'react';
import PropTypes from 'prop-types';

const getMediumPostData = (post, mediumUsers) => ({
  backgroundImage: post.virtuals.previewImage.imageId ? `https://cdn-images-1.medium.com/max/1200/${post.virtuals.previewImage.imageId}` : '',
  url: `https://blog.smartive.ch/${post.uniqueSlug}`,
  subline: mediumUsers.edges.filter(edge => edge.node.id === post.creatorId)[0].node.name,
  title: post.title,
  lead: post.virtuals.subtitle,
});

const MediumTeasers = ({ posts, users }) => {
  const firstPost = getMediumPostData(posts.edges[0].node, users);
  const secondPost = getMediumPostData(posts.edges[1].node, users);

  return (
    <div className="blog-list">
      <div className="container">
        <div className="row">
          <div
            className="blog-teaser blog-teaser--image col-xs-12 col-lg-7"
            style={{ backgroundImage: `url(${firstPost.backgroundImage})` }}
          >
            <a className="blog-teaser__link" href={firstPost.url} target="_blank">
              <div className="blog-teaser__content">
                <h2>
                  <small>{firstPost.subline}</small>
                  {firstPost.title}
                </h2>
                <p>{firstPost.lead}</p>
              </div>
            </a>
          </div>

          <div className="blog-teaser col-xs-12 col-lg-5 first-lg">
            <a className="blog-teaser__link" href={secondPost.url} target="_blank">
              <div className="blog-teaser__content">
                <h2>
                  <small>{secondPost.subline}</small>
                  {secondPost.title}
                </h2>
                <p>{secondPost.lead}</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
MediumTeasers.propTypes = {
  posts: PropTypes.objectOf(PropTypes.array).isRequired,
  users: PropTypes.objectOf(PropTypes.array).isRequired,
};

export default MediumTeasers;
