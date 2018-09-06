
import { safe, compress } from 'raid-addons'
import { events } from 'core/routing'

export const debug = safe((state, event) => {
  console.log(event, '::', state)
})

const transitionUpdate = safe((state, { transition }) => {
  return {
    ...state,
    transition
  }
})

export const transition = compress({
  [events.setTransition]: transitionUpdate
})
