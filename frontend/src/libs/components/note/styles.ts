import styled from 'styled-components'

import { Link } from 'react-router-dom'

export const Item = styled.li`
  padding: 1rem;
  background-color: var(--color-white);
  box-shadow: .6rem .6rem .3rem var(--color-blue),
    inset -.2rem -.2rem .6rem var(--color-blue-light);
  outline: .2rem solid var(--color-black);
  border-radius: var(--border-radius);
`

export const Title = styled.h3`
  font-size: 2rem;
  color: var(--color-blue);
`

export const Time = styled.time`
  padding-left: .5rem;
  color: var(--color-blue-light);
  font-style: italic;
  font-size: 1.2rem;
`

export const Description = styled.p`
  font-size: 1.6rem;
  color: var(--color-black);
  margin: 2rem 0;

`

export const Btns = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
`

const Btn = styled.button`
  width: 100%;
  text-align: center;
  cursor: pointer;
  font-size: 1.2rem;
  font-weight: 600;
  padding: 1rem 2rem;
  margin-bottom: 1rem;
  border: none;
  border-radius: var(--border-radius);
  outline: none;
`

export const Detail = styled(Btn)`
  background-color: var(--color-green);
  color: var(--color-white);

  &:hover {
    background-color: var(--color-white);
    outline: .1rem solid var(--color-green);
    color: var(--color-green);
  }
`

export const Remove = styled(Btn)`
  background-color: var(--color-red);
  color: var(--color-white);

  &:hover {
    background-color: var(--color-white);
    outline: .1rem solid var(--color-red);
    color: var(--color-red);
  }
`

export const LinkTo = styled(Link)`
  width: 100%;
`
