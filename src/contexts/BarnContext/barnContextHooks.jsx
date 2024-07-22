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
            console.error(">>> 📛 error:", error);
            return error;
        }
    }, [BARN_API_BASE_URL, dispatch]);
    const getColors = useCallback(async function() {
        try {
            const response = await fetch(
                `${BARN_API_BASE_URL}/css-colors`
            );
            const body = await response.json();
            if (!response.ok) throw new Error(JSON.stringify(body));
            dispatch({
                type: BARN_DISPATCH_ACTIONS.SET_COLORS,
                payload: body
            });
        } catch(error) {
            console.error(">>> 📛 error:", error.message);
            return error;
        }
    }, [BARN_API_BASE_URL, dispatch]);
    const buyLivestock = useCallback(async function(nature, data) {
        try {
            const response = await fetch(
                `${BARN_API_BASE_URL}/${nature}`, {
                    method: "POST",
                    body: JSON.stringify(data),
                    headers: {
                        "Content-Type": "application/json"
                    }
                }
            );
            const body = await response.json();
            if (!response.ok) throw new Error(JSON.stringify(body));
            if (nature === "chickens") await getChickens();
            return;
        } catch(error) {
            console.error(">>> 📛 error:", error.message);
            return error;
        }
    }, [BARN_API_BASE_URL, getChickens]);
    return {
        getChickens,
        getColors,
        buyLivestock
    };
};
