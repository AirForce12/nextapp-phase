import React, { Children } from "react";
import PropTypes from "prop-types";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import SectionTitle from "@components/section-title";
import { SectionTitleType } from "@utils/types";

const ResumeArea = ({ data, children, id }) => {
    const childArr = Children.toArray(children);

    return (
        <div
            className="rn-resume-area rn-section-gap section-separator"
            id={id}
        >
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
                <div className="row mt--45">
                    <div className="col-lg-12">
                        <Tabs
                            defaultActiveKey={childArr?.[0]?.props?.data?.id}
                            className="rn-nav-list"
                        >
                            {childArr.map((item) => (
                                <Tab
                                    key={item.props.data.id}
                                    eventKey={item.props.data.id}
                                    title={item.props.data.title}
                                >
                                    {item}
                                </Tab>
                            ))}
                        </Tabs>
                    </div>
                </div>
            </div>
        </div>
    );
};

ResumeArea.propTypes = {
    id: PropTypes.string,
    data: PropTypes.shape({
        section_title: PropTypes.shape(SectionTitleType),
    }),
    children: PropTypes.node.isRequired,
};

ResumeArea.defaultProps = {
    id: "resume",
};

export default ResumeArea;
