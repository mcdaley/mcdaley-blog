//-----------------------------------------------------------------------------
// src.config/index.js
//-----------------------------------------------------------------------------

const SITE_URL = `https://www.blooger.com`

const Config = {
  title:        `Blooger`,
  siteUrl:      SITE_URL,
  description:  `Blog starter kit for gatsbyjs using bootstrap`,
  logo:         `https://www.blooger.com/icons/favicon-32x32.png`,

  pages: {
    about: {
      title:        `About Blooger`,
      description:  `Enter description of the about page`,
      url:          `${SITE_URL}/about`,
    },
    content: {
      title:        `Contact Blooger`,
      description:  `Enter description for contact page`,
      url:          `${SITE_URL}/contact`,
    },
  }
}

export default Config