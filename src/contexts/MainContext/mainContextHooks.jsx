import { useCallback, useContext } from "react";
import { MainContextDispatch, MainContextStore } from "./MainContext";
import { MAIN_DISPATCH_ACTIONS } from "./mainContextReducer";

export function useStore() {
    const store = useContext(MainContextStore);
    if (!store) throw new Error(
        "can't reach store context, the component trying to query the store may be outside of the context provider wrapper scope 😯"
    );
    return store;
};

export function useActions() {
    const dispatch = useContext(MainContextDispatch);
    if (!dispatch) throw new Error(
        "can't reach dispatch context, the component calling the action may be outside of the context provider wrapper scope 😯"
    );
    const { GEEKS_API_URL, demoItems } = useStore();
    const toggleColor = useCallback(async function(index) {
        const newDemoItems = demoItems.map(
            (item, mapIndex) => {
                if (index === mapIndex) {
                    if (item.background === item.initial) {
                        item.background = "orange";
                    } else item.background = item.initial
                }
                return item;
            });
        dispatch({
            type: MAIN_DISPATCH_ACTIONS.TOGGLE_ITEM_COLOR,
            payload: newDemoItems
        });
    }, [demoItems, dispatch]);
    const getSongs = useCallback(async function() {
        /*
            Fetches to 4Geeks song api to get available songs as an array 
            of song objects; dispatches set-songs with fetched songs as payload.
            Takes no arguments; returns an array with [body, statusCode].
        */
        try {
            const response = await fetch(
                `${GEEKS_API_URL}/sound/songs`
            );
            const body = await response.json();
            if (!response.ok) return [body, response.status];
            const songsWithParsedUrl = body.songs.map((song) => { 
                // here we map songs to create an array of identical song objects 
                // except that their url now includes the base api url
                song.url = `${GEEKS_API_URL}${song.url}`;
                return song;
            });
            dispatch({
                type: MAIN_DISPATCH_ACTIONS.SET_SONGS,
                payload: songsWithParsedUrl
            });
        } catch(error) {
            return [error, error.code || 500];
        }
    }, [GEEKS_API_URL, dispatch]);
    return { 
        // this is what this custom action hook returns when invoked: 
        // functions that do something and then dispatch a specific action to modify the store.
        getSongs,
        toggleColor
    };
};
