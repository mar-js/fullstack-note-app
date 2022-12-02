import { Request, Response } from 'express'

import { query } from '../../db'

export const getNotes = async (req: Request, res: Response): Promise<Response<any, Record<string, any>>> => {
  try {
    const RESULT = await query('SELECT * FROM notes ORDER BY createdAt ASC')

    return res.status(200).json({ notes: [ ...RESULT ] })
  } catch (error) {
    return res.status(404).json({ error })
  }
}

export const getNote = async (req: Request, res: Response): Promise<Response<any, Record<string, any>>> => {
  const { id } = req.params as { id: string }

  if (isNaN(Number(id))) return res.status(404).json({ error: 'The ID has to be a number' })

  try {
    const RESULT = await query('SELECT * FROM notes WHERE id = ?', [ id ])

    if (!RESULT.length) return res.status(404).json({ error: 'Note not found' })

    return res.status(200).json({ note: { ...RESULT[0] } })
  } catch (error) {
    return res.status(500).json({ error })
  }
}
