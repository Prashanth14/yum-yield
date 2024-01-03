import React , {lazy, Suspense}from "react";
import ReactDOM from "react-dom/client"
import Header from "./componenets/Header";
import Body from "./componenets/Body";
import About from "./componenets/About";
import Contact from "./componenets/Contact";
import Error from "./componenets/Error";
import Shimmer from "./componenets/Shimmer";
// import Grocery from "./componenets/Grocery";
import RestaurantMenu from "./componenets/RestaurantMenu";
import { BrowserRouter, RouterProvider, createBrowserRouter, Outlet
 } from "react-router-dom";

 //Chunking || Code Splitting || Dynamic Bundling || Lazy Loading || Dymanic import

 const Grocery = lazy(() => import("./componenets/Grocery"))
 
const AppLayout = () => {
    return(
        <div className="app">
            <Header />
            <Outlet />
        </div>
    );
};

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <Body />,
            },
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/contact",
                element: <Contact />,
            },
            {
                path: "/restaurants/:resId",
                element: <RestaurantMenu />,
            },
            {
                path: "/grocery",
                element: <Suspense fallback={<h1>Loading...!</h1>}><Grocery /></Suspense>,
            }
        ],
        errorElement: <Error />
    },
   
]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<RouterProvider router={appRouter}/>);




