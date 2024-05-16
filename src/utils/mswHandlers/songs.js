import { http, HttpResponse } from "msw";

export const songs = [{
    id: 1,
    category: "pop",
    name: "Some pop",
    url: "/sound/files/artist/songs/some-pop.mp3"
}, {
    id: 2,
    category: "rap",
    name: "Some rap",
    url: "/sound/files/artist/songs/some-rap.mp3"
}, {
    id: 3,
    category: "jazz",
    name: "Untitled",
    url: "/sound/files/artist/songs/untitled.mp3"
}, {
    id: 4,
    category: "rock",
    name: "Some classic rock",
    url: "/sound/files/artist/songs/some-classic-rock.mp3"
}, {
    id: 5,
    category: "salsa",
    name: "Una salsa",
    url: "/sound/files/artist/songs/una-salsa.mp3"
}];

export const songsHandlers = [
    http.get(
        import.meta.env.VITE_GEEKS_API_BASE_URL + "/sound/songs",
        () => {
            return HttpResponse.json({songs});
        }
    )
];
