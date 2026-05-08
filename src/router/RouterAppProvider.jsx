import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {Layout} from "./Layout.jsx";
import {Main} from "../component/template/Main.jsx";

export const RouterAppProvider = () => {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <Layout/>,
            children: [
                {
                    path: '',
                    element: <Main/>
                }
            ]
        }
    ])
    return <RouterProvider router={router}/>
}