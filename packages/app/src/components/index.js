
import styled from 'styled-components'
import c64 from 'colour16/c64'
import { get } from 'lodash/fp'

export { App } from './app'

const getPrimaryColor = get('theme.color.primary')

export const H1 = styled.h1`
  display: ${props => props.inline && 'inline-block'};
  color: ${props => getPrimaryColor(props) || c64.void};
`
