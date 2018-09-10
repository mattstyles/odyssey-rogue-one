
import { H1 } from 'components'
import { push, pop, routes } from 'core/routing'

import { AppearIn } from 'animatron'

export const Home = () => (
  <div>
    <H1>Something colourful</H1>
    <h1>Odyssey:Rogue One</h1>
    <button onClick={push({
      route: routes.base
    })}>Go to base</button>
  </div>
)

export const Test = () => (
  <div>
    <H1>Base</H1>
    <div>
      <AppearIn in appear delay={{
        enter: 500,
        exit: 0
      }}>
        <H1 inline>This should appear</H1>
      </AppearIn>
    </div>
    <button onClick={pop({})}>Back</button>
  </div>
)
