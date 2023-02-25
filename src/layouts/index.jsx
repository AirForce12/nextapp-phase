import React, { useContext } from "react";
import PropTypes from "prop-types";
import cn from "clsx";
import { useTheme } from "@hooks";
import ScrollToTop from "@ui/scroll-to-top";
import SEO from "@components/seo";
import "bootstrap/dist/css/bootstrap.min.css";
import "@assets/css/swiper.css";
import "@assets/scss/style.scss";
import "aos/dist/aos.css";
import Client from "./client";
import { StateContext } from "../context-api/toggle-switch-context/theme-mode-state";

const Layout = ({ children, color, className, pageTitle }) => {
    const { theme } = useContext(StateContext);

    return (
        <>
            <SEO
                bodyClass={cn(
                    `template-color-${color} spybody`,
                    className,
                    theme === "light" ? "white-version" : ""
                )}
                titleTemplate={pageTitle}
            />
            {theme && (
                <>
                    <Client />
                    {children}
                    <ScrollToTop />
                </>
            )}
        </>
    );
};

Layout.propTypes = {
    children: PropTypes.node.isRequired,
    color: PropTypes.oneOf([1, 2]),
    className: PropTypes.string,
    pageTitle: PropTypes.string,
};

Layout.defaultProps = {
    color: 1,
};

export default Layout;
