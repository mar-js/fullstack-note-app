import { useEffect } from 'react'

import { useNotes } from '../../hooks/useNotes'

import { Main } from '../../layouts/main'
import { Footer } from '../../layouts/footer'
import { Form } from '../../components/form'

import { LinkTo } from './styles'

export const Home: React.FC = () => {
  const { notes, loadNotes } = useNotes()

  useEffect(() => {
    loadNotes()
  }, [ ])

  return (
    <>
      <Main>
        <Form />
        { notes.length > 0 && <LinkTo to="/notes">View Notes</LinkTo> }
      </Main>
      <Footer />
    </>
  )
}
