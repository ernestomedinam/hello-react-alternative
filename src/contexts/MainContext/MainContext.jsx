import React, { createContext, useReducer } from "react";
import { mainContextReducer, startReducerWith } from "./mainContextReducer";
import PropTypes from "prop-types";

export const MainContextStore = createContext(null);
export const MainContextDispatch = createContext(null);

export const MainContextProvider = (props) => {
    const [store, dispatch] = useReducer(
        mainContextReducer, // this is the reducer function
        {}, // this is an object to add to STORE_INITIAL_VALUES when initializing the reducer
        startReducerWith // this is the function that initializes the reducer with the optional previous argument
    );
    return (
        <MainContextDispatch.Provider value={dispatch}>
            <MainContextStore.Provider value={store}>
                {props.children}
            </MainContextStore.Provider>
        </MainContextDispatch.Provider>
    );
};

MainContextProvider.propTypes = {
    children: PropTypes.node
};

