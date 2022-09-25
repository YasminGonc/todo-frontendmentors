import { ThemeProvider } from 'styled-components'

import { GlobalStyle } from './styles/global'
import { lightTheme } from './styles/themes/light'
import { darkTheme } from './styles/themes/dark'
import { Header } from './components/Header/Header'

export function App() {

  return (
    <ThemeProvider theme={lightTheme}>
      <Header />

      <GlobalStyle />
    </ThemeProvider>
  )
}

