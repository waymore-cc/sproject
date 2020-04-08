/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `An example to learn how to source data from WordPress`,
    description: `Sourcing data from WordPress`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        /*
         * The base URL of the WordPress site without the trailingslash and the protocol. This is required.
         * Example : 'dev-gatbsyjswp.pantheonsite.io' or 'www.example-site.com'
         */
        baseUrl: "numio.pl",
        protocol: `http`,
        hostingWPCOM: false,
        useACF: true,
        auth: {
          // // If auth.user and auth.pass are filled, then the source plugin will be allowed
          // // to access endpoints that are protected with .htaccess.
          htaccess_user: "pawelkamyszek",
          htaccess_pass: "5Luk8vJF",
          htaccess_sendImmediately: true,
        },
        includedRoutes: [
          "**/categories",
          "**/posts",
          "**/pages",
          "**/media",
          "**/tags",
          "**/taxonomies",
          "**/case_study",
          "**/products",
        ],
        // verboseOutput: true,
      },
    },

    {
      resolve: "@pasdo501/gatsby-source-woocommerce",
      options: {
        // Base URL of Wordpress site
        api: "numio.pl",

        // set to false to not see verbose output during build
        // default: true
        verbose: true,

        // true if using https. otherwise false.
        https: false,
        api_keys: {
          consumer_key: "ck_c8580558bcfc1875f2fdf4792e425f1c66d68dd4",
          consumer_secret: "cs_c1625834d5bed5d7bfe2ac919404c91ffe300438",
        },
        // Array of strings with fields you'd like to create nodes for...
        fields: ["products", "products/categories", "products/attributes"],
      },
    },
  ],
}
