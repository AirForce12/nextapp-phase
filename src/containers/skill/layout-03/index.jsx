import React from "react";
import PropTypes from "prop-types";
import Image from "@ui/image";
import SectionTitle from "@components/section-title";
import { ItemType, SectionTitleType } from "@utils/types";

const SkillArea = ({ data, id }) => {
    return (
        <div id={id} className="rn-skill-area rn-section-gap section-separator">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        {data?.section_title && (
                            <SectionTitle
                                data-aos="fade-up"
                                data-aos-duration="500"
                                data-aos-delay="100"
                                data-aos-once="true"
                                className="text-center"
                                {...data.section_title}
                            />
                        )}
                        <div className="mt_md--40 mt_sm--40">
                            <ul className="skill-style-1">
                                {data?.items?.map((item) => (
                                    <li
                                        key={item.id}
                                        data-aos="fade-up"
                                        data-aos-duration="500"
                                        data-aos-delay="100"
                                        data-aos-once="true"
                                        title={item.title}
                                    >
                                        {item?.images?.[0]?.src && (
                                            <Image
                                                src={item.images[0].src}
                                                alt={
                                                    item.images[0]?.alt ||
                                                    item.title
                                                }
                                            />
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

SkillArea.propTypes = {
    id: PropTypes.string,
    data: PropTypes.shape({
        section_title: PropTypes.shape(SectionTitleType),
        items: PropTypes.arrayOf(PropTypes.shape(ItemType)),
    }),
};

SkillArea.defaultProps = {
    id: "skill",
};

export default SkillArea;
