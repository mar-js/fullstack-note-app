import { INote } from '../../interfaces'

export const INITIAL_STATE: INote[] = [
  {
    id: 1,
    title: 'First Note',
    createdAt: new Date().toLocaleDateString(),
    description: 'Simple description',
    important: false
  },
  {
    id: 2,
    title: 'Second Note',
    createdAt: new Date().toLocaleDateString(),
    description: 'Simple description',
    important: false
  },
  {
    id: 3,
    title: 'Third Note',
    createdAt: new Date().toLocaleDateString(),
    description: 'Simple description',
    important: false
  }
]
