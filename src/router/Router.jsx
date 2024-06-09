
import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Error from "../Pages/Error";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import AddBook from "../Pages/AddBook";
import BooksDetails from "../Pages/BooksDetails";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      errorElement: <Error/>,
      children: [
        {
          index: true,
          element: <Home/>
        },
        {
          path: '/login',
          element: <Login/>
        },
        {
          path: '/signUp',
          element: <Register/>
        },
        {
          path: '/addBook',
          element: <AddBook/>
        },
        {
          path: '/book/:id',
          element: <BooksDetails/>,
          loader: ({params}) => fetch(`${import.meta.env.VITE_API_URL}/book/${params.id}`)
        }
      ]
    },
  ]);

  export default router;