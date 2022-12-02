import { INote } from '../interfaces'

export const getNote = async (id: number): Promise<INote | void> => {
  try {
    const RESPONSE = await fetch(`http://localhost:3003/api/notes/${id}`)
    const { note }: { note: INote } = await RESPONSE.json()

    return note
  } catch (error) {
    return console.error('ERROR IN GET A NOTE: ', { error })
  }
}
