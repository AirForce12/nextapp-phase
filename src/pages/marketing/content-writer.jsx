import * as React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { normalizedData } from "@utils";
import Layout from "@layout";
import Header from "@layout/header/layout-01";
import Footer from "@layout/footer/layout-02";
import HeroArea from "@containers/hero/layout-04";
import Service from "@containers/service/layout-02";
import PricingArea from "@containers/pricing/layout-02";
import ResumeArea from "@containers/resume/layout-01";
import EducationArea from "@containers/education/layout-01";
import SkillArea from "@containers/skill/layout-01";
import ExperienceArea from "@containers/experience/layout-01";
import InterviewArea from "@containers/interview/layout-01";
import BlogArea from "@containers/blog/layout-01";

const ContentWriterPage = ({ data }) => {
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
                <HeroArea
                    data={{
                        ...content["hero-section"],
                        socials: data.site.siteMetadata.socials,
                    }}
                />
                <Service data={content["service-section"]}
                    classname="px-lg-5 mb-lg-5"/>
                <PricingArea data={content["pricing-section"]} />
                <ResumeArea data={content["resume-section"]}>
                    <EducationArea data={content["education-section"]} />
                    <SkillArea data={content["skill-section"]} />
                    <ExperienceArea data={content["experience-section"]} />
                    <InterviewArea data={content["interview-section"]} />
                </ResumeArea>
                <BlogArea
                    classname="mt-5"
                    separator={false}
                    data={{
                        ...content["blog-section"],
                        blogs: data?.allArticle?.nodes,
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
        homePage(title: { eq: "content-writer" }) {
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

ContentWriterPage.propTypes = {
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

export default ContentWriterPage;
