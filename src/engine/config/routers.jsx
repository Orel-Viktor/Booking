import { Main } from "../../ui/pages/Main";
import { About } from "../../ui/pages/About";
import React from "react";

 export const routes = {
    home:"/",
    about:"/about"
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
]