import React , {lazy, Suspense, useEffect, useState}from "react";
import ReactDOM from "react-dom/client"
import Header from "./componenets/Header";
import Body from "./componenets/Body";
import About from "./componenets/About";
import Contact from "./componenets/Contact";
import Error from "./componenets/Error";
import Shimmer from "./componenets/Shimmer";
// import Grocery from "./componenets/Grocery";
import RestaurantMenu from "./componenets/RestaurantMenu";
import userContext from "../utils/userContext";
import { BrowserRouter, RouterProvider, createBrowserRouter, Outlet
 } from "react-router-dom";
 import { Provider } from "react-redux";
import appStore from "../utils/appStore";

 //Chunking || Code Splitting || Dynamic Bundling || Lazy Loading || Dymanic import

 const Grocery = lazy(() => import("./componenets/Grocery"))
 
const AppLayout = () => {
    const [userName, setUserName] = useState();

    //authentication
    useEffect(() =>{
        //Make an API call and send username and password
        const data = {
            name: "Prashanth Reddy Kadire"
        };
        setUserName(data.name);
    }, []);

    return(
        <Provider store={appStore}>
            <userContext.Provider value={{loggedInUser: userName, setUserName}}>
                <div className="app">
                    <Header />
                    <Outlet />
                </div>
            </userContext.Provider>
        </Provider>
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




