import React, { useState, useEffect, useRef } from "react";
import { Link } from "gatsby";
import Icon from "@ui/icon";

const SubMenu = ({ id, items, activeSubMenus }) => {
    const [isActive, setIsActive] = useState(false);
    const [height, setHeight] = useState(0);
    const ref = useRef(null);

    useEffect(() => {
        const index = activeSubMenus.indexOf(id);
        setIsActive(index > -1)
    }, [activeSubMenus]);

    useEffect(() => {
        setHeight(ref.current.scrollHeight);
    }, [activeSubMenus]);

    return (
        <ul ref={ref}
            className={`sub-menu mobile ${isActive ? 'active' : ''}`}
            style={{ height: isActive ? `${height}px` : 0}}>
            { items?.map(item => (
                <li key={item.id}>
                    <Link
                        className="nav-link"
                        to={item.path}>
                        {item.icon && <Icon name={item.icon} />}
                        {item.text}
                    </Link>
                </li>
            ))}
        </ul>
    )
};

export default SubMenu;
