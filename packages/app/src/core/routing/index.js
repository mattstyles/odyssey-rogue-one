
import { createActions } from 'raid-navigator'
import createHistory from 'history/createMemoryHistory'
import { TRANSITIONS } from 'animatron'

import { signal } from 'signals'
export { routes } from './routes'

export const history = createHistory()
export const actions = createActions(history)

export const events = {
  push: 'navigation:push',
  pop: 'navigation:pop',
  setTransition: 'navigation:setTransition'
}

export const push = ({
  route,
  transition = TRANSITIONS.INSTANT
}) => () => {
  signal.emit({
    type: events.setTransition,
    payload: { transition }
  })
  actions.push(route)
}

export const pop = ({
  transition = TRANSITIONS.INSTANT
}) => () => {
  signal.emit({
    type: events.setTransition,
    payload: { transition }
  })
  actions.back()
}
