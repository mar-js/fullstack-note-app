import { IChildren } from '../../interfaces'

import { MainContainer } from './styles'

export const Main: React.FC<IChildren> = ({ children }) => (
  <MainContainer>
    { children }
  </MainContainer>
)
