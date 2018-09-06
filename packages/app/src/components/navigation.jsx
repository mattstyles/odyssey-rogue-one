
import { Navigator } from 'raid-navigator'
import { PageGroup, childFactory, mapChildren } from 'animatron'

import { connect, signal } from 'signals'
import { routes, history } from 'core/routing'
import { getNavigation } from 'core/routing/selectors'

import { Home, Test } from 'views'

const AppNavigation = ({
  transition,
  navigation
}) => {
  return (
    <Navigator
      signal={signal}
      navigation={navigation}
      history={history}
      storage={null}
      Component={PageGroup}
      ComponentProps={{
        childFactory: childFactory(transition)
      }}
      mapChildren={mapChildren}
    >
      <Home route={routes.home} />
      <Test route={routes.base} />
    </Navigator>
  )
}

export const Navigation = connect(
  getNavigation,
  AppNavigation
)
