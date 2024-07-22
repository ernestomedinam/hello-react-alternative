import { http, HttpResponse } from "msw";

export const css_colors = [{
    label: "Red",
    value: "red"
}, {
    label: "Yellow",
    value: "yellow"
}, {
    label: "Green",
    value: "green"
}, {
    label: "Blue",
    value: "blue"
}];

export const cssColorsHandlers = [
    http.get(
        import.meta.env.VITE_BARN_API_BASE_URL + "/css-colors",
        () => {
            return HttpResponse.json(
                css_colors,
                200
            );
        }
    )
];
