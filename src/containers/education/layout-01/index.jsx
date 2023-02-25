import React from "react";
import PropTypes from "prop-types";
import cn from "clsx";
import { Timeline, TimelineCard } from "@ui/timeline";
import { InnerType } from "@utils/types";
import ContentTitle from "@components/content-title";

const EducationArea = ({ data, id }) => {
    return (
        <div className="personal-experience-inner mt--40" id={id}>
            <div className="row">
                {data?.inner?.map((content, i) => (
                    <div
                        className={cn(
                            "col-lg-6 col-12",
                            i !== 0 && "mt_md--60 mt_sm--60"
                        )}
                        key={content.id}
                    >
                        <div className="contnet">
                            {content?.section_title && (
                                <ContentTitle {...content.section_title} />
                            )}
                            {content?.items && (
                                <Timeline>
                                    {content.items?.map((item) => (
                                        <TimelineCard
                                            key={item.id}
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
    );
};

EducationArea.propTypes = {
    id: PropTypes.string,
    data: PropTypes.shape({
        inner: PropTypes.arrayOf(PropTypes.shape(InnerType)),
    }),
};

EducationArea.defaultProps = {
    id: "educations",
};

export default EducationArea;
