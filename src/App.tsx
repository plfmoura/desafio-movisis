import { ThemeProvider } from 'styled-components'

import theme from './global/styles/theme'
import { GlobalStyle } from './global/styles/global'
import { Router } from './Router'
import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
