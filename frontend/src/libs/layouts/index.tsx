import { IChildren } from '../interfaces'

import { Header } from './header'

export const Layout: React.FC<IChildren> = ({ children }) => (
  <>
    <Header />
    { children }
  </>
)
