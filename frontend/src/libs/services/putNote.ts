import { INote, IPutNote } from '../interfaces'

export const putNote = async ({
  id,
  title,
  description
}: IPutNote): Promise<INote | void> => {
  try {
    const RESPONSE = await fetch(`http://localhost:3003/api/notes/${id}`, {
      method: 'PUT',
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

export const putImportantNote = async ({
  id,
  important
}: IPutNote): Promise<INote | void> => {
  try {
    const RESPONSE = await fetch(`http://localhost:3003/api/notes/${id}`, {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ important })
    })
    const { note }: { note: INote } = await RESPONSE.json()

    return note
  } catch (error) {
    return console.error('ERROR IN POST A NOTE: ', { error })
  }
}
