import React from "react";
import PropTypes from "prop-types";
import { TextType, SectionTitleType } from "@utils/types";

const AboutArea = ({ data }) => {
    return (
        <div className="rn-about-area section-height">
            <div className="inner">
                {data?.title && <h5 className="title">{data.title}</h5>}
                {data?.texts?.map((text, i) => (
                    <p key={i} className="about-disc">
                        {text.content}
                    </p>
                ))}
            </div>
        </div>
    );
};

AboutArea.propTypes = {
    data: PropTypes.shape({
        title: PropTypes.string,
        texts: PropTypes.arrayOf(PropTypes.shape(TextType)),
    }),
};

export default AboutArea;
