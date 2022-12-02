import { Link } from 'react-router-dom'

import { HeaderContainer, Title } from './styles'

export const Header: React.FC = () => (
  <HeaderContainer>
    <Link to="/">
      <Title>Notes App</Title>
    </Link>
  </HeaderContainer>
)
