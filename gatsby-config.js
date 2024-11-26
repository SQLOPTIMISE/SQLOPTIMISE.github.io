module.exports = {
    siteMetadata: {
      title: "SQL OPTIMISE",
      description: "Innovative SQL Server Solutions for Your Business.",
      author: "Gareth",
      siteUrl: "https://github.com/SQLOPTIMISE/SQLOPTIMISE.github.io",
    },
    plugins: [
      "gatsby-plugin-react-helmet", // For managing metadata and SEO
      {
        resolve: "gatsby-source-filesystem",
        options: {
          name: "content",
          path: `${__dirname}/src/content/`,
        },
      },
      "gatsby-transformer-remark", // For processing Markdown content
      "gatsby-plugin-sharp", // For image optimization
      "gatsby-transformer-sharp",
      {
        resolve: "gatsby-plugin-manifest",
        options: {
          name: "SQL OPTIMISE",
          short_name: "SQLOPTIMISE",
          start_url: "/",
          background_color: "#ffffff",
          theme_color: "#2c3e50",
          display: "standalone",
          icon: "src/images/favicon.png", // Replace with your favicon
        },
      },
      "gatsby-plugin-offline", // Adds offline capabilities
    ],
  };