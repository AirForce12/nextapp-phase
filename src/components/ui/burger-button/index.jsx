import React from "react";
import PropTypes from "prop-types";
import { Menu } from "react-feather";
import Button from "@ui/button";
import cn from "clsx";

const BurgerButton = ({ className, onClick }) => {
    return (
        <Button path="#"
                className={cn(className, "hamberger-menu d-flex align-items-center justify-content-center")}
                onClick={onClick}>
            <Menu size={32} />
        </Button>
    );
};

BurgerButton.propTypes = {
    className: PropTypes.string,
    onClick: PropTypes.func,
};

export default BurgerButton;
