import { useContext } from 'react'

import { NoteContext } from '../context'

export const useNotes = () => {
  const CONTEXT = useContext(NoteContext)

  if (!CONTEXT) throw new Error('useNotes must be used within a NoteContextProvider')

  return CONTEXT
}
