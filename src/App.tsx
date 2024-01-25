import { ThemeProvider } from 'styled-components'

import theme from './global/styles/theme'
import { GlobalStyle } from './global/styles/global'

function App() {

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
