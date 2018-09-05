
import React, { Fragment } from 'react'
import { ThemeProvider } from 'styled-components'
import { AppearRight } from 'animatron'

export const App = ({ state }) => (
  <ThemeProvider theme={{}}>
    <Fragment>
      <h1>Odyssey:Rogue One</h1>
      <AppearRight in appear delay={{
        enter: 500,
        exit: 0
      }}><p>This uses a component from <code>animatron</code></p></AppearRight>
    </Fragment>
  </ThemeProvider>
)
