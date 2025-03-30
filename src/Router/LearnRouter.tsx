import { createBrowserRouter, Link, RouterProvider } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Login from "./Login";

const router = createBrowserRouter([
  { path: "/Home", element: <Home></Home> },
  { path: "/Login", element: <Login></Login> },
  { path: "/About", element: <About></About>},
]);
const Router = () => {

	return (
    <>
    
    <RouterProvider router={router}></RouterProvider>
    </>
  );
  

};

export default Router;
