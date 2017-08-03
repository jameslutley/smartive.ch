module.exports = {
  siteMetadata: {
    title: 'smartive',
  },
  plugins: [
    {
      resolve: 'gatsby-source-medium',
      options: {
        username: 'smartive',
      },
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
  ],
};
