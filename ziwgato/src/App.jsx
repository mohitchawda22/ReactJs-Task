import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.scss'
import Home from './pages/Home'
import Checkout from './pages/Checkout'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { useState } from 'react'
import { IntlProvider } from 'react-intl'
import { message } from './i18n'

function App() {
  const [locale, setLocale] = useState('en')
  const router = createBrowserRouter([
    {
      path: "",
      element: (
        <IntlProvider locale={locale} messages={message[locale]}>
          <Home setLocale={setLocale} locale={locale}/>
        </IntlProvider>
      )
    },
    {
      path: "/checkout",
      element: (
        <IntlProvider locale={locale} messages={message[locale]}>
          <Checkout setLocale={setLocale}/>
        </IntlProvider>
      )
    }
  ])
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
