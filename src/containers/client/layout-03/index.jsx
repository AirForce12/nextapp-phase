import React from "react";
import PropTypes from "prop-types";
import SectionTitle from "@components/section-title";
import ClientCard from "@components/client-card/layout-01";
import { SectionTitleType, ItemType } from "@utils/types";

const ClientArea = ({ data, id }) => {
    return (
        <div
            id={id}
            className="rn-client-area rn-client-style-2 rn-section-gap section-separator"
        >
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        {data?.section_title && (
                            <SectionTitle
                                data-aos="fade-up"
                                data-aos-duration="500"
                                data-aos-delay="100"
                                data-aos-once="true"
                                align="center"
                                {...data.section_title}
                            />
                        )}

                        <div className="skill-style-1">
                            <div className="client-card">
                                {data?.items?.map((item) => (
                                    <ClientCard
                                        key={item.id}
                                        image={item?.images?.[0]}
                                        name={item.title}
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
            </div>
        </div>
    );
};

ClientArea.propTypes = {
    id: PropTypes.string,
    data: PropTypes.shape({
        section_title: PropTypes.shape(SectionTitleType),
        items: PropTypes.arrayOf(PropTypes.shape(ItemType)),
    }),
};

ClientArea.defaultProps = {
    id: "client",
};

export default ClientArea;
