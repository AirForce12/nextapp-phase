import React, { useState, useEffect } from "react";
import { ArrowUp } from "react-feather";

const ScrollToTop = () => {
    const [stick, setStick] = useState(false);
    const onClickHandler = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    useEffect(() => {
        const scrollHandler = () => {
            const scrollPos = window.pageYOffset;
            if (scrollPos > 300) {
                setStick(true);
            } else {
                setStick(false);
            }
        };

        window.addEventListener("scroll", scrollHandler);
        return () => {
            window.removeEventListener("scroll", scrollHandler);
        };
    }, [stick]);

    return (
        <button
            type="button"
            className="backto-top"
            onClick={onClickHandler}
            style={{ opacity: stick ? 1 : 0 }}
        >
            <div>
                <ArrowUp />
            </div>
        </button>
    );
};

export default ScrollToTop;
