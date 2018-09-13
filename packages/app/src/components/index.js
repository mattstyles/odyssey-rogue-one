
import styled from 'styled-components'
import c64 from 'colour16/c64'

export { App } from './app'

export const H1 = styled.h1`
  display: ${props => props.inline && 'inline-block'};
  color: ${c64.void};
`
