
import { get } from 'lodash/fp'
import { createStructuredSelector } from 'reselect'

export const getBaseNavigation = get('navigation')
export const getTransition = get('transition')

export const getNavigation = createStructuredSelector({
  navigation: getBaseNavigation,
  transition: getTransition
})
