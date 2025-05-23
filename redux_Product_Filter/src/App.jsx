import './App.css'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Applayout from './components/AppLayout/Applayout'
import { lazy, Suspense } from 'react'
const Home = lazy(() => import("./pages/Home"))
const ProductDetail = lazy(() => import("./components/ProductDetail/ProductDetail"))
const ProductStore = lazy(() => import('./components/ProductsStore/ProductStore'))
const Cart = lazy(() => import("./components/Cart/Cart"))
const About = lazy(() => import("./pages/About"))
const Contact = lazy(() => import("./pages/Contact"))
const Login = lazy(() => import("./pages/Login"))
const Register = lazy(() => import("./pages/Register"))
const Checkout=lazy(()=>import("./pages/Checkout"))
const OrderSummary=lazy(()=>import("./pages/OrderSummary"))
import ThemeProvider from './context/ThemeProvider'
import ProtectedRoute from './Routes/ProtectedRoute'
import Loader from './components/ui/loader'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  const router = createBrowserRouter([
    {
      path: "",
      element: <Applayout />,
      children: [
        {
          path: "/",
          element: (
            <Suspense fallback={<Loader />}>
              <Home />
            </Suspense>
          )
        },
        {
          path: "/about",
          element: (
            <Suspense fallback={<Loader />}>
              <About />
            </Suspense>
          )
        },
        {
          path: "/contact",
          element: (
            <Suspense fallback={<Loader />}>
              <Contact />
            </Suspense>
          )
        },
        {
          path: "/products",
          element: (
            <ProtectedRoute>
              <Suspense fallback={<Loader />}>
                <ProductStore />
              </Suspense>
            </ProtectedRoute>
          )
        },
        {
          path: "/product/:productId",
          element: (
            <Suspense fallback={<Loader />}>
              <ProductDetail />
            </Suspense>
          )
        },
        {
          path: "/cart",
          element: (
            <Suspense fallback={<Loader />}>
              <Cart />
            </Suspense>
          )
        },
        {
          path: "/login",
          element: (
            <Suspense>
              <Login />
            </Suspense>
          )
        },
        {
          path: "/register",
          element: (
            <Suspense>
              <Register />
            </Suspense>
          )
        },
        {
          path: "/checkout",
          element: (
            <ProtectedRoute>
              <Suspense fallback={<Loader />}>
                <Checkout />
              </Suspense>
            </ProtectedRoute>
          )
        },
        {
          path: "/order-summary",
          element: (
            <ProtectedRoute>
              <Suspense fallback={<Loader/>}>
                <OrderSummary />
              </Suspense>
            </ProtectedRoute>
          )
        }
      ]
    }
  ])
  return (
    <>
      <ThemeProvider>
        <RouterProvider router={router}></RouterProvider>
        <ToastContainer position="top-right" autoClose={3000}></ToastContainer>
      </ThemeProvider>
    </>
  )
}

export default App
