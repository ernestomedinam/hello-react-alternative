import React, { createContext, useEffect, useReducer } from "react";
import PropTypes from "prop-types";
import { barnContextReducer, startBarnWith } from "./barnContextReducer";

export const BarnContextState = createContext(null);
export const BarnContextDispatch = createContext(null);

export const BarnContextProvider = (props) => {
    const [state, dispatch] = useReducer(
        barnContextReducer,
        {},
        startBarnWith
    );
    return (
        <BarnContextDispatch.Provider value={dispatch}>
            <BarnContextState.Provider value={state}>
                {props.children}
            </BarnContextState.Provider>
        </BarnContextDispatch.Provider>
    );
};

BarnContextProvider.propTypes = {
    children: PropTypes.node
};
