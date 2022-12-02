import { Request, Response } from 'express'

import { query } from '../../db'

export const deleteNote = async (req: Request, res: Response): Promise<Response<any, Record<string, any>>> => {
  const { id } = req.params as { id: string }

  if (isNaN(Number(id))) return res.status(404).json({ error: 'The ID has to be a number' })

  try {
    const { affectedRows } = await query('DELETE FROM notes WHERE id = ?', [ id ])

    if (!affectedRows) return res.status(404).json({ error: 'Note not found' })

    return res.status(200).json({ message: 'Note deleted' })
  } catch (error) {
    return res.status(500).json({ error })
  }
}
