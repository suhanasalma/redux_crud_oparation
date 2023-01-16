import { createBrowserRouter } from "react-router-dom";
import AddPost from "../Pages/AddPost/AddPost";
import Home from "../Pages/Home/Home";
import UpdatePost from "../Pages/UpdatePost/UpdatePost";
import ViewPost from "../Pages/ViewPost/ViewPost";

export const router = createBrowserRouter([
   {
      path:'/',
      element:<Home/>
   },
   {
      path:'/addpost',
      element:<AddPost/>
   },
   {
      path:'/view/:id',
      element:<ViewPost/>
   },
])