module.exports = {
    siteMetadata: {
        siteUrl: "https://www.yourdomain.tld",
        title: "Inbio - Personal Portfolio React Template",
        description: "Awesome Gatsby template",
        author: "Rainbow IT",
        siteLanguage: "en",
        image: "banner.jpg",
        titleTemplate: "inbio",
        twitterUsername: "@rainbowit",
        getform_url:
            "https://getform.io/f/7a6695a7-c8e3-442c-bc2f-d46d3b9a535e",
        socials: [
            {
                id: 1,
                title: "facebook",
                path: "https://facebook.com",
                icon: "Facebook",
            },
            {
                id: 2,
                title: "instagram",
                path: "https://instagram.com",
                icon: "Instagram",
            },
            {
                id: 3,
                title: "linkedin",
                path: "https://linkedin.com",
                icon: "Linkedin",
            },
        ],
        contact: {
            phone: "01234567890",
            email: "admin@example.com",
        },
    },
    plugins: [
        {
            resolve: "gatsby-plugin-sass",
            options: {
                useResolveUrlLoader: {
                    options: {
                        sourceMap: true, //default is false
                    },
                },
            },
        },
        "gatsby-plugin-image",
        "gatsby-plugin-react-helmet",
        "gatsby-plugin-sitemap",
        "gatsby-plugin-sharp",
        "gatsby-transformer-sharp",
        "gatsby-transformer-json",
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/assets/images`,
                ignore: [`**/\.*`],
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `data`,
                path: `${__dirname}/src/data`,
                ignore: [`**/\.*`],
            },
        },
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [
                    {
                        resolve: `gatsby-remark-images`,
                        options: {
                            maxWidth: 1200,
                        },
                    },
                ],
            },
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: "Inbio",
                short_name: "inbio",
                theme_color: "#ff014f",
                background_color: "#ffffff",
                display: "standalone",
                scope: "/",
                start_url: "/",
                icon: "src/assets/images/favicon.png",
            },
        },
    ],
};
