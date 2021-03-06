/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata : {
    title: `The Fake Site`,
  },

  plugins: [
    {
      resolve : `gatsby-source-filesystem`,
      options : {
        name : `src`,

        path: `${__dirname}/src/`,
      },
    },
    `gatsby-transformer-remark`,
    
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
  ],
}


