import * as React from 'react'
import Home from './components/Home/Home.jsx'
export const ROUTE_LIST  =  [
    {
        name:"Home",
        path: "/",
        element: <Home />,
        authRequired: false
    }
]    