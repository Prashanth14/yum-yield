import React from "react";
import ReactDOM from "react-dom/client"
import Header from "./componenets/Header";
import Body from "./componenets/Body";
import About from "./componenets/About";
import Contact from "./componenets/Contact";
import Error from "./componenets/Error";
import { BrowserRouter, RouterProvider, createBrowserRouter
 } from "react-router-dom";
 
const AppLayout = () => {
    return(
        <div className="app">
            <Header />
            <Body />
        </div>
    );
};

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        errorElement: <Error />
    },
    {
        path: "/about",
        element: <About />,
        errorElement: <Error />
    },
    {
        path: "/contact",
        element: <Contact />,
        errorElement: <Error />
    }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<RouterProvider router={appRouter}/>);




