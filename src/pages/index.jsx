import * as React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { normalizedData } from "@utils";
import Layout from "@layout";
import Header from "@layout/header/layout-01";
import Footer from "@layout/footer/layout-02";
import HeroArea from "@containers/hero/layout-01";
import ServicesArea from "@containers/service/layout-01";
import PortfolioArea from "@containers/portfolio/layout-04";
import PortfolioArea2 from "@containers/portfolio/layout-06";
import AwardsArea from "@containers/awards/layout-01";
import TestimonialArea from "@containers/testimonial/layout-01";
import BlogArea from "@containers/blog/layout-01";

const IndexPage = ({ data }) => {
    const content = normalizedData(data?.homePage?.content || []);

    return (
        <Layout pageTitle="Home Default">
            <Header
                data={{
                    ...data.header,
                    ...data.navigation,
                    socials: data.site.siteMetadata.socials,
                }}
            />
            <main className="main-page-wrapper">
                <HeroArea
                    data={{
                        ...content["hero-section"],
                        socials: data.site.siteMetadata.socials,
                    }}
                />
                <ServicesArea data={content["service-section"]} />
                <PortfolioArea data={content["portfolio-section"]} />
                <PortfolioArea2 data={content["portfolio-section-2"]} />
                <AwardsArea data={content["awards-section"]} />
                <TestimonialArea data={content["testimonial-section"]} />
                <BlogArea
                    data={{
                        ...content["blog-section"],
                        blogs: data?.allArticle?.nodes,
                    }}
                />
            </main>
            <Footer data={{
                ...data.footer,
                socials: data.site.siteMetadata.socials
            }} className="section-separator" />
        </Layout>
    );
};

export const query = graphql`
    query DefaultPageQuery {
        site {
            ...Site
        }
        header: general(section: { eq: "header-1" }) {
            ...Header01
        }
        navigation: general(section: { eq: "menu-default" }) {
            menu {
                ...Menu01
            }
        }
        footer: general(section: { eq: "footer-2" }) {
            ...Footer02
        }
        homePage(title: { eq: "home" }) {
            content {
                ...Content01
            }
        }
        allArticle(limit: 3) {
            nodes {
                ...Article
            }
        }
    }
`;

IndexPage.propTypes = {
    data: PropTypes.shape({
        site: PropTypes.shape({
            siteMetadata: PropTypes.shape({
                socials: PropTypes.arrayOf(PropTypes.shape({})),
                contact: PropTypes.shape({
                    phone: PropTypes.string,
                    email: PropTypes.string,
                }),
                getform_url: PropTypes.string,
            }),
        }),
        homePage: PropTypes.shape({
            content: PropTypes.arrayOf(PropTypes.shape({})),
        }),
        allArticle: PropTypes.shape({
            nodes: PropTypes.arrayOf(PropTypes.shape({})),
        }),
        navigation: PropTypes.shape({}),
        header: PropTypes.shape({}),
        footer: PropTypes.shape({}),
    }),
};

export default IndexPage;
