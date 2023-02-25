import React from "react";
import PropTypes from "prop-types";
import Anchor from "@ui/anchor";
import { MenuType } from "@utils/types";

const WidgetMenu = ({ menu }) => {
    return (
        <ul className="menu-footer">
            {menu.map((item) => (
                <li key={item.id}>
                    <Anchor path={item.path}>{item.text}</Anchor>
                </li>
            ))}
        </ul>
    );
};

WidgetMenu.propTypes = {
    menu: PropTypes.arrayOf(PropTypes.shape(MenuType)),
};

export default WidgetMenu;
