import './App.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from './components/Layouts/AppLayout';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Home from './pages/Home/Home';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Product from './pages/Product/Product';
import Login from './pages/Login/Login';
import Signin from './pages/Signin/Signin';
import Protected from './pages/Protected/Protected';
import ErrorPage from './pages/Error/ErrorPage';
import Dashboard from './pages/Dashboard/Dashboard';
import User from './components/Layouts/User/User';

function App() {

  const router =createBrowserRouter([
    {
      path:'',
      element:<AppLayout/>,
      children:[
        {
          path:'/',
          element:<Home/>
        },
        {
          path:'/about',
          element:<About/>
        },
        {
          path:'/contact',
          element:<Contact/>
        },
        {
          path:'/product',
          element:<Protected Component={Product}/>
        },
        {
          path:'/dashboard',
          element:<Protected Component={Dashboard}/>
        },
        {
          path:'/login',
          element:<Login/>
        },
        {
          path:'/signin',
          element:<Signin/>
        },
        {
          path:'/user/:name',
          element:<User/>
        },
      ]
    },
    {
      path:'/*',
      element:<ErrorPage/>
    }
  ])

  return (
   <>
    <RouterProvider router={router}></RouterProvider>
   </>
  )
}

export default App
