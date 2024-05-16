import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { MainContextProvider } from "../contexts/MainContext/MainContext";

export function renderComponentForTest(
    Component,
    props = {},
    paths = []
) {
    return render(
        <MemoryRouter initialEntries={paths.length > 0
            ? paths
            : ["/"]
        }>
            <MainContextProvider>
                <Component {...props} />
            </MainContextProvider>
        </MemoryRouter>
    );
};
