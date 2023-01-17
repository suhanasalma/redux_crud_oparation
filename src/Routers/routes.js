import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import AddPost from "../Pages/AddPost/AddPost";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import UpdatePost from "../Pages/UpdatePost/UpdatePost";
import ViewPost from "../Pages/ViewPost/ViewPost";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/addpost",
        element: <AddPost />,
      },
      {
        path: "/view/:id",
        element: <ViewPost />,
      },
    ],
  },
  // {
  //   path: "*",
  //   element: <ErrorPage />,
  // },
]);