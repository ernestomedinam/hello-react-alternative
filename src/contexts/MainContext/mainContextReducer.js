const STORE_INITIAL_VALUES = {
    BASE_API_URL: "https://playground.4geeks.com",
    songs: undefined
};

export const MainDispatchActions = Object.freeze({
    "SET_SONGS": "set-songs"
});

export function mainContextReducer(
    store, // the current reducers state when an action is dispatched
    dispatchedAction, // an action dispatched from one of this contexts action functions
) {
    switch (dispatchedAction.type) {
        case MainDispatchActions.SET_SONGS:
            return {
                ...store,
                songs: dispatchedAction.payload // update incoming songs, located on payload property of dispatched action
            };
    };
};

export function startReducerWith(incomingStore={}) {
    return Object.assign(
        STORE_INITIAL_VALUES,
        incomingStore
    );
};
