
import { AppearIn } from 'animatron'
import { View } from 'react-basic-kit'

import { H1 } from 'components'
import { push, pop, routes } from 'core/routing'

export const Home = () => (
  <View>
    <H1>Something colourful</H1>
    <h1>Odyssey:Rogue One</h1>
    <button onClick={push({
      route: routes.base
    })}>Go to base</button>
  </View>
)

export const Test = () => (
  <View>
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
  </View>
)
