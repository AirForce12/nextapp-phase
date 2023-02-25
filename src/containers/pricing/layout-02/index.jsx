import React from "react";
import PropTypes from "prop-types";
import SectionTitle from "@components/section-title";
import PricingCard from "@components/pricing-card/layout-02";
import { SectionTitleType, InnerType, TextType } from "@utils/types";

const PricingArea = ({ data, id }) => {
    return (
        <div
            id={id}
            className="rn-pricing-area pricing-style-2 rn-section-gap section-separator"
        >
            <div className="container">
                <div className="row">
                    <div
                        data-aos="fade-up"
                        data-aos-duration="1000"
                        data-aos-delay="100"
                        data-aos-once="true"
                        className="col-lg-4 col-sm-12"
                    >
                        <div className="title-area-wrapper mb_md--20 mb_sm--20">
                            {data?.section_title && (
                                <SectionTitle {...data.section_title} />
                            )}
                            {data?.texts?.map((text, i) => (
                                <p key={i} className="title-disc">
                                    {text.content}
                                </p>
                            ))}
                        </div>
                    </div>
                    {data?.inner?.map((pricing) => (
                        <div
                            key={pricing.id}
                            data-aos="fade-up"
                            data-aos-duration="1000"
                            data-aos-delay="300"
                            data-aos-once="true"
                            className="col-lg-4 col-md-6 col-sm-12"
                        >
                            <PricingCard
                                title={pricing.title}
                                subtitle={pricing.subtitle}
                                price={pricing.price}
                                features={pricing.items}
                                orderLink={pricing.orderLink}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

PricingArea.propTypes = {
    id: PropTypes.string,
    data: PropTypes.shape({
        section_title: PropTypes.shape(SectionTitleType),
        inner: PropTypes.arrayOf(PropTypes.shape(InnerType)),
        texts: PropTypes.arrayOf(PropTypes.shape(TextType)),
    }),
};

PricingArea.defaultProps = {
    id: "pricing",
};

export default PricingArea;
