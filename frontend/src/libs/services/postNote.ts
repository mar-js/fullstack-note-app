import { INote, IPostNote } from '../interfaces'

export const postNote = async ({ title, description }: IPostNote): Promise<INote | void> => {
  try {
    const RESPONSE = await fetch('http://localhost:3003/api/notes/', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        title,
        description
      })
    })
    const { note }: { note: INote } = await RESPONSE.json()

    return note
  } catch (error) {
    return console.error('ERROR IN POST A NOTE: ', { error })
  }
}
