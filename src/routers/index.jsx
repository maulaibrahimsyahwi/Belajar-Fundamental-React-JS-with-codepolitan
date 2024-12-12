import { createBrowserRouter } from "react-router-dom";
import Rootslayouts from "../layouts/Rootslayouts";
import Home from "../pages";
import About from "../pages/about";

export const router = createBrowserRouter ([
    {
        path: "/",
        element: <Rootslayouts></Rootslayouts>, 
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/about",
                element: <About></About>
            }
        ]
    }
]);