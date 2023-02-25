import React from "react";
import PropTypes from "prop-types";
import ClientCard from "@components/client-card/layout-02";
import { ItemType } from "@utils/types";

const ClientArea = ({ data }) => {
    return (
        <div className="row mt--50">
            <div className="col-12 p-0">
                <div className="rn-brand-area">
                    <div className="container">
                        <div className="row mb--30">
                            <div className="col-12 text-center">
                                {data?.title && (
                                    <h6 className="title color-lightn m--0">
                                        {data.title}
                                    </h6>
                                )}
                            </div>
                        </div>
                        <div className="row">
                            <div className="brand-wrapper-three mb_dec--30">
                                {data?.items?.map((item) => (
                                    <ClientCard
                                        key={item.id}
                                        image={item?.images?.[0]}
                                        title={item.title}
                                        data-aos="fade-up"
                                        data-aos-duration="1000"
                                        data-aos-delay="300"
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
    data: PropTypes.shape({
        title: PropTypes.string,
        items: PropTypes.arrayOf(PropTypes.shape(ItemType)),
    }),
};

export default ClientArea;
