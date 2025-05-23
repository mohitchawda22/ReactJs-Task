import { createBrowserRouter } from 'react-router-dom'

export const Routes=()=> {
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
  return {
    router
  }
}

