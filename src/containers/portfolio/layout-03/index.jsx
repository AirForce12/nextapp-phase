import React from "react";
import PropTypes from "prop-types";
import SectionTitle from "@components/section-title";
import PortfolioCard from "@components/portfolio-card/layout-01";
import { ItemType, SectionTitleType } from "@utils/types";

const PortfolioArea = ({ data, id }) => {
    return (
        <div className="rn-portfolio-area rn-section-gap" id={id}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        {data?.section_title && (
                            <SectionTitle
                                align="center"
                                {...data.section_title}
                            />
                        )}
                    </div>
                </div>

                <div className="row mt--10 mt_md--10 mt_sm--10">
                    {data?.items?.map((item) => (
                        <div
                            key={item.id}
                            data-aos="fade-up"
                            data-aos-delay="100"
                            data-aos-once="true"
                            className="col-lg-6 col-xl-6 col-md-6 col-12 mt--30 mt_md--30 mt_sm--30"
                        >
                            <PortfolioCard
                                title={item.title}
                                category={item.category}
                                path={item.path}
                                likeCount={item.likeCount}
                                image={item.images?.[0]}
                                texts={item.texts}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

PortfolioArea.propTypes = {
    id: PropTypes.string,
    data: PropTypes.shape({
        section_title: PropTypes.shape(SectionTitleType),
        items: PropTypes.arrayOf(PropTypes.shape(ItemType)),
    }),
};

PortfolioArea.defaultProps = {
    id: "portfolio",
};

export default PortfolioArea;
