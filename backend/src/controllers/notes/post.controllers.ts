import { Request, Response } from 'express'

import { query } from '../../db'

import { INotePost } from '../../interfaces'

export const postNote = async (req: Request, res: Response): Promise<Response<any, Record<string, any>>> => {
  const { title, description }: INotePost = req.body

  try {
    const { insertId: id } = await query('INSERT INTO notes(title, description) VALUES (?, ?)', [ title, description ])

    return res.status(200).json({
      note: {
        id,
        title,
        description
      }
    })
  } catch (error) {
    return res.status(500).json({ error })
  }
}
