import React from "react";
import PropTypes from "prop-types";
import SectionTitle from "@components/section-title";
import SkillCard from "@components/skill-card";
import { SectionTitleType, ItemType } from "@utils/types";

const EducationArea = ({ data }) => {
    return (
        <div
            id="educations"
            className="rn-education-area rn-section-gap section-separator"
        >
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        {data?.section_title && (
                            <SectionTitle
                                {...data.section_title}
                                className="text-center"
                                data-aos="fade-up"
                                data-aos-duration="500"
                                data-aos-delay="100"
                                data-aos-once="true"
                            />
                        )}
                    </div>
                </div>
                <div className="row mt--10">
                    <div className="col-12 mt_experience">
                        {data?.items?.map((item) => (
                            <SkillCard
                                key={item.id}
                                title={item.title}
                                subtitle={item.subtitle}
                                desc={item.description}
                                timeRange={item.timeRange}
                                path={item.path}
                                image={item.images?.[0]}
                                data-aos="fade-up"
                                data-aos-duration="500"
                                data-aos-delay="100"
                                data-aos-once="true"
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

EducationArea.propTypes = {
    data: PropTypes.shape({
        section_title: PropTypes.shape(SectionTitleType),
        items: PropTypes.arrayOf(PropTypes.shape(ItemType)),
    }),
};

export default EducationArea;
