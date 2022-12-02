import styled from 'styled-components'

import { Link } from 'react-router-dom'

export const LinkTo = styled(Link)`
  font-size: 3rem;
  background-color: var(--color-black);
  color: var(--color-white);
  text-transform: uppercase;
  padding: 1rem 2rem;
  border-radius: 1rem;

  &:hover {
    background-color: var(--color-white);
    color: var(--color-black);
    box-shadow: 0 .5rem .5rem var(--color-grey);
    outline: .1rem solid var(--color-grey);
  }
`
