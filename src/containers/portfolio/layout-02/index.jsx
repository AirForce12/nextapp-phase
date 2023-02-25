import React from "react";
import PropTypes from "prop-types";
import PortfolioCard from "@components/portfolio-card/layout-01";
import { ItemType } from "@utils/types";

const PortfolioArea = ({ data }) => {
    return (
        <div className="rn-portfolio-area" id="portfolio">
            <div className="container">
                <div className="row mt--10 mt_md--10 mt_sm--10 mt-dec-30">
                    {data?.items?.map((item) => (
                        <div
                            key={item.id}
                            data-aos="fade-up"
                            data-aos-delay="100"
                            data-aos-once="true"
                            className="col-lg-6 col-xl-4 col-md-6 col-12 mt--30 mt_md--30 mt_sm--30"
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
    data: PropTypes.shape({
        items: PropTypes.arrayOf(PropTypes.shape(ItemType)),
    }),
};

export default PortfolioArea;
