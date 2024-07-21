import React, { useEffect, useRef } from "react";
import { Tooltip as BsTooltip } from "bootstrap";

export const Tooltip = (props) => {
    const ref = useRef(undefined);
    useEffect(() => {
        const tooltip = new BsTooltip(
            ref.current, {
                title: props.text,
                placement: props.placement,
                trigger: "hover"
            }
        );
        // tooltip.hide();
        return () => tooltip.dispose();
    }, [props]);
    return React.cloneElement(props.children, {ref: ref, ...props});
};
