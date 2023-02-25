import React from "react";
import PropTypes from "prop-types";
import SectionTitle from "@components/section-title";
import TabContent from "react-bootstrap/TabContent";
import TabContainer from "react-bootstrap/TabContainer";
import TabPane from "react-bootstrap/TabPane";
import Nav from "react-bootstrap/Nav";
import Sticky from "@ui/sticky";
import ClientCard from "@components/client-card/layout-01";
import { SectionTitleType, InnerType } from "@utils/types";

const ClientArea = ({ data, id }) => {
    return (
        <div
            className="rn-client-area rn-section-gap section-separator"
            id={id}
        >
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        {data?.section_title && (
                            <SectionTitle {...data.section_title} />
                        )}
                    </div>
                </div>

                <div className="row row--25 mt--50 mt_md--40 mt_sm--40">
                    <div className="col-12">
                        {data?.inner && (
                            <TabContainer defaultActiveKey={data.inner[0].id}>
                                <div className="row">
                                    <div className="col-lg-4">
                                        <div className="d-flex flex-wrap align-content-start h-100">
                                            <Sticky className="w-100">
                                                <Nav
                                                    variant="pills"
                                                    className="tab-navigation-button flex-column"
                                                >
                                                    {data.inner.map((item) => (
                                                        <Nav.Item key={item.id}>
                                                            <Nav.Link
                                                                eventKey={
                                                                    item.id
                                                                }
                                                            >
                                                                {
                                                                    item.inner_title
                                                                }
                                                            </Nav.Link>
                                                        </Nav.Item>
                                                    ))}
                                                </Nav>
                                            </Sticky>
                                        </div>
                                    </div>
                                    <div className="col-lg-8">
                                        <TabContent>
                                            {data.inner.map((client) => (
                                                <TabPane
                                                    eventKey={client.id}
                                                    key={client.id}
                                                >
                                                    <div className="client-card">
                                                        {client?.items?.map(
                                                            (item) => (
                                                                <ClientCard
                                                                    key={
                                                                        item.id
                                                                    }
                                                                    image={
                                                                        item
                                                                            .images?.[0]
                                                                    }
                                                                    name={
                                                                        item.title
                                                                    }
                                                                    path={
                                                                        item.path
                                                                    }
                                                                />
                                                            )
                                                        )}
                                                    </div>
                                                </TabPane>
                                            ))}
                                        </TabContent>
                                    </div>
                                </div>
                            </TabContainer>
                        )}
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
        inner: PropTypes.arrayOf(PropTypes.shape(InnerType)),
    }),
};

ClientArea.defaultProps = {
    id: "clients",
};

export default ClientArea;
