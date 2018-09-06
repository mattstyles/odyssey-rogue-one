
import { debug, transition } from 'core/updates'
import { signal } from 'signals'

export const attachUpdates = () => {
  if (process.env.DEBUG) {
    signal.register(debug)
  }

  signal.register(transition)
}
