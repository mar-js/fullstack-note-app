import { useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { useNotes } from '../../hooks/useNotes'

import { Section } from '../../layouts/section'
import { Detail } from '../../components/detail'

export const Details: React.FC = () => {
  const { id } = useParams()
  const { loadNote } = useNotes()

  useEffect(() => {
    loadNote(Number(id))
  }, [])

  return (
    <Section>
      <Detail />
    </Section>
  )
}
