import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
function Layout({ children, withNav, withFooter }) {
  return (
    <div>
      {withNav && <Navbar />}
      {children}
      {withFooter && <Footer />}
    </div>
  )
}

export default Layout
