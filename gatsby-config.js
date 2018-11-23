module.exports = {
  siteMetadata: {
    title: `Farm to Flames`,
  },
    plugins: [
      `gatsby-plugin-emotion`,
      {
        resolve: `gatsby-plugin-typography`,
        options: {
          pathToConfigModule: `src/utils/typography`,
        },
      },
    ],
  }