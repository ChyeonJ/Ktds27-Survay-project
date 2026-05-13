import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {Layout} from "./Layout.jsx";
import {Main} from "../component/template/Main.jsx";
import {useSelector} from "react-redux";
import {generateRoute} from "../utils/routerUtils.jsx";

export const RouterAppProvider = () => {
    const menuEnv = useSelector(state => state.ui.menu);
    const routes = generateRoute(menuEnv);

    const router = createBrowserRouter([
        {
            path: '/',
            element: <Layout/>,
            children: [
                {
                    path: '',
                    element: <Main/>
                },
                ...routes
            ]
        }
    ])
    return <RouterProvider router={router}/>
}
