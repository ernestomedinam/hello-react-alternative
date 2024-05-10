import React from "react";
import { createBrowserRouter, createRoutesFromElements, Outlet, Route, RouterProvider } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { Navbar } from "./components/Navbar/Navbar";
import { Demo } from "./pages/Demo/Demo";
import { Footer } from "./components/Footer/Footer";

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
                errorElement={<h1>Not found!</h1>}>
                {/* Nested Routes: Defines sub-routes within the BaseHome component. */}
                <Route path= "/" element={<Home />} />
                <Route path="/demo" element={<Demo />} />
                {/* <Route path="/single/:theId" element={ <Single />} /> */}  {/* Dynamic route for single items */}
            </Route>
        )
    );
    return <RouterProvider router={router}></RouterProvider>;
};
