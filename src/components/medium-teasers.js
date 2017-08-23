import React from 'react';
import PropTypes from 'prop-types';

import { BlogTeaser } from './molecules';

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
          <BlogTeaser url={firstPost.url} subline={firstPost.subline} title={firstPost.title} lead={firstPost.lead} img={firstPost.backgroundImage} />
          <BlogTeaser url={secondPost.url} subline={secondPost.subline} title={secondPost.title} lead={secondPost.lead} />
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
