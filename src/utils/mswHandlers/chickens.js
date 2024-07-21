import { http, HttpResponse } from "msw";

export const chickens = [{
    id: 1,
    name: "Peter",
    color: ["yellow", "#ff0000"],
    traits: [{
        id: 1,
        order: 1,
        trait: "sad",
    }, {
        id: 2,
        order: 2,
        trait: "funny",
    }, {
        id: 3,
        order: 3,
        trait: "lazy",
    }]
}, {
    id: 2,
    name: "Rose",
    color: ["red", "#00ff00"],
    traits: [{
        id: 4,
        order: 1,
        trait: "funny",
    }, {
        id: 5,
        order: 2,
        trait: "cowardly",
    }, {
        id: 6,
        order: 3,
        trait: "brave",
    }]
}];

export const chickensHandlers = [
    http.get(
        import.meta.env.VITE_BARN_API_BASE_URL + "/chickens",
        () => {
            return HttpResponse.json(chickens);
        }
    )
];
