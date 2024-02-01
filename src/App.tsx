import { ThemeProvider } from 'styled-components'

import theme from './global/styles/theme'
import { GlobalStyle } from './global/styles/global'
import { Router } from './Router'
import { HashRouter, useLocation } from 'react-router-dom'
import { CartProvider } from './contexts/CartContext'
import { useEffect } from 'react'

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo({ left: 0, top: 0, behavior: 'instant' })
    }, 20)
  }, [pathname])

  return null
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CartProvider>
        <HashRouter>
          <ScrollToTop />
          <Router />
        </HashRouter>
        <GlobalStyle />
      </CartProvider>
    </ThemeProvider>
  )
}

export default App
