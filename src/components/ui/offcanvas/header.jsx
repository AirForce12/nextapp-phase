import React from "react";
import cn from "clsx";
import PropTypes from "prop-types";
import { X } from "react-feather";
import Logo from "@components/logo";
import { ImageType } from "@utils/types";

const OffcanvasHeader = ({ className, onClick, desc, logo }) => {
    return (
        <div className={cn("menu-top", className)}>
            <div className="menu-header">
                {logo?.src && <Logo image={logo} />}
                <div className="close-button">
                    <button
                        className="close-menu-activation close"
                        onClick={onClick}
                    >
                        <X />
                    </button>
                </div>
            </div>
            {desc && <p className="discription">{desc}</p>}
        </div>
    );
};

OffcanvasHeader.propTypes = {
    className: PropTypes.node,
    onClick: PropTypes.func.isRequired,
    desc: PropTypes.string,
    logo: PropTypes.shape(ImageType),
};

export default OffcanvasHeader;
