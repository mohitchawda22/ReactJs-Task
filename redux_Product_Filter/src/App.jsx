import './App.css'
import ProductStore from './components/ProductsStore/ProductStore'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Applayout from './components/AppLayout/Applayout'
import Home from './pages/Home'
import ProductDetail from './components/ProductDetail/ProductDetail'
import ThemeProvider from './context/ThemeProvider'
import Cart from './components/Cart/Cart'
import About from './pages/About'
import Contact from './pages/Contact'
import Login from './pages/Login'


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
          path:"/about",
          element:<About/>
        },
        {
          path:"/contact",
          element:<Contact/>
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
        },
        {
          path:"/login",
          element:<Login/>
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
