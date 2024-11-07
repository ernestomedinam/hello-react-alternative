import { render } from "@testing-library/react";
import { createMemoryRouter, createRoutesFromElements, MemoryRouter, Outlet, Route, RouterProvider, Routes } from "react-router-dom";
import { MainContextProvider } from "../contexts/MainContext/MainContext";
import React from "react";
import { Navbar } from "../components/Navbar/Navbar";
import { Footer } from "../components/Footer/Footer";
import { NotFound } from "../pages/NotFound/NotFound";
import { Home } from "../pages/Home/Home";
import { Demo } from "../pages/Demo/Demo";
import { Single } from "../pages/Single/Single";
import { BarnContextProvider } from "../contexts/BarnContext/BarnContext";
import { Barn } from "../pages/Barn/Barn";
import { Livestock } from "../pages/Livestock/Livestock";

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

export function renderWithContext(
    Component,
    props={}
) {
    return render(
        <MainContextProvider>
            <Component {...props} />
        </MainContextProvider>
    );
};

export function renderAtPath(
    entries=["/"]
) {
    const router = createMemoryRouter(
        createRoutesFromElements(

            <Route 
                path="/" 
                element={(
                    <React.Fragment>
                        {/* <Navbar /> here you could add a navbar for all routes in your app */}
                        <Navbar />
                        <Outlet />
                        <Footer />
                    </React.Fragment>
                )}
                errorElement={
                    <React.Fragment>
                        <Navbar />
                        <NotFound />
                        <Footer />
                    </React.Fragment>
                }>
                {/* Nested Routes: Defines sub-routes for elements to take place of <Oulet /> on parent route element prop. */}
                <Route path= "/" element={<Home />} />
                <Route path="/demo" element={<Demo />} />
                <Route path="/single/:demoItemId" element={ <Single />} />  {/* Dynamic route for single items */}
                <Route path="/barn" element={(
                    <BarnContextProvider>
                        <Outlet />
                    </BarnContextProvider>
                )}>
                    <Route path="" element={<Barn />} />
                    <Route path=":nature/:id" element={<Livestock />} />
                </Route>
            </Route>
        ), {
            basename: "/",
            initialEntries: entries
        }
    )
    render(
        <MainContextProvider>
            <RouterProvider router={router} />
        </MainContextProvider>
    );
    return router;
};
