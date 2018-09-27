//-----------------------------------------------------------------------------
// gatsby-config.js
//-----------------------------------------------------------------------------
module.exports = {
  siteMetadata: {
    title: `Blooger`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    {
      resolve:  `gatsby-source-filesystem`,
      options:  {
        name:   `content`,
        path:   `${__dirname}/content/`,
      },
    },
    {
      resolve:  `gatsby-source-filesystem`,
      options:  {
        name:   `images`,
        path:   `${__dirname}/src/images/`,
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve:  `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve:  `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 1024,
            },
          },
          {
            resolve:  `gatsby-remark-prismjs`,
            options:  {
              classPrefix:  "language-",
            }
          }  
        ],
      },
    },
  ],
}