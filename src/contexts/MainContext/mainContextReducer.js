const STORE_INITIAL_VALUES = {
    GEEKS_API_URL: import.meta.env.VITE_GEEKS_API_BASE_URL || "https://playground.4geeks.com",
    songs: undefined,
    demoItems: [{
        id: 1,
        title: "FIRST",
        background: "white",
        initial: "white"
    }, {
        id: 2,
        title: "SECOND",
        background: "white",
        initial: "white"
    }]
};

export const MAIN_DISPATCH_ACTIONS = Object.freeze({
    "SET_SONGS": "set-songs",
    "TOGGLE_ITEM_COLOR": "toggle-item-color"
});

export function mainContextReducer(
    store, // the current reducers state when an action is dispatched
    dispatchedAction, // an action dispatched from one of this contexts action functions
) {
    switch (dispatchedAction.type) {
        case MAIN_DISPATCH_ACTIONS.SET_SONGS:
            return {
                ...store,
                songs: dispatchedAction.payload // update incoming songs, located on payload property of dispatched action
            };
        case MAIN_DISPATCH_ACTIONS.TOGGLE_ITEM_COLOR:
            return {
                ...store,
                demoItems: dispatchedAction.payload // payload is to be new version of demoItems array
            };
        default:
            return store;
    };
};

export function startReducerWith(incomingStore = {}) {
    return Object.assign(
        STORE_INITIAL_VALUES,
        incomingStore
    );
};
