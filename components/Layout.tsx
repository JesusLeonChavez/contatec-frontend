import React, { useEffect } from "react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { useRouter } from "next/router"
import NProgress from "nprogress"
interface LayoutProps {
  children?: React.ReactNode
  withNav: boolean
  withFooter: boolean
}
function Layout({ children, withNav, withFooter }: LayoutProps) {
  const router = useRouter()
  useEffect(() => {
    const handleRouteChange = url => {
      console.log(url)
      NProgress.start()
    }
    router.events.on("routeChangeStart", handleRouteChange)

    router.events.on("routeChangeComplete", () => NProgress.done())
    return () => {
      router.events.off("routeChangeStart", handleRouteChange)
    }
  }, [])
  return (
    <>
      {withNav && <Navbar />}
      {children}
      {withFooter && <Footer />}
    </>
  )
}

export default Layout
