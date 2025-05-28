import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.scss'
import Home from './pages/Home'
import Checkout from './pages/Checkout'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"

function App() {
  const router=createBrowserRouter([
    {
      path:"",
      element:<Home/>,
      children:[
        {
          path:"/chekout",
          element:<Checkout/>
        }
      ]
    }
  ])
  return (
  <>
    <RouterProvider router={router}/>
  </>
  )
}

export default App
