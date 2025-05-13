import './App.css'
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import AppLayout from './components/Layouts/AppLayout';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Protected from './Pages/Protected/Protected';
// import Dashboard from './Pages/Dashboard/Dashboard';
import { lazy,Suspense } from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
const Dashboard=lazy(()=>import('./Pages/Dashboard/Dashboard'))
// import StudentDetail from './components/Layouts/StudentDetails/StudentDetail';
const StudentDetail=lazy(()=>import('./components/Layouts/StudentDetails/StudentDetail'))

const isAuthenticated=()=>{
  return localStorage.getItem("login")
}

const PrivateRoute=({children})=>{
  return isAuthenticated()?children:<Navigate to={'/login'}/>
}

const PublicRoute=({children})=>{
  return !isAuthenticated()? children:<Navigate to={"/"}/>
}

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
        element:(
          <Suspense fallback={<h3 className='text-center'>Loading......</h3>}>
            <Protected Component={Dashboard}/>
          </Suspense>
        )
      },
      {
        path:"/student/:id",
        element:(
          <Suspense fallback={<div>Loading......</div>}>
            <StudentDetail/>
          </Suspense>
        )
      }
    ]
  }
])
function App() {
  return (
  <>
    <RouterProvider router={router}/>
  </>
  )
}

export default App
