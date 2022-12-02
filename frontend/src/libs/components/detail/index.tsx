import { useParams } from 'react-router-dom'

import { useNotes } from '../../hooks/useNotes'

import { DATE } from '../../helpers/transfomr-date'

import { Form } from '../form'

import {
  Description,
  DetailContainer,
  Important,
  Time,
  Title,
  Edit
} from './styles'

export const Detail: React.FC = () => {
  const { id } = useParams()
  const {
    note,
    isEdit,
    setIsEdit,
    toggleImportantNote
  } = useNotes()

  return (
    <DetailContainer>
      { isEdit ? (
        <Form />
      ) : (
        <>
          <Title>{ note.title }</Title>
          <Time dateTime={ note.createdAt } >Creado: { DATE(note.createdAt) }</Time>
          <Description>{ note.description }</Description>
          <Important type="button" onClick={ () => toggleImportantNote(Number(id), !note.important) }>{ note.important ? 'Is important' : 'Not is important' }</Important>
          <Edit type="button" onClick={ () => setIsEdit(true) }>Edit this Note</Edit>
        </>
      ) }
    </DetailContainer>
  )
}
