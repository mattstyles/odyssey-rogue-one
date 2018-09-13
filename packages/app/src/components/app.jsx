
import { ThemeProvider } from 'styled-components'
import { theme } from 'react-basic-kit'

export const App = ({ state, children }) => (
  <ThemeProvider theme={theme}>
    {children}
  </ThemeProvider>
)
