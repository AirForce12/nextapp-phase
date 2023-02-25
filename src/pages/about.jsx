import * as React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { normalizedData } from "@utils";
import Layout from "@layout";
import Header from "@layout/header/layout-01";
import Footer from "@layout/footer/layout-02";
import AboutArea from "@containers/about/layout-02";
import SkillArea from "@containers/skill/layout-02";
import ServicesArea from "@containers/service/layout-05";
import PortfolioArea from "@containers/portfolio/layout-04";
import ContactArea from "@containers/contact/layout-01";

const AboutPage = ({ data }) => {
    const content = normalizedData(data?.homePage?.content || []);

    return (
        <Layout pageTitle="Portfolio">
            <Header
                data={{
                    ...data.header,
                    ...data.navigation,
                    socials: data.site.siteMetadata.socials,
                }}
            />
            <main className="main-page-wrapper">
                <AboutArea data={content["about-section"]} classname="pt--150" />
                <div className="sticky-home-wrapper">
                    <div className="container">
                        <div className="row row--30 pt--100 pt_sm--50">
                            <div className="col-lg-6">
                                <ServicesArea
                                    data={content["service-section"]}
                                />
                            </div>
                            <div className="col-lg-6">
                                <ServicesArea
                                    data={content["service-section-2"]}
                                />
                            </div>
                        </div>
                        <div className="row row--30 pt--100 pt_sm--50">
                            <div className="col-lg-6">
                                <SkillArea
                                    data={content["skill-section"]}
                                />
                            </div>
                            <div className="col-lg-6">
                                <SkillArea
                                    data={content["skill-section-2"]}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <PortfolioArea data={content["portfolio-section"]} />
                <ContactArea
                    data={{
                        ...content["contact-section"],
                        socials: data.site.siteMetadata.socials,
                        phone: data.site.siteMetadata?.contact?.phone,
                        email: data.site.siteMetadata?.contact?.email,
                        getform_url: data.site.siteMetadata?.getform_url,
                    }}
                />
            </main>
            <Footer data={{ ...data.footer, socials: data.site.siteMetadata.socials }} className="section-separator" />
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
        homePage(title: { eq: "about" }) {
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

AboutPage.propTypes = {
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

export default AboutPage;
