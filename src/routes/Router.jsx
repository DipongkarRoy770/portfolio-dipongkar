import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home";
import About from "../components/About";
import Service from "../components/Service";
import Contact from "../components/Contact";
import Blog from "../components/Blog";

export const router = createBrowserRouter([
  { 
    path:'/',
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path:"/service",
        element:<Service></Service>
      },
      {
        path:"/contact",
        element:<Contact></Contact>
      },
      {
        path:"/blog",
        element:<Blog></Blog>
      }
    ],
  },
]);
