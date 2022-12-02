import { useEffect } from 'react'

import { useNotes } from '../../hooks/useNotes'

import { Note } from '../../components/note'

import {
  Container,
  Title,
  List
} from './styles'

export const Notes: React.FC = () => {
  const { notes, loadNotes } = useNotes()

  useEffect(() => {
    loadNotes()
  }, [])

  return (
    <Container>
      <Title>Notes: </Title>
      <List>
        { notes.map(note => (
          <Note key={ note.id } { ...note } />
        )) }
      </List>
    </Container>
  )
}
