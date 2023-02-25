import React, { useState } from "react";
import PropTypes from "prop-types";
import VisibilitySensor from "react-visibility-sensor";

const ProgressBar = ({ title, value }) => {
    const [focus, setFocus] = useState(false);
    const visibleChangeHandler = (isVisible) => {
        if (isVisible) {
            if (!focus) {
                setFocus(true);
            }
        }
    };

    return (
        <VisibilitySensor
            offset={{ top: 50 }}
            onChange={(isVisible) => visibleChangeHandler(isVisible)}
        >
            {({ isVisible }) => (
                <div className="progress-charts">
                    {title && <h6 className="heading heading-h6">{title}</h6>}
                    <div className="progress">
                        <div
                            className="progress-bar wow fadeInLeft"
                            data-wow-duration="0.5s"
                            data-wow-delay=".3s"
                            role="progressbar"
                            style={{ width: focus ? value + "%" : 0 }}
                            aria-valuenow={value}
                            aria-valuemin="0"
                            aria-valuemax="100"
                        >
                            <span className="percent-label">{value}%</span>
                        </div>
                    </div>
                </div>
            )}
        </VisibilitySensor>
    );
};

ProgressBar.propTypes = {
    title: PropTypes.string,
    value: PropTypes.number.isRequired,
};

export default ProgressBar;
