import React from "react";
import PropTypes from "prop-types";
import cn from "clsx";
import ProgressBar from "@ui/progress-bar";
import { InnerType } from "@utils/types";
import ContentTitle from "@components/content-title";

const SkillArea = ({ data }) => {
    return (
        <div className="container">
            <div className="personal-experience-inner mt--40">
                <div className="row mt--50">
                    {data?.inner?.map((content, i) => (
                        <div
                            className={cn(
                                "col-lg-6 col-md-6 col-12",
                                i !== 0 && "mt_sm--60"
                            )}
                            key={content.id}
                        >
                            <div className="progress-wrapper">
                                <div className="content">
                                    {content?.section_title && (
                                        <ContentTitle
                                            {...content.section_title}
                                        />
                                    )}

                                    {content?.items?.map((item) => (
                                        <ProgressBar
                                            key={item.id}
                                            title={item.title}
                                            value={item.value}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

SkillArea.propTypes = {
    data: PropTypes.shape({
        inner: PropTypes.arrayOf(PropTypes.shape(InnerType)),
    }),
};

export default SkillArea;
