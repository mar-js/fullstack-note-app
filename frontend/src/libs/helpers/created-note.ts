import { IPostNote } from '../interfaces'

import { postNote } from '../services/postNote'

export const createdNote = async (newNote: IPostNote) => {
  try {
    const NEW_NOTE = await postNote({ ...newNote })

    console.log('POST', NEW_NOTE)
  } catch (error) {
    console.error('ERROR POST NOTE', error)
  }
}
