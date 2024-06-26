import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Home from './Home.jsx'
import ErrorPage from './Error-page.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Products from './Products.jsx'
import Cart from './Cart.jsx'

const router = createBrowserRouter([
  {
    path:"/",
    element:<Home/>,
    errorElement: <ErrorPage/>
  }
  ,
  {
    path:'/Products',
    element: <Products/>,
    errorElement:<ErrorPage/>
  },
  {
    path:'/Cart',
    element:<Cart/>,
    errorElement:<ErrorPage/>
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
