import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout } from "./Layout.jsx";
import { Main } from "../component/template/Main.jsx";
import SurveyCreate from "../component/template/survey/SurveyCreate.jsx";
import SurveyAnswer from "../component/template/survey/SurveyAnswer.jsx";

export const RouterAppProvider = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "",
          element: <Main />,
        },
        { path: "survey/create", element: <SurveyCreate /> },
        { path: "survey/answer", element: <SurveyAnswer /> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};
