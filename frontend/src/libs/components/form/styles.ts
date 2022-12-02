import styled from 'styled-components'

export const FormContainer = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 4rem;
  padding: 2rem 0;
`

export const Input = styled.input`
  width: 30rem;
  padding: 1rem 2rem;
  font-size: 1.5rem;
  margin-bottom: 2rem;
  border: none;
  border-radius: var(--border-radius);
  box-shadow: inset -.2rem -.2rem .1rem var(--color-grey);

  &:focus-visible {
    border: none;
    outline: none;
    box-shadow: .2rem .2rem .4rem var(--color-black);
  }
`

export const Btn = styled.button`
  cursor: pointer;
  font-size: 1.5rem;
  padding: 1rem 4rem;
  background-color: var(--color-blue);
  color: var(--color-white);
  border: none;
  border-radius: var(--border-radius);
  outline: none;

  &:hover {
    color: var(--color-blue);
    background-color: var(--color-white);
    outline: .2rem solid var(--color-blue);
    box-shadow: .4rem .4rem .2rem var(--color-black);
  }
`

export const Back = styled.button`
  cursor: pointer;
  margin-top: 2rem;
  background-color: var(--color-black);
  color: var(--color-white);
  padding: 1rem 2rem;
  border: none;
  outline: none;
  border-radius: 1rem;

  &:hover {
    background-color: var(--color-white);
    color: var(--color-black);
    outline: .1rem solid var(--color-black);
    box-shadow: 0 .5rem .5rem var(--color-black);
  }
`
