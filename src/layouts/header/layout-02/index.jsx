import React from "react";
import PropTypes from "prop-types";
import cn from "clsx";
import Logo from "@components/logo";
import MainMenu from "@components/main-menu";
import Social, { SocialLink } from "@ui/social";
import BurgerButton from "@ui/burger-button";
import PopupMenu from "@components/popup-menu";
import Icon from "@ui/icon";
import { useOffcanvas } from "@hooks";
import { ImageType, MenuType, SocialType } from "@utils/types";

const Header = ({ className, data }) => {
    const { offcanvas, offcanvasHandler } = useOffcanvas();
    console.log("wowo");
    return (
        <>
            <div className="d-none d-xl-block">
                <header
                    className={cn(
                        "rn-header-area d-flex align-items-start flex-column left-header-style",
                        className
                    )}
                >
                    {data?.logo?.[0]?.src && (
                        <Logo image={data.logo[0]} className="logo-area" />
                    )}
                    {data?.menu && (
                        <MainMenu menus={data.menu} navId="sideNavs" />
                    )}
                    <div className="footer">
                        {data?.socials && (
                            <div className="social-share-style-1 mt--40">
                                <span className="title">find with me</span>
                                <Social>
                                    {data.socials.map((social) => (
                                        <SocialLink
                                            key={social.id}
                                            path={social.path}
                                        >
                                            <Icon name={social.icon} />
                                        </SocialLink>
                                    ))}
                                </Social>
                            </div>
                        )}
                    </div>
                </header>
            </div>
            <div className="header-style-2 d-block d-xl-none">
                <div className="row align-items-center">
                    <div className="col-6">
                        {data?.logo?.[1]?.src && (
                            <div className="header-left">
                                <Logo image={data.logo[1]} />
                            </div>
                        )}
                    </div>
                    <div className="col-6">
                        <div className="header-right text-end">
                            <div className="hamberger-menu">
                                <i
                                    id="menuBtn"
                                    className="feather-menu humberger-menu"
                                ></i>
                            </div>
                            <BurgerButton onClick={offcanvasHandler} />
                        </div>
                    </div>
                </div>
            </div>
            <PopupMenu
                isOpen={offcanvas}
                onClick={offcanvasHandler}
                menus={data?.menu}
                socials={data.socials}
                slogan={data.slogan}
                logo={data?.logo?.[1]}
            />
        </>
    );
};

Header.propTypes = {
    className: PropTypes.string,
    data: PropTypes.shape({
        logo: PropTypes.arrayOf(PropTypes.shape(ImageType)),
        menu: PropTypes.arrayOf(PropTypes.shape(MenuType)),
        socials: PropTypes.arrayOf(PropTypes.shape(SocialType)),
        slogan: PropTypes.string,
    }),
};

export default Header;
