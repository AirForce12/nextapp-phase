import React from "react";
import PropTypes from "prop-types";
import { CardList } from "@ui/card-list";
import BlogCard from "@components/blog-card/layout-02";
import { BlogType } from "@utils/types";

const BlogArea = ({ data }) => {
    return (
        <div
            data-aos="fade-left"
            data-aos-duration="500"
            data-aos-delay="200"
            data-aos-once="true"
            className="rn-blog-area single-card-sticky section-height"
        >
            <div className="inner">
                {data?.title && <h5 className="title">{data.title}</h5>}
                {data?.blogs && (
                    <CardList>
                        {data.blogs?.map((blog) => (
                            <BlogCard
                                key={blog.slug}
                                id={blog.id}
                                title={blog.title}
                                slug={blog.slug}
                                date={blog.date}
                                image={blog.image}
                                content={blog.content}
                            />
                        ))}
                    </CardList>
                )}
            </div>
        </div>
    );
};

BlogArea.propTypes = {
    data: PropTypes.shape({
        title: PropTypes.string,
        blogs: PropTypes.arrayOf(PropTypes.shape(BlogType)),
    }),
};

export default BlogArea;
