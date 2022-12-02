import { INote } from '../interfaces'

export const getNotes = async (): Promise<INote[] | void> => {
  try {
    const RESPONSE = await fetch('http://localhost:3003/api/notes')
    const { notes }: { notes: INote[] } = await RESPONSE.json()

    return notes
  } catch (error) {
    return console.error('ERROR IN GET NOTES: ', { error })
  }
}
