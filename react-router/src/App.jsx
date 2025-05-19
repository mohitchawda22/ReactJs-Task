import './App.css'
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import { lazy } from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { Suspense } from 'react';
const AppLayout = lazy(() => import("./components/Layouts/AppLayout"))
const About = lazy(() => import("./pages/About/About"))
const Contact = lazy(() => import("./pages/Contact/Contact"))
const Home = lazy(() => import("./pages/Home/Home"))
const Product = lazy(() => import('./pages/Product/Product'))
const Signin = lazy(() => import("./pages/Signin/Signin"))
const ErrorPage = lazy(() => import("./pages/Error/ErrorPage"))
const Dashboard = lazy(() => import("./pages/Dashboard/Dashboard"))
const Login = lazy(() => import("./pages/Login/Login"))
const User = lazy(() => import("./components/Layouts/User/User"))
const Users = lazy(() => import("./components/Layouts/Users/Users"))

function App() {

  const UserList = ({ params }) => {
    const id = params.id
    return { id, message: `hello ,user for ID ${id}` }
  }

  const dashboardLoader = () => {
    const user = { name: "mohit", role: "admin" }
    return user
  }

  const isAuthenticated = () => {
    return localStorage.getItem("currentUser")
  }

  const ProtectedRoute = ({ children }) => {
    return isAuthenticated() ? children : <Navigate to={'/login'} />
  }

  const PublicRoute = ({ children }) => {
    return !isAuthenticated() ? children : <Navigate to={'/'} />
  }

  const router = createBrowserRouter([
    {
      path: '',
      element: <AppLayout />,
      loader: dashboardLoader,
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: '/about',
          element: <About />
        },
        {
          path: '/contact',
          element: <Contact />
        },
        {
          path: 'product',
          element: (
            <ProtectedRoute>
              <Suspense >
                <Product />
              </Suspense>
            </ProtectedRoute>
          )
        },
        {
          path: '/login',
          element: (
            <PublicRoute>
              <Suspense>
                <Login />
              </Suspense>
            </PublicRoute>
          )
        },
        {
          path: '/signin',
          element: (
            <PublicRoute>
              <Suspense>
                <Signin />
              </Suspense>
            </PublicRoute>
          )
        },
        {
          path: '/user/:name',
          element: <User />,
          loader: UserList
        },
        {
          path: '/users',
          element: <Users />
        },
      ]
    },
    {
      path: '/*',
      element: (
        <Suspense>
          <ErrorPage />
        </Suspense>
      )
    }, 
    {
      path: '/dashboard',
      element: (
        <ProtectedRoute>
          <Suspense fallback={<h3 className='text-center my-auto'>Loading Dashboard.....</h3>}>
            <Dashboard />
          </Suspense>
        </ProtectedRoute>
      )
    }
  ])

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
