import { Routes, Route } from 'react-router-dom'

import { NoteContextProvider } from './libs/context/NoteContextProvider'

import { Layout } from './libs/layouts'

import { Home } from './libs/pages/home'
import { Notes } from './libs/pages/notes'
import { Details } from './libs/pages/details'
import { NotFound } from './libs/pages/not-found'

function App() {
  return (
    <NoteContextProvider>
      <Layout>
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/notes" element={ <Notes /> } />
          <Route path="/notes/:id" element={ <Details /> } />
          <Route path="*" element={ <NotFound /> } />
        </Routes>
      </Layout>
    </NoteContextProvider>
  )
}

export default App
