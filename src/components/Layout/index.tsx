import { ReactNode } from 'react'
import Header from './Header/index'
import Footer from './Footer/index'

interface Props {
  children: ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}

export default Layout
