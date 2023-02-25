import React, { useState, Fragment } from "react";
import PropTypes from "prop-types";
import SubMenu from "@components/sub-menu";
import Social, { SocialLink } from "@ui/social";
import Button from "@ui/button";
import { Offcanvas, OffcanvasHeader, OffcanvasBody } from "@ui/offcanvas";
import Icon from "@ui/icon";
import clsx from "clsx";
import { MenuType, SocialType, ImageType } from "@utils/types";
import { Link } from "gatsby";

const PopupMenu = ({ isOpen, onClick, menus, socials, slogan, logo, button }) => {
    const [activeSubMenus, setActiveSubMenus] = useState([]);

    const toggleActiveSubMenuHandler = (id) => {
        const data = [...activeSubMenus];
        const {res, index} = isSubMenuActive(id)
        if (res) {
            data.splice(index, 1);
            setActiveSubMenus([...data]);
        } else {
            setActiveSubMenus([...data, id]);
        }
    }

    const isSubMenuActive = (id) => {
        const index = activeSubMenus.indexOf(id);
        return {res: (index > -1), index}
    }

    return (
        <Offcanvas isOpen={isOpen} onClick={onClick}>
            <OffcanvasHeader logo={logo} desc={slogan} onClick={onClick} />
            <OffcanvasBody>
                {menus && (
                    <ul className="primary-menu nav nav-pills">
                        {menus.map(({ id, text, path, subMenu }) => (
                            <Fragment key={id}>
                                {subMenu ? (
                                    <li className="nav-item"
                                        key={id}
                                        onClick={() => toggleActiveSubMenuHandler(id)}>
                                        <a className={`nav-link smoth-animation ${isSubMenuActive(id).res ? 'active' : ''}`}>
                                            {text}
                                            <Icon name="ChevronDown" />
                                        </a>
                                        <SubMenu id={id}
                                                 items={subMenu}
                                                 activeSubMenus={activeSubMenus} />
                                    </li>
                                ): (
                                    <li className="nav-item" key={id}>
                                        <Link
                                            className="nav-link smoth-animation"
                                            to={path}
                                            onClick={onClick}
                                        >
                                            {text}
                                        </Link>
                                    </li>
                                )}
                            </Fragment>
                        ))}
                    </ul>
                )}

                {/*<Button path="#"
                        className={`mr--10 p-4 d-block d-lg-inline`}
                        onClick={toggleTheme} >
                    <span style={{ fontSize: theme === "dark" ? 20 : 24, opacity: theme ? 1 : 0, verticalAlign: "middle"}}>
                        {theme === "dark" ? "🌙" : "🌞️"}
                    </span>
                </Button>*/}
                {button && (
                    <Button
                        path={button?.path}
                        className={clsx(button?.className, "mt-4 no-shadow fw-bold")}
                        styles={{width: 'max-content'}}
                    >
                        <span>{button?.content}</span>
                    </Button>
                )}

                {socials && (
                    <div className="social-share-style-1 mt--40">
                        <span className="title">find with me</span>
                        <Social>
                            {socials.map((social) => (
                                <SocialLink key={social.id} path={social.path}>
                                    <Icon name={social.icon} />
                                </SocialLink>
                            ))}
                        </Social>
                    </div>
                )}
            </OffcanvasBody>
        </Offcanvas>
    );
};

PopupMenu.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired,
    menus: PropTypes.arrayOf(PropTypes.shape(MenuType)).isRequired,
    socials: PropTypes.arrayOf(PropTypes.shape(SocialType)),
    slogan: PropTypes.string,
    logo: PropTypes.shape(ImageType),
};

export default PopupMenu;
