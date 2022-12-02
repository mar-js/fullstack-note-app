import express from 'express'
import cors from 'cors'

import { APP } from './app'

import { ROUTER } from './routes/notes.routes'

// MIDDLEWARE TRANSFER DATA
APP.use(cors())

// MIDDLEWARE PROCESS OBJECT DATA
APP.use(express.json())

// ROUTES NOTES
APP.use(ROUTER)

APP.listen(process.env.PORT, () => console.log(`Sever Open in: http://localhost:${process.env.PORT}`))
