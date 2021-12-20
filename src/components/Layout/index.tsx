import { ReactNode } from 'react'
import Header from './Header/index'
import Footer from './Footer/index'

interface Props {
  children: ReactNode
  noFooter?: boolean
}

const Layout = ({ children, noFooter = false }: Props) => {
  return (
    <>
      <Header />
      {children}
      {!noFooter && <Footer />}
    </>
  )
}

export default Layout
