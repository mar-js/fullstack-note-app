import styled from 'styled-components'

export const DetailContainer = styled.div`
  width: 100%;
  text-align: center;
  padding: 2rem;
  outline: .1rem solid var(--color-grey);
`

export const Title = styled.h3`
  font-size: 3rem;
  color: var(--color-grey);
`

export const Time = styled.time`
  font-size: 2.5rem;
  color: var(--color-black);
  margin: 2rem 0;
`

export const Btn = styled.button`
  cursor: pointer;
  font-size: 2rem;
  font-weight: 600;
  padding: 1rem 2rem;
  margin: 1rem 0;
  outline: none;
  border: none;
`

export const Important = styled(Btn)`
  background-color: var(--color-grey);
  color: var(--color-white);

  &:hover {
    background-color: var(--color-white);
    color: var(--color-grey);
    outline: .1rem solid var(--color-grey);
    box-shadow: 0 .5rem .5rem var(--color-grey);
  }
`

export const Edit = styled(Btn)`
  background-color: var(--color-green);
  color: var(--color-white);

  &:hover {
    background-color: var(--color-white);
    color: var(--color-green);
    outline: .1rem solid var(--color-green);
    box-shadow: 0 .5rem .5rem var(--color-green);
  }
`

export const Description = styled.p`
  font-size: 2.8rem;
`
