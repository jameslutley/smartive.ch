import React from 'react';
import PropTypes from 'prop-types';

import { BlogTeaser } from '../../molecules';

const getMediumPostData = (post, mediumUsers) => ({
  backgroundImage: post.virtuals.previewImage.imageId
    ? `https://cdn-images-1.medium.com/max/1200/${post.virtuals.previewImage.imageId}`
    : '',
  url: `https://blog.smartive.ch/${post.uniqueSlug}`,
  subline: mediumUsers.edges.filter(edge => edge.node.id === post.creatorId)[0].node.name,
  title: post.title,
  lead: post.virtuals.subtitle,
  id: post.id,
});

export const MediumTeaser = ({ posts, users }) =>
  (<div className="blog-list">
    <div className="container">
      <div className="row">
        {posts.edges.map((edge, index) => {
          const post = getMediumPostData(edge.node, users);
          return (
            <BlogTeaser
              url={post.url}
              subline={post.subline}
              title={post.title}
              lead={post.lead}
              img={index === 0 ? post.backgroundImage : null}
              key={post.id}
            />
          );
        })}
      </div>
    </div>
  </div>);

MediumTeaser.propTypes = {
  posts: PropTypes.objectOf(PropTypes.array).isRequired,
  users: PropTypes.objectOf(PropTypes.array).isRequired,
};

export default MediumTeaser;
