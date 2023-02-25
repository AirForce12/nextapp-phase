import React from "react";
import PropTypes from "prop-types";
import BlogCard from "@components/blog-card/layout-01";
import { BlogType } from "@utils/types";

const BlogArea = ({ data }) => {
    return (
        <div className="rn-blog-area" id="blog">
            <div className="container">
                <div className="row mt-dec-30">
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
                                id={blog.id}
                                title={blog.title}
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
    data: PropTypes.shape({
        blogs: PropTypes.arrayOf(PropTypes.shape(BlogType)),
    }),
};

export default BlogArea;
