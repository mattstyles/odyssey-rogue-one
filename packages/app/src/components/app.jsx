
import { ThemeProvider } from 'styled-components'

export const App = ({ state, children }) => (
  <ThemeProvider theme={{}}>
    {children}
  </ThemeProvider>
)
