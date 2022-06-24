import React, { ReactNode } from 'react'
import Header from './header/header'
interface ILayoutProps {
    children: ReactNode
}
const Layout = ({ children }: ILayoutProps) => {
  return (
    <div>
        <Header />
        {children}
    </div>
  )
}

export default Layout