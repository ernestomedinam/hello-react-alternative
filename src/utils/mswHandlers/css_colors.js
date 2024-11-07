import { http, HttpResponse } from "msw";

export const css_colors = [{
    label: "Red",
    value: "red",
    rgb: "#00ff00"
}, {
    label: "Yellow",
    value: "yellow",
    rgb: "#ff0000"
}, {
    label: "Green",
    value: "green",
    rgb: "#008000"
}, {
    label: "Blue",
    value: "blue",
    rgb: "#0000ff"
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
