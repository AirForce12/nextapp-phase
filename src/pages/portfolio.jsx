import * as React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { normalizedData } from "@utils";
import Layout from "@layout";
import Header from "@layout/header/layout-01";
import Footer from "@layout/footer/layout-02";
import ClientArea from "@containers/client/layout-01";
import PortfolioArea from "@containers/portfolio/layout-01";
import PortfolioArea2 from "@containers/portfolio/layout-06";
import ResumeArea from "@containers/resume/layout-01";
import EducationArea from "@containers/education/layout-01";
import SkillArea from "@containers/skill/layout-01";
import ExperienceArea from "@containers/experience/layout-01";
import InterviewArea from "@containers/interview/layout-01";

const PortfolioPage = ({ data }) => {
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
                <PortfolioArea
                    classname="pt--150"
                    separator={false}
                    data={content["portfolio-section"]} />
                <PortfolioArea2 data={content["portfolio-section-2"]} />
                <ClientArea data={content["client-section"]} />
                <ResumeArea data={content["resume-section"]}>
                    <EducationArea data={content["education-section"]} />
                    <SkillArea data={content["skill-section"]} />
                    <ExperienceArea data={content["experience-section"]} />
                    <InterviewArea data={content["interview-section"]} />
                </ResumeArea>
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
        homePage(title: { eq: "default-portfolio" }) {
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

PortfolioPage.propTypes = {
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

export default PortfolioPage;
