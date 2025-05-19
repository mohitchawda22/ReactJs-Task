import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css'
import ProductStore from './components/ProductStore/ProductStore'
import 'bootstrap/dist/css/bootstrap.min.css';
import AppLayout from './components/AppLayout/AppLayout';
import Home from './pages/Home';
import ProductDetail from './components/ProductDetail/ProductDetail';

function App() {
  const router=createBrowserRouter([
    {
      path:"",
      element:<AppLayout/>,
      children:[
        {
          path:"/products",
          element:<ProductStore/>
        },
        {
          path:"/product/:id",
          element:<ProductDetail/>
        },
        {
          path:'/',
          element:<Home/>
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
