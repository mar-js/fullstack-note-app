import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  padding: 2rem;
`

export const Title = styled.h2`
  font-size: 3rem;
  margin: 2rem 0;
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(25rem, 1fr));
  gap: 1.5rem;
`
