const BARN_INITIAL_VALUES = {
    chickens: undefined,
    BARN_API_BASE_URL: import.meta.env.VITE_BARN_API_BASE_URL
};

export const BARN_DISPATCH_ACTIONS = Object.freeze({
    "SET_CHICKENS": "set-chickens"
});

export function barnContextReducer(
    state,
    dispatchedAction
) {
    switch (dispatchedAction.type) {
        case BARN_DISPATCH_ACTIONS.SET_CHICKENS: 
            return {
                ...state,
                chickens: dispatchedAction.payload
            };
    };
};

export function startBarnWith(inicomingBarn = {}) {
    return Object.assign(
        BARN_INITIAL_VALUES,
        inicomingBarn
    );
};

