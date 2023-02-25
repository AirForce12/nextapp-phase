import React from "react";
import PropTypes from "prop-types";
import ServiceCard from "@components/service-card/layout-01";
import { ItemType } from "@utils/types";

const ServiceArea = ({ data, id }) => {
    return (
        <div className="rn-service-area rn-section-gap" id={id}>
            <div className="container">
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

ServiceArea.propTypes = {
    id: PropTypes.string,
    data: PropTypes.shape({
        items: PropTypes.arrayOf(PropTypes.shape(ItemType)),
    }),
};

ServiceArea.defaultProps = {
    id: "features",
};

export default ServiceArea;
