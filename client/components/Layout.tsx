import React, { ReactNode } from 'react'
import Header from './header/header';
import Footer from './footer/footer';
interface ILayoutProps {
    children: ReactNode
}
const Layout = ({ children }: ILayoutProps) => {
  return (
    <div>
        <Header />
        {children}
        <Footer />
    </div>
  )
}

export default Layout