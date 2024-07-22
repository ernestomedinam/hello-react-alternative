import React, { useCallback, useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import { useBarn, useBarnActions } from "../../contexts/BarnContext/barnContextHooks";

export const AddLivestock = ({ payload, close }) => {
    const mounted = useRef(null);
    const { cssColors } = useBarn();
    const { getColors, buyLivestock } = useBarnActions();
    const [name, setName] = useState("");
    const [color, setColor] = useState("");
    const [errors, setErrors] = useState({
        name: undefined,
        color: undefined,
        fetch: undefined
    });
    const addLivestock = useCallback(async() => {
        const _errors = {};
        if (name === "" || name.length < 2) _errors.name = 
            "current name is not valid for an animal 😐";
        if (!color) _errors.color =
            "a color is required for your animal 😐";
        if (Object.keys(_errors).length > 0) return setErrors(_errors);
        const result = await buyLivestock("chickens", {
            name: name,
            color: color
        });
        if (result !== undefined) return setErrors((prev) => ({
            ...prev,
            fetch: JSON.stringify(result.message)
        }));
        setName("");
        setColor("");
        close && close();
    }, [name, color, buyLivestock, close]);
    useEffect(() => {
        if (cssColors) return;
        if (mounted.current) return;
        mounted.current = true;
        getColors(); 
    }, [cssColors, getColors]);
    return (
        <React.Fragment>
            <div 
                data-bs-backdrop="static" 
                data-bs-keyboard="false" 
                tabIndex="-1" 
                aria-hidden={!payload.show}
                aria-modal={payload.show}
                role={payload.show ? "dialog" : "none"}
                className={`modal fade ${payload.show ? " show d-block" : ""}`}>
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="staticBackdropLabel">{"Buy chicken form"}</h5>
                            <button 
                                type="button" 
                                className="btn-close" 
                                onClick={(event) => close()} 
                                aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form>
                                {errors.fetch && (
                                    <div className="invalid-feedback d-block">
                                        <p>{errors.fetch}</p>
                                    </div>
                                )}
                                <div className="form-group">
                                    <label htmlFor="chicken-name" className="form-label">{"Name"}</label>
                                    <input 
                                        type="text" 
                                        id={"chicken-name"}
                                        placeholder="chicken name"
                                        value={name}
                                        onChange={(event) => {
                                            setErrors((prev) => ({
                                                ...prev,
                                                name: undefined
                                            }));
                                            setName(event.target.value);
                                        }} 
                                        className="form-control" />
                                    {errors.name && (
                                        <p className="invalid-feedback d-block">
                                            {errors.name}
                                        </p>
                                    )}
                                </div>
                                <div className="form-group">
                                    <label htmlFor="chicken-color" className="form-label">{"Color"}</label>
                                    <select
                                        id="chicken-color" 
                                        className="form-select"
                                        value={color}
                                        onChange={(event) => {
                                            setErrors((prev) => ({
                                                ...prev,
                                                color: undefined
                                            }));
                                            setColor(event.target.value);
                                        }} 
                                        placeholder={"choose color"}>
                                        <option value={undefined} label={""} disabled />
                                        {cssColors?.map((color, index) => (
                                            <option key={index} value={color.value} label={color.label} />
                                        ))}
                                    </select>
                                    {errors.color && (
                                        <p className="invalid-feedback d-block">
                                            {errors.color}
                                        </p>
                                    )}
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button 
                                type="button" 
                                className="btn btn-danger"
                                onClick={(event) => close()}>
                                {"Abort"}
                            </button>
                            <button 
                                type="button"
                                onClick={addLivestock} 
                                className="btn btn-success">
                                {"Buy"}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className={payload.show ? "modal-backdrop show" : "modal-backdrop fade"} style={{pointerEvents: "none"}} />
        </React.Fragment>
    );
};

AddLivestock.propTypes = {
    payload: PropTypes.shape({
        show: PropTypes.bool,
        nature: PropTypes.oneOf(["chickens"]),
    }),
    close: PropTypes.func
};
