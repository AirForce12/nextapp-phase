import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { WOW } from "wowjs";

const External = () => {
    let AOS;
    useEffect(() => {
        const wow = new WOW({
            offset: 100,
            mobile: false,
            live: false,
        });
        wow.init();

        const AOS = require("aos");
        AOS.init({
            once: true,
        });
    }, []);

    useEffect(() => {
        if (AOS) {
            AOS.refresh();
        }
    });

    return (
        <React.Fragment>
            <Helmet></Helmet>
        </React.Fragment>
    );
};

export default External;
