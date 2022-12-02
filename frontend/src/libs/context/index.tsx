import { createContext } from 'react'

import { IContextNote } from '../interfaces'

export const NoteContext = createContext<IContextNote | null>(null)
