import { IChildren } from '../../interfaces'

import { SectionContainer } from './styles'

export const Section: React.FC<IChildren> = ({ children }) => (
  <SectionContainer>
    { children }
  </SectionContainer>
)
