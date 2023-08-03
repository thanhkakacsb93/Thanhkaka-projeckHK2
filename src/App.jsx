import { useState } from 'react'
import './App.css';
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import Book from './pages/book/Book';
import Header from './component/Header/Header';
import Footer from './component/Footer/Footer';
import Home from './component/Home/Home';
import Logup from './pages/logup/Logup';
import Login from './pages/login/login';
import StorContext from './contexts/stor';
import { Product } from './pages/product/Product';
import FormAdd from './component/Home/addProduct/formAdd';
import Profile from './pages/account/Profile';

const LayOut = () => {
  return (
    <>

      <div className='layout-app'>
        <Header />
        <Outlet />
        <div>
          <Footer />
        </div>
      </div>

    </>

  )

}

const router = createBrowserRouter([
  {
    path: "/",
    element: <LayOut />,
    errorElement: <h1>404 not found</h1>,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "contact",
        element: <Profile />
      },
      {
        path: "book",
        element: <Book />
      },
      {
        path: ":id",
        element: <Product />
      },
      {
        path: "addproduct",
        element: <FormAdd />
      }

    ]
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/login/logup",
    element: <Logup />
  }
]);


function App() {
  const [stateloginUser, setstateloginUser] = useState(false)
  const [stateloginAdm, setstateloginAdm] = useState(false)
  const [quantity, setquantity] = useState("1")
  return (
    <>
      <StorContext.Provider
        value={
          {
            stateloginUser: stateloginUser,
            setstateloginUser,
            stateloginAdm: stateloginAdm,
            setstateloginAdm
          }
        }>
        <RouterProvider router={router} />
      </StorContext.Provider>
    </>
  )
}

export default App
