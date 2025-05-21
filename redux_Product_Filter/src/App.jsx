import './App.css'
import ProductStore from './components/ProductsStore/ProductStore'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"

import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Applayout from './components/AppLayout/Applayout'
import Home from './pages/Home'
import ProductDetail from './components/ProductDetail/ProductDetail'
import ThemeProvider from './context/ThemeProvider'
import Cart from './components/Cart/Cart'


function App() {
  const router = createBrowserRouter([
    {
      path: "",
      element: <Applayout />,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/products",
          element: <ProductStore />
        },
        {
          path: "/product/:productId",
          element: <ProductDetail />
        },
        {
          path:"/cart",
          element:<Cart/>
        }
      ]
    }
  ])
  return (
    <>
      <ThemeProvider>
        <RouterProvider router={router}></RouterProvider>
      </ThemeProvider>
    </>
  )
}

export default App
