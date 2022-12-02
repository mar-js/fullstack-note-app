import { useNotes } from '../../hooks/useNotes'

import { DATE } from '../../helpers/transfomr-date'

import { INote } from '../../interfaces'

import {
  Item,
  Title,
  Time,
  Description,
  Btns,
  Detail,
  Remove,
  LinkTo
} from './styles'

export const Note: React.FC<INote> = ({
  id,
  title,
  createdAt,
  description
}) => {
  const { deletedNote, loadNote } = useNotes()

  return (
    <Item>
      <Title>
        { title }
        <Time dateTime={ createdAt } >{ DATE(createdAt) }</Time>
      </Title>
      <Description>{ description }</Description>
      <Btns>
        <LinkTo to={ `/notes/${id}` }>
          <Detail onClick={ () => loadNote(id) }>View Details</Detail>
        </LinkTo>
        <Remove onClick={ () => deletedNote(id) }>Removed</Remove>
      </Btns>
    </Item>
  )
}
