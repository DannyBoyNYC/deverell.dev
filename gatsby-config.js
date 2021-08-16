module.exports = {
  siteMetadata: {
    title: `Applied Procrastination`,
    author: `Daniel Deverell`,
    description: `A platform for experiementing with Gatsby, React, web design and development`,
    siteUrl: `https://deverell.dev/`,
    social: {
      twitter: `danieldeverell`,
    },
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-plugin-sass`,
            options: {
              // format: "expanded",
              // extensionName: ".min.css",
              // savePath: "/src/styles/",
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          // {
          //   resolve: `gatsby-remark-responsive-iframe`,
          //   options: {
          //     wrapperStyle: `margin-bottom: 1.0725rem`,
          //   },
          // },
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              aliases: { sh: "bash" },
              showLineNumbers: true,
            },
          },
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,

          `gatsby-plugin-image`,
          `gatsby-plugin-sharp`,
          `gatsby-transformer-sharp`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Deverell dot dev`,
        short_name: `deverell`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `content/assets/me.png`,
      },
    },
    `gatsby-plugin-react-helmet`,
  ],
};
