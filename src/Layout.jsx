import React from "react";
import { createBrowserRouter, createRoutesFromElements, Outlet, Route, RouterProvider } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { Navbar } from "./components/Navbar/Navbar";
import { Demo } from "./pages/Demo/Demo";
import { Footer } from "./components/Footer/Footer";
import { NotFound } from "./pages/NotFound/NotFound";
import { Single } from "./pages/Single/Single";
import { BarnContextProvider } from "./contexts/BarnContext/BarnContext";
import { Barn } from "./pages/Barn/Barn";

export const Layout = (props) => {
    const router = createBrowserRouter(
        createRoutesFromElements(
            // CreateRoutesFromElements function allows you to build route elements declaratively.
            // Create your routes here, if you want to keep the Navbar and Footer in all views, add your new routes inside the containing Route.
            // Root, on the contrary, create a sister Route, if you have doubts, try it!
            // Note: keep in mind that errorElement will be the default page when you don't get a route, customize that page to make your project more attractive.
            // Note: The child paths of the BaseHome element replace the Outlet component with the elements contained in the "element" attribute of these child paths.
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
                    {/* <Route path="/:nature/:id" element={<Livestock />} /> */}
                </Route>
            </Route>
        )
    );
    return <RouterProvider router={router}></RouterProvider>;
};
