import React from "react";
import PropTypes from "prop-types";
import SkillShare, { SkillItem } from "@ui/skill-share";
import { InnerType } from "@utils/types";

const SkillArea = ({ data }) => {
    return (
        <div className="rn-skill-area section-height">
            <div className="inner slide">
                {data?.title && <h5 className="title">{data.title}</h5>}
                {data?.inner?.[0] && (
                    <div className="skill-share-inner pt--100">
                        {data.inner[0]?.title && (
                            <span className="title">{data.inner[0].title}</span>
                        )}
                        {data.inner[0]?.items && (
                            <SkillShare>
                                {data.inner[0].items?.map((item) => (
                                    <SkillItem
                                        key={item.id}
                                        image={item.images?.[0]}
                                    />
                                ))}
                            </SkillShare>
                        )}
                    </div>
                )}

                {data?.inner?.[1] && (
                    <div className="skill-share-inner skill-share-inner-width margin-top-25">
                        {data.inner[1]?.title && (
                            <span className="title">{data.inner[1].title}</span>
                        )}
                        {data.inner[1]?.items && (
                            <SkillShare>
                                {data.inner[1].items?.map((item) => (
                                    <SkillItem
                                        key={item.id}
                                        image={item.images?.[0]}
                                    />
                                ))}
                            </SkillShare>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

SkillArea.propTypes = {
    data: PropTypes.shape({
        title: PropTypes.string,
        inner: PropTypes.arrayOf(PropTypes.shape(InnerType)),
    }),
};

export default SkillArea;
