import React from "react";
import { Helmet } from "react-helmet";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";

const SEO = ({
    description,
    image: metaImage,
    title,
    titleTemplate,
    pathname,
    bodyClass,
}) => {
    const { site } = useStaticQuery(
        graphql`
            query {
                site {
                    siteMetadata {
                        title
                        description
                        author
                        siteUrl
                        siteLanguage
                        image
                        titleTemplate
                        twitterUsername
                    }
                }
            }
        `
    );

    const metaTitle = title || site.siteMetadata.title;
    const template = titleTemplate || site.siteMetadata.titleTemplate;
    const metaDescription = description || site.siteMetadata.description;
    const language = site.siteMetadata.siteLanguage;
    const siteUrl = site.siteMetadata.siteUrl.replace(/\/$/, "");
    const bannerImage =
        metaImage && metaImage.src
            ? `${siteUrl}/${metaImage.src}`
            : `${siteUrl}/${site.siteMetadata.image}`;
    const imgWidth = metaImage?.width ? metaImage.width : 875;
    const imgHeight = metaImage?.height ? metaImage.height : 554;
    const siteTitle = `${template} || ${metaTitle}`;

    const basSchema = [
        {
            "@type": "Organization",
            "@id": `${siteUrl}/#organization`,
            name: `${siteTitle}`,
            url: siteUrl,
            logo: {
                "@type": "ImageObject",
                url: site.siteMetadata.logo,
            },
        },
        {
            "@type": "WebSite",
            "@id": `${siteUrl}/#website`,
            url: siteUrl,
            name: `${siteTitle}`,
            publisher: {
                "@id": `${siteUrl}/#organization`,
            },
            inLanguage: language,
            potentialAction: {
                "@type": "SearchAction",
                target: `${siteUrl}/?s={search_term_string}`,
                "query-input": "required name=search_term_string",
            },
        },
    ];

    const schemaOrgWebPage = {
        "@context": "http://schema.org",
        "@graph": [...basSchema],
    };

    return (
        <Helmet
            htmlAttributes={{
                lang: language,
            }}
            bodyAttributes={{
                class: bodyClass,
            }}
        >
            {/* General tags */}
            <title>{siteTitle}</title>
            <meta name="description" content={metaDescription} />
            <meta name="image" content={bannerImage} />
            <meta
                name="robots"
                content="index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large"
            />

            {/* OpenGraph tags */}
            <meta property="og:locale" content={language} />
            <meta property="og:type" content="website" />
            <meta property="og:title" content={siteTitle} />
            <meta property="og:description" content={metaDescription} />
            <meta property="og:image" content={bannerImage} />
            <meta property="og:image:secure_url" content={bannerImage} />
            <meta property="og:image:width" content={`${imgWidth}px`} />
            <meta property="og:image:height" content={`${imgHeight}px`} />
            <meta property="og:image:alt" content={siteTitle} />
            <meta property="og:image:type" content="image/png" />

            {/* Twitter Card tags */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta
                name="twitter:creator"
                content={site.siteMetadata.twitterUsername}
            />
            <meta name="twitter:title" content={siteTitle} />
            <meta name="twitter:description" content={metaDescription} />
            <meta name="twitter:image" content={bannerImage} />

            <script type="application/ld+json">
                {JSON.stringify(schemaOrgWebPage)}
            </script>
        </Helmet>
    );
};

SEO.propTypes = {
    description: PropTypes.string,
    image: PropTypes.string,
    title: PropTypes.string,
    titleTemplate: PropTypes.string,
    pathname: PropTypes.string,
    bodyClass: PropTypes.string,
};

SEO.defaultProps = {
    lang: `en`,
    description: ``,
};

export default SEO;
