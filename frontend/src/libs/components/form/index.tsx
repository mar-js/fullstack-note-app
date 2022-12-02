import { FormEvent, useState } from 'react'
import { useParams } from 'react-router-dom'

import { useNotes } from '../../hooks/useNotes'

import { IForm } from '../../interfaces'

import {
  FormContainer,
  Input,
  Btn,
  Back
} from './styles'

export const Form: React.FC<IForm> = () => {
  const { id: idUrl } = useParams()
  const {
    createdNote,
    upgradeNote,
    isEdit,
    setIsEdit
  } = useNotes()
  const [ newNote, setNewNote ] = useState({
    title: '',
    description: ''
  })

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()

    if (isEdit) {
      setIsEdit(false)

      upgradeNote({
        id: Number(idUrl),
        ...newNote
      })
    } else {
      createdNote(newNote)
    }

    setNewNote({
      title: '',
      description: ''
    })
  }

  const handleChanged = (e: FormEvent) => {
    const { name, value } = e.target as HTMLInputElement

    setNewNote({
      ...newNote,
      [name]: value
    })
  }

  return (
    <>
      <FormContainer onSubmit={ handleSubmit } method="POST" >
        <Input
          onChange={ handleChanged }
          name="title"
          type="text"
          placeholder="My note title...."
          required
        />
        <Input
          onChange={ handleChanged }
          name="description"
          type="text"
          placeholder="Lorem lorem...."
          required
        />
        <Btn type="submit">{ isEdit ? 'Edit' : 'Add' }</Btn>
      </FormContainer>
      { isEdit && <Back type="button" onClick={ () => setIsEdit(false) }>Back</Back> }
    </>
  )
}
