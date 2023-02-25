import React from "react";
import { Loader } from "react-feather";
import PropTypes from "prop-types";
import cn from "clsx";
import { useDynamicIconImport } from "@hooks";

const Icon = ({ name, onError, className, ...rest }) => {
    const { error, loading, SvgIcon } = useDynamicIconImport(name, {
        onError,
    });

    if (error) {
        return error.message;
    }
    if (loading) {
        return <Loader />;
    }
    if (SvgIcon) {
        return <SvgIcon className={cn(className)} {...rest} />;
    }
    return null;
};

Icon.propTypes = {
    name: PropTypes.string.isRequired,
    onError: PropTypes.func,
    className: PropTypes.string,
};

export default Icon;
