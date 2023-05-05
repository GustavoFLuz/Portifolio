import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { Main } from "../pages";
import { PageWrapper } from "../shared/components";

export const router = createBrowserRouter([
    {
        element: <PageWrapper/>,
		children: [
            {
                path: "/",
                element: <Main />
            }
        ]
    },
])