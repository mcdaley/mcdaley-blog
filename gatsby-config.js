//-----------------------------------------------------------------------------
// gatsby-config.js
//-----------------------------------------------------------------------------
module.exports = {
  siteMetadata: {
    title: `Blooger`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-react-helmet`,
    {
      resolve:  `gatsby-source-filesystem`,
      options:  {
        name:   `content`,
        path:   `${__dirname}/content/`,
      },
    },
  ],
}