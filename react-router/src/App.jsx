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
import Users from './components/Layouts/Users/Users';

function App() {

  const UserList=({params})=>{
    const id=params.id
    return {id,message:`hello ,user for ID ${id}`}
  }

  const dashboardLoader=()=>{
    const user={name:"mohit",role:"admin"}
    return user
  }

  const router =createBrowserRouter([
    {
      path:'',
      element:<AppLayout/>,
      loader:dashboardLoader,
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
          element:<User/>,
          loader:UserList
        },
        {
          path:'/users',
          element:<Users/>
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
