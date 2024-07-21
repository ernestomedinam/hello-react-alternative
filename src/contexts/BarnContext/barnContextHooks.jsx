import { useCallback, useContext } from "react";
import { BarnContextDispatch, BarnContextState } from "./BarnContext";
import { BARN_DISPATCH_ACTIONS } from "./barnContextReducer";

export function useBarn() {
    const state = useContext(BarnContextState);
    if (!state) throw new Error(
        "can't react barn state context, the component trying to query the state may be outside of the barn context provider wrapper scope 😯"
    );
    return state;
};

export function useBarnActions() {
    const dispatch = useContext(BarnContextDispatch);
    if (!dispatch) throw new Error(
        "can't react barn dispatch context, the component calling the action may be outside of the barn context provider wrapper scope 😯"
    );
    const {BARN_API_BASE_URL} = useBarn();
    const getChickens = useCallback(async function() {
        try {
            const response = await fetch(
                `${BARN_API_BASE_URL}/chickens`
            );
            const body = await response.json();
            if (!response.ok) throw new Error(
                body
            );
            dispatch({
                type: BARN_DISPATCH_ACTIONS.SET_CHICKENS,
                payload: body
            });
        } catch(error) {
            return error;
        }
    }, [BARN_API_BASE_URL, dispatch]);
    return {
        getChickens
    };
};
