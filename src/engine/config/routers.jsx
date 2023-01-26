import { Main } from "../../ui/pages/Main";
import { About } from "../../ui/pages/About";
import React from "react";

export const pages = [
    {
        path: "/",
        element: <Main />
    },

    {
        path: "/about",
        element: <About />
    },
]