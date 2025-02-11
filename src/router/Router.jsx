
import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Error from "../Pages/Error";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import AddBook from "../Pages/AddBook";
import BooksDetails from "../Pages/BooksDetails";
import AllBooks from "../Pages/AllBooks";
import BooksTable from "../Pages/BooksTable";
import BooksGrid from "../Pages/BooksGrid";
import BorrowedMeBooks from "../Pages/BorrowedMeBooks";
import UpdateBooks from "../Pages/UpdateBooks";
import PrivateRoute from "./PrivateRoute";

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
          element: <PrivateRoute> <AddBook/></PrivateRoute>,
        },

        {
          path: '/allBooks',
          element:<PrivateRoute> <AllBooks/></PrivateRoute>
        },
        {
          path: '/table',
          element: <BooksTable/>
        },
        {
          path:'/grid',
          element: <BooksGrid/>
        },
        {
          path: '/book/:id',
          element: <PrivateRoute><BooksDetails/></PrivateRoute>,
          loader: ({params}) => fetch(`${import.meta.env.VITE_API_URL}/book/${params.id}`)
        },
        {
          path: '/updateBooks/:id',
          element: <PrivateRoute><UpdateBooks/></PrivateRoute>,
          loader: ({params}) => fetch(`${import.meta.env.VITE_API_URL}/book/${params.id}`)
        },
        {
          path: '/borrowed',
          element: <PrivateRoute><BorrowedMeBooks/></PrivateRoute>
        }
      ]
    },
  ]);

  export default router;