export const deleteNote = async (id: number): Promise<void | string> => {
  try {
    const RESPONSE = await fetch(`http://localhost:3003/api/notes/${id}`, { method: 'DELETE' })
    const { message }: { message: string } = await RESPONSE.json()

    return message
  } catch (error) {
    return console.error('ERROR IN DELETE A NOTE: ', { error })
  }
}
