module.exports = {
  siteMetadata: {
    title: `Openweb v2`,
    siteUrl: `https://openweb.bbva`,
    description: `Openweb home page, blog and link to control panel`,
    components: {
      appbar: {
        position: 'sticky',
        links: [
          {
            title: 'Dashboard',
            url: '/dashboard',
          },
          {
            title: 'Help',
            url: '/help',
          },
        ],
      },
      footer: {
        copyright: 'Made with ♥️ by Openweb',
        columns: [
          {
            heading: 'Column 1',
            links: [
              {
                title: 'Link 1',
                url: '#',
              },
              {
                title: 'Link 2',
                url: '#',
              },
              {
                title: 'Link 3',
                url: '#',
              },
            ],
          },
          {
            heading: 'Column 2',
            links: [
              {
                title: 'Link A',
                url: '#',
              },
              {
                title: 'Link B',
                url: '#',
              },
              {
                title: 'Link C',
                url: '#',
              },
            ],
          },
          {
            heading: 'Column 3',
            links: [
              {
                title: 'Link x',
                url: '#',
              },
              {
                title: 'Link y',
                url: '#',
              },
              {
                title: 'Link z',
                url: '#',
              },
            ],
          },
        ],
      },
    },
    templates: {
      // Blog section
      home: {
        totalPosts: 3,
        template: 'home',
      },
      pages: {
        path: '/content/pages/',
        template: 'page',
      },
      posts: {
        path: '/content/posts/',
        pathPrefix: 'posts',
        template: 'post',
        filters: {
          tag: {
            pathPrefix: 'tag',
            template: 'tag',
            totalPosts: 3,
            pagination: {
              template: 'resultsTag',
              resultsPerPage: 6,
            },
          },
        },
        pagination: {
          template: 'resultsAll',
          resultsPerPage: 6,
        },
      },
      // Panel section
      projects: {
        template: 'project',
      },
    },
  },
  plugins: [
    `gatsby-plugin-material-ui`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `src/content/pages`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-posts`,
        path: `src/content/posts`,
      },
    },
    {
      resolve: 'gatsby-plugin-prefetch-google-fonts',
      options: {
        fonts: [
          {
            family: 'Roboto',
          },
          {
            family: 'Work Sans',
            variants: ['800'],
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Openweb`,
        short_name: `Openweb`,
        start_url: `/`,
        background_color: `rebeccapurple`,
        theme_color: `rebeccapurple`,
        display: `standalone`,
        icon: `src/images/favicon.png`,
      },
    },
    {
      resolve: `gatsby-source-mongodb`,
      options: {
        dbName: `webpublicas`,
        collection: [`projects`, `users`, `jobs`, `departments`],
      },
    },
  ],
};
