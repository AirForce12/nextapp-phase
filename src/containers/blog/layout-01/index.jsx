import React from "react";
import clsx from "clsx";
import PropTypes from "prop-types";
import SectionTitle from "@components/section-title";
import BlogCard from "@components/blog-card/layout-01";
import { SectionTitleType, BlogType } from "@utils/types";

const BlogArea = ({ data, id, classname = "", separator = true }) => {
    return (
        <div
            className={clsx(
                "rn-blog-area rn-section-gap",
                classname,
                separator && "section-separator"
            )}
            id={id}
        >
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        {data?.section_title && (
                            <SectionTitle
                                {...data.section_title}
                                align="center"
                                data-aos="fade-up"
                                data-aos-duration="500"
                                data-aos-delay="500"
                                data-aos-once="true"
                            />
                        )}
                    </div>
                </div>
                <div className="row row--25 mt--30 mt_md--10 mt_sm--10">
                    {data?.blogs?.map((blog) => (
                        <div
                            key={blog.slug}
                            data-aos="fade-up"
                            data-aos-duration="500"
                            data-aos-delay="400"
                            data-aos-once="true"
                            className="col-lg-6 col-xl-4 mt--30 col-md-6 col-sm-12 col-12 mt--30"
                        >
                            <BlogCard
                                title={blog.title}
                                id={blog.id}
                                slug={blog.slug}
                                category={blog.category}
                                image={blog.image}
                                date={blog.date}
                                content={blog.content}
                                readingTime={blog.readingTime}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

BlogArea.propTypes = {
    id: PropTypes.string,
    data: PropTypes.shape({
        section_title: PropTypes.shape(SectionTitleType),
        blogs: PropTypes.arrayOf(PropTypes.shape(BlogType)),
    }),
};

BlogArea.defaultProps = {
    id: "blog",
};

export default BlogArea;
