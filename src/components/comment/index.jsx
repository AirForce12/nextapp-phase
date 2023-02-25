import React from "react";
import PropTypes from "prop-types";
import { DiscussionEmbed } from "disqus-react";

const Comment = ({ slug, title }) => {
    const disqusConfig = {
        url: `http://localhost:8000/${slug}`,
        identifier: slug,
        title: title,
    };
    return (
        <div className="pt--50">
            <DiscussionEmbed shortname="inbio-1" config={disqusConfig} />
        </div>
    );
};

Comment.propTypes = {
    slug: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
};

export default Comment;
