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
    ),
    http.get(
        import.meta.env.VITE_BARN_API_BASE_URL + `/chickens/:id`,
        async ({
            request,
            params
        }) => {
            const chicken = chickens.find(
                (c) => c.id.toString() === params.id
            );
            if (!chicken) return new HttpResponse(
                "no such chicken 😐", {
                    status: 404
                }
            );
            return new HttpResponse(JSON.stringify(chicken), {
                status: 200
            })
        }
    ),
    http.post(
        import.meta.env.VITE_BARN_API_BASE_URL + "/chickens",
        async ({
            request,
            params
        }) => {
            const body = await request.json();
            if (
                !body.name || body.name === "" ||
                !body.color || body.color === "") return new HttpResponse(
                    JSON.stringify("name and color needed... 😐"),
                    {status: 400}
                );
                return new HttpResponse(JSON.stringify({
                    id: 10923,
                    name: body.name,
                    color: [ body.color, "#333333" ],
                    traits: [{
                        id: 23,
                        trait: "brave",
                        order: 1
                    }, {
                        id: 25,
                        trait: "sorry",
                        order: 2
                    }, {
                        id: 26,
                        trait: "brave",
                        order: 3
                    }]
                })) 
        }
    )
];
