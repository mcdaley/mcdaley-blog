//-----------------------------------------------------------------------------
// src.config/index.js
//-----------------------------------------------------------------------------

const SITE_URL    = `https://www.mcdaley.com`
const SITE_TITLE  = `mcdaley.com`

const Config = {
  title:        `${SITE_TITLE}: Mike Daley's Product Management Blog`,
  siteUrl:      SITE_URL,
  baseUrl:      SITE_TITLE,
  description:  `Mike Daley's blog - connecting the dots between product management and software development`,
  logo:         `${SITE_URL}/icons/favicon-32x32.png`,

  pages: {
    about: {
      title:        `${SITE_TITLE}: About Mike Daley - Product Manager and Developer`,
      description:  `About Mike Daley - Product Manager and Developer`,
      url:          `${SITE_URL}/about`,
    },
    content: {
      title:        `${SITE_TITLE}: Contact Mike Daley - Product Manager and Developer`,
      description:  `Contact Mike Daley - Product Manager and Developer`,
      url:          `${SITE_URL}/contact`,
    },
  }
}

export default Config