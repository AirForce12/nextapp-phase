import React from "react";
import PropTypes from "prop-types";
import SectionTitle from "@components/section-title";
import ServiceCard from "@components/service-card/layout-01";
import { ItemType, SectionTitleType } from "@utils/types";

const ServicesArea = ({ data, id }) => {
    return (
        <div
            className="rn-service-area rn-section-gap section-separator"
            id={id}
        >
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        {data?.section_title && (
                            <SectionTitle
                                align="center"
                                data-aos="fade-up"
                                data-aos-duration="500"
                                data-aos-delay="100"
                                data-aos-once="true"
                                {...data.section_title}
                            />
                        )}
                    </div>
                </div>
                <div className="row row--25 mt_md--10 mt_sm--10">
                    {data?.items?.map((item) => (
                        <div
                            key={item.id}
                            data-aos="fade-up"
                            data-aos-duration="500"
                            data-aos-delay="100"
                            data-aos-once="true"
                            className="col-lg-6 col-xl-4 col-md-6 col-sm-12 col-12 mt--50 mt_md--30 mt_sm--30"
                        >
                            <ServiceCard
                                title={item.title}
                                description={item.description}
                                path={item.path}
                                icon={item.icon}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

ServicesArea.propTypes = {
    id: PropTypes.string,
    data: PropTypes.shape({
        section_title: PropTypes.shape(SectionTitleType),
        items: PropTypes.arrayOf(PropTypes.shape(ItemType)),
    }),
};

ServicesArea.defaultProps = {
    id: "features",
};

export default ServicesArea;
