import { Router } from 'express'

import { postNote } from '../controllers/notes/post.controllers'
import { getNote, getNotes } from '../controllers/notes/get.controllers'
import { updateNote } from '../controllers/notes/update.controllers'
import { deleteNote } from '../controllers/notes/delete.controllers'

export const ROUTER = Router()

ROUTER.post('/api/notes', postNote)

ROUTER.get('/api/notes', getNotes)
ROUTER.get('/api/notes/:id', getNote)

ROUTER.put('/api/notes/:id', updateNote)

ROUTER.delete('/api/notes/:id', deleteNote)
