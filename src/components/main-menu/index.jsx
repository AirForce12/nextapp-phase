import React from "react";
import PropTypes from "prop-types";
// import { Link } from "react-scroll";
import { Link } from "gatsby";
import cn from "clsx";
import Icon from "@ui/icon";
import { MenuType } from "@utils/types";

const MainMenu = ({ menus, className, navId }) => {
    return (
        <nav
            id={navId}
            className={cn("mainmenu-nav navbar-example2", className)}
        >
            <ul className="primary-menu nav nav-pills">
                {menus.map(({ id, text, path, icon, subMenu }) => (
                    <li
                        key={id}
                        className={`nav-item ${subMenu ? "pe-4" : ""}`}
                    >
                        <Link
                            activeClass="active"
                            className="nav-link smoth-animation font-semibold"
                            // className="nav-link"
                            // href={`${path}`}
                            to={subMenu ? "" : path}
                            // spy={true}
                            // smooth={true}
                            // offset={-50}
                            // duration={500}
                        >
                            {icon && <Icon name={icon} />}
                            {text}
                            {subMenu && (
                                <Icon
                                    name="ChevronDown"
                                    className="position-absolute top-50 end-0 translate-middle-y"
                                />
                            )}
                        </Link>
                        {subMenu && (
                            <ul className={"sub-menu"}>
                                {subMenu?.map((item) => (
                                    <li key={item.id}>
                                        <Link
                                            className="nav-link font-semibold"
                                            to={item.path}
                                        >
                                            {item.icon && (
                                                <Icon name={item.icon} />
                                            )}
                                            {item.text}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </li>
                ))}
            </ul>
        </nav>
    );
};

MainMenu.propTypes = {
    menus: PropTypes.arrayOf(PropTypes.shape(MenuType)).isRequired,
    navId: PropTypes.string,
    className: PropTypes.string,
};

MainMenu.defaultProps = {
    navId: "sideNav",
};

export default MainMenu;
