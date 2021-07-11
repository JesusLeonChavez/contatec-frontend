import React from "react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
interface LayoutProps {
  children?: React.ReactNode
  withNav: boolean
  withFooter: boolean
}
function Layout({ children, withNav, withFooter }: LayoutProps) {
  return (
    <>
      {withNav && <Navbar />}
      {children}
      {withFooter && <Footer />}
    </>
  )
}

export default Layout
