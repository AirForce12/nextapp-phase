import React from "react";
import PropTypes from "prop-types";
import { CardList, CardListItem } from "@ui/card-list";
import { ItemType } from "@utils/types";

const ServiceArea = ({ data }) => {
    return (
        <div
            data-aos="fade-left"
            data-aos-duration="500"
            data-aos-delay="200"
            data-aos-once="true"
            className="rn-skill-area single-card-sticky section-height"
        >
            <div className="inner">
                {data?.title && <h5 className="title">{data.title}</h5>}
                {data?.items && (
                    <CardList>
                        {data.items?.map((item) => (
                            <CardListItem key={item.id} path={item.path}>
                                {item.title}
                            </CardListItem>
                        ))}
                    </CardList>
                )}
            </div>
        </div>
    );
};

ServiceArea.propTypes = {
    data: PropTypes.shape({
        title: PropTypes.string,
        items: PropTypes.arrayOf(PropTypes.shape(ItemType)),
    }),
};

export default ServiceArea;
