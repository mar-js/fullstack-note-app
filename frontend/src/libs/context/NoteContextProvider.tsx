import { useState } from 'react'

import { NoteContext } from '.'

import {
  IChildren,
  INote,
  IPostNote,
  IPutNote
} from '../interfaces'

import { postNote } from '../services/postNote'
import { getNotes } from '../services/getNotes'
import { getNote } from '../services/getNote'
import { putNote, putImportantNote } from '../services/putNote'
import { deleteNote } from '../services/deleteNote'

export const NoteContextProvider: React.FC<IChildren> = ({ children }) => {
  const [ notes, setNotes ] = useState<INote[] | []>([])
  const [ note, setNote ] = useState<INote>({
    id: 0,
    title: '',
    createdAt: '',
    description: '',
    important: false
  })
  const [ isEdit, setIsEdit ] = useState<boolean>(false)

  const createdNote = async (newNote: IPostNote) => {
    try {
      await postNote({ ...newNote })
    } catch (error) {
      console.error('ERROR POST NOTE', error)
    }
  }

  const loadNotes = async () => {
    try {
      const NOTES = await getNotes()

      setNotes([ ...NOTES as INote[] ])
    } catch (error) {
      console.error('ERROR GET NOTES', error)
    }
  }

  const loadNote = async (id: number) => {
    try {
      const NOTE = await getNote(id)

      setNote({ ...NOTE as INote })
    } catch (error) {
      console.error('ERROR GET NOTES', error)
    }
  }

  const upgradeNote = async (editNote: IPutNote) => {
    try {
      const EDIT_NOTE = await putNote({ ...editNote })

      setNote({ ...EDIT_NOTE as INote })
    } catch (error) {
      console.error('ERROR POST NOTE', error)
    }
  }

  const deletedNote = async (id: number) => {
    try {
      await deleteNote(id)

      setNotes([ ...notes.filter(note => note.id !== id) ])
    } catch (error) {
      console.error('ERROR DELETE NOTE', error)
    }
  }

  const toggleImportantNote = async (id: number, important: boolean) => {
    try {
      const EDIT_NOTE = await putImportantNote({
        id,
        important
      })

      setNote({
        ...note,
        ...EDIT_NOTE as INote
      })
    } catch (error) {
      console.error('ERROR DELETE NOTE', error)
    }
  }

  return (
    <NoteContext.Provider value={ {
      createdNote,
      loadNotes,
      loadNote,
      upgradeNote,
      toggleImportantNote,
      deletedNote,
      notes,
      note,
      isEdit,
      setIsEdit
    } }
    >
      { children }
    </NoteContext.Provider>
  )
}
