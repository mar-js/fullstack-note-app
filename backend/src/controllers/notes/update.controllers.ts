import { Request, Response } from 'express'

import { query } from '../../db'

export const updateNote = async (req: Request, res: Response): Promise<Response<any, Record<string, any>>> => {
  const { params: { id }, body } = req

  if (isNaN(Number(id))) return res.status(404).json({ error: 'The ID has to be a number' })

  try {
    const { affectedRows } = await query('UPDATE notes SET ? WHERE id = ?', [ body, id ])

    if (!affectedRows) return res.status(404).json({ error: 'Note does not exist' })

    return res.status(200).json({
      note: {
        id,
        createdAt: new Date().toISOString(),
        ...body
      }
    })
  } catch (error) {
    return res.status(500).json({ error })
  }
}
