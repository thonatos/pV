const path = require('path')
const theme = require('./gastby-theme');

const siteUrl = process.env.SITE_URL || "https://v.implements.io";

module.exports = {
  siteMetadata: {
    siteUrl,
    title: "ρV",
    description: "undefined project - ρV",
    copyright: "@2021 - implements.io",
    navMenus: [
      {
        name: 'Home',
        link: '/',
      },
      {
        name: 'Posts',
        link: '/post',
      }
    ]
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-react-helmet",
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        '@': path.join(__dirname, 'src'),
      }
    },
    {
      resolve: `gatsby-plugin-less`,
      options: {
        lessOptions: {
          modifyVars: theme,
          javascriptEnabled: true,
        },
        cssLoaderOptions: {
          camelCase: false,
        },
      },
    },
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: 'ρV',
        short_name: 'ρV',
        start_url: `/`,
        icon: "src/images/icon.png",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `docs`,
        path: `${__dirname}/src/docs`,
      },
    },
    {
      resolve: "gatsby-plugin-page-creator",
      options: {
        path: `${__dirname}/src/docs`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        defaultLayouts: {
          docs: require.resolve("./src/layouts/post.tsx"),
          default: require.resolve("./src/layouts/default.tsx"),
        },
      },
    },
  ],
};
