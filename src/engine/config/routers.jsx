import { Main } from "../../ui/pages/Main";
import { About } from "../../ui/pages/About";
import { Hotels } from "../../ui/pages/Hotels";
import React from "react";

 export const routes = {
    home:"/",
    about:"/about",
    hotels:"/hotels",
}
export const pages = [
    {
        path: routes.home,
        element: <Main />
    },

    {
        path: routes.about,
        element: <About />
    },
    {
        path: routes.hotels,
        element: <Hotels/>
    },
]