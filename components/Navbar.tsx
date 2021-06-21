import Link from "next/link"
import styles from "../styles/components/Navbar.module.css"
import ZIcon from "../components/Icon/Logo"
import Register from "../sections/Home/Register"
import Login from "../sections/Home/Login"
import { Flex } from "@chakra-ui/react"
import { useRouter } from "next/router"
export default function Navbar() {
  const router = useRouter()
  const activeRoute = router.pathname.split("/")[1]
  return (
    <div className={styles.navbarContainer}>
      <nav className={styles.navbarWrapper}>
        <div>
          <Link href="/">
            <a>
              <ZIcon name="logo" />
            </a>
          </Link>
        </div>
        <ul>
          <li className={`${activeRoute === "" && styles.active}`} id="home">
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li
            className={`${activeRoute === "explorar" && styles.active}`}
            id="explorar"
          >
            <Link href="/explorar">
              <a>Explorar anuncio</a>
            </Link>
          </li>
          <li
            className={`${activeRoute === "publicar" && styles.active}`}
            id="publicar"
          >
            <Link href="/publicar">
              <a href="">Publicar</a>
            </Link>
          </li>
        </ul>
        <ul>
          <Flex align="center" justify="center" mx="1">
            <Login
              variant="light"
              width="4xs"
              showModalButtonText=" Inicio Sesión"
              isLoading={false}
            />
          </Flex>
          <Flex align="center" justify="center">
            <Register
              variant="primary"
              width="4xs"
              showModalButtonText="Registrate"
              isLoading={false}
            />
          </Flex>
        </ul>
      </nav>
    </div>
  )
}
