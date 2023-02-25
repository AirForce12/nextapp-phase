import React from "react";
import PropTypes from "prop-types";
import cn from "clsx";
import ContentTitle from "@components/content-title";
import { Timeline, TimelineCard } from "@ui/timeline";
import ProgressBar from "@ui/progress-bar";
import { InnerType } from "@utils/types";

const ResumeArea = ({ data }) => {
    return (
        <div className="container" id="resume">
            <div className="personal-experience-inner">
                <div className="row">
                    <div className="personal-experience-inner">
                        <div className="row m--0">
                            {data?.inner?.map((content, i) => (
                                <div
                                    key={content.id}
                                    className={cn(
                                        "col-lg-6 col-12",
                                        i !== 0 && "mt_md--60 mt_sm--60"
                                    )}
                                >
                                    <div className="content">
                                        {content?.section_title && (
                                            <ContentTitle
                                                {...content.section_title}
                                            />
                                        )}
                                        {content?.items && (
                                            <Timeline className="padding-none border-none">
                                                {content.items?.map((item) => (
                                                    <TimelineCard
                                                        key={item.id}
                                                        className="mt--30"
                                                        layout={2}
                                                        title={item.title}
                                                        subtitle={item.subtitle}
                                                        rating={item.rating}
                                                        desc={item.description}
                                                    />
                                                ))}
                                            </Timeline>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

ResumeArea.propTypes = {
    data: PropTypes.shape({
        inner: PropTypes.arrayOf(PropTypes.shape(InnerType)),
    }),
};

export default ResumeArea;
