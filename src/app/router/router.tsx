import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {safe, strict} from './paths'

export const Router = () => {
    const condition = true
    return <RouterProvider router={createBrowserRouter(condition ? safe : strict)} />;
}
