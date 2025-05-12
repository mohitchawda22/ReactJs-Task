import './App.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from './components/Layouts/AppLayout';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Protected from './Pages/Protected/Protected';
import Dashboard from './Pages/Dashboard/Dashboard';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import StudentDetail from './components/Layouts/StudentDetails/StudentDetail';


function App() {
  const router =createBrowserRouter([
    {
      path:"",
      element:<AppLayout/>,
      children:[
        {
          path:"/",
          element:<Home/>
        },
        {
          path:"login",
          element:<Login/>
        },
        {
          path:"/dashboard",
          element:<Protected Component={Dashboard}/>
        },
        {
          path:"/studentlist/:name",
          element:<StudentDetail/>
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
