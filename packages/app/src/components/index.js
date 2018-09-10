
import styled from 'styled-components'

export { App } from './app'

export const H1 = styled.h1`
  display: ${props => props.inline && 'inline-block'};
  color: red;
`
