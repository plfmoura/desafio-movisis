import { ThemeProvider } from 'styled-components'

import theme from './global/styles/theme'
import { GlobalStyle } from './global/styles/global'
import { Router } from './Router'
import { BrowserRouter } from 'react-router-dom'
import { CartProvider } from './contexts/CartContext'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CartProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
        <GlobalStyle />
      </CartProvider>
    </ThemeProvider>
  )
}

export default App
