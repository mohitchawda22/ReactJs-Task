import './App.css'
import ProductStore from './components/ProductsStore/ProductStore'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import {createBrowserRouter,RouterProvider} from "react-router-dom"
import Applayout from './components/AppLayout/Applayout'
import Home from './pages/Home'
import ProductDetai from './components/ProductDetail/ProductDetail'

function App() {
const router=createBrowserRouter([
  {
    path:"",
    element:<Applayout/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/products",
        element:<ProductStore/>
      },
      {
        path:"/product/:id",
        element:<ProductDetai/>
      }
    ]
  }
])
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
