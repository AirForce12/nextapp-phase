import React from "react";
import PropTypes from "prop-types";
import cn from "clsx";
import Carousel from "react-bootstrap/Carousel";
import { ChevronLeft, ChevronRight } from "react-feather";
import SectionTitle from "@components/section-title";
import PortfolioCard from "@components/portfolio-card/layout-02";
import { SectionTitleType, ItemType } from "@utils/types";

const PortfolioArea = ({ data, className, id, separator = true }) => {
    return (
        <div
            id={id}
            className={cn(
                "rn-project-area portfolio-style-two rn-section-gap",
                className, separator && "section-separator"
            )}
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
                                className="mb_md--25 mb_sm--25"
                                {...data.section_title}
                            />
                        )}
                    </div>
                </div>
                {data?.items && (
                    <Carousel
                        indicators={false}
                        prevIcon={<ChevronLeft />}
                        nextIcon={<ChevronRight />}
                        data-aos="fade-up"
                        data-aos-duration="1000"
                        data-aos-delay="300"
                        data-aos-once="true"
                    >
                        {data.items?.map((item) => (
                            <Carousel.Item key={item.id}>
                                <PortfolioCard
                                    title={item.title}
                                    description={item.description}
                                    feature_list={item.stringList}
                                    image={item.images?.[0]}
                                />
                            </Carousel.Item>
                        ))}
                    </Carousel>
                )}
            </div>
        </div>
    );
};

PortfolioArea.propTypes = {
    id: PropTypes.string,
    className: PropTypes.string,
    data: PropTypes.shape({
        section_title: PropTypes.shape(SectionTitleType),
        items: PropTypes.arrayOf(PropTypes.shape(ItemType)),
    }),
};

PortfolioArea.defaultProps = {
    id: "portfolio",
};

export default PortfolioArea;
