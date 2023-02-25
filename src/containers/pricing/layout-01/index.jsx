import React from "react";
import PropTypes from "prop-types";
import SectionTitle from "@components/section-title";
import TabContent from "react-bootstrap/TabContent";
import TabContainer from "react-bootstrap/TabContainer";
import TabPane from "react-bootstrap/TabPane";
import Nav from "react-bootstrap/Nav";
import PricingCard from "@components/pricing-card/layout-01";
import Sticky from "@ui/sticky";
import { SectionTitleType, InnerType } from "@utils/types";

const PricingArea = ({ data, id }) => {
    return (
        <div
            className="rn-pricing-area rn-section-gap section-separator"
            id={id}
        >
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-xl-5 mb_md--40 mb_sm--40 small-margin-pricing">
                        <div className="d-block d-lg-flex text-center d-lg-left section-flex flex-wrap align-content-start h-100">
                            {data?.section_title && (
                                <Sticky>
                                    <SectionTitle {...data.section_title} />
                                </Sticky>
                            )}
                        </div>
                    </div>

                    <div className="col-lg-8 col-xl-7">
                        {data?.inner && (
                            <div className="navigation-wrapper">
                                <TabContainer
                                    defaultActiveKey={data.inner[1].id}
                                >
                                    <Nav as="ul">
                                        {data.inner.map((item) => (
                                            <Nav.Item
                                                key={item.id}
                                                as="li"
                                                className={
                                                    item.is_featured
                                                        ? "recommended"
                                                        : ""
                                                }
                                            >
                                                <Nav.Link
                                                    eventKey={item.id}
                                                    className="nav-style"
                                                >
                                                    {item.inner_title}
                                                </Nav.Link>
                                            </Nav.Item>
                                        ))}
                                    </Nav>
                                    <TabContent>
                                        {data.inner.map((pricing) => (
                                            <TabPane
                                                key={pricing.id}
                                                eventKey={pricing.id}
                                            >
                                                <PricingCard
                                                    title={pricing.title}
                                                    subtitle={pricing.subtitle}
                                                    price={pricing.price}
                                                    desc={pricing.description}
                                                    features={pricing.items}
                                                    orderLink={
                                                        pricing.orderLink
                                                    }
                                                    deliveryTime={
                                                        pricing.deliveryTime
                                                    }
                                                    revission={
                                                        pricing.revission
                                                    }
                                                />
                                            </TabPane>
                                        ))}
                                    </TabContent>
                                </TabContainer>
                            </div>
                        )}
                    </div>
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
    }),
};

PricingArea.defaultProps = {
    id: "pricing",
};

export default PricingArea;
