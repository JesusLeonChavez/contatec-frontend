import Link from "next/link"
import styles from "../styles/components/Navbar.module.css"
import ZIcon from "../components/Icon/Logo"
import { useState } from "react"
import Register from "../sections/Home/Register"
import { Flex } from "@chakra-ui/react"
export default function Navbar() {
  const [active, setActive] = useState("home")
  const handleActive = id => {
    setActive(id)
  }

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
          <li
            className={`${active === "home" && styles.active}`}
            id="home"
            onClick={() => handleActive("home")}
          >
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li
            className={`${active === "explorar" && styles.active}`}
            id="explorar"
            onClick={() => handleActive("explorar")}
          >
            <Link href="/explorar">
              <a>Explorar anuncio</a>
            </Link>
          </li>
          <li
            className={`${active === "publicar" && styles.active}`}
            id="publicar"
            onClick={() => handleActive("publicar")}
          >
            <Link href="/publicar">
              <a href="">Publicar</a>
            </Link>
          </li>
        </ul>
        <ul>
          <li
            className={`${active === "iniciosesion" && styles.active}`}
            id="iniciosesion"
            onClick={() => handleActive("iniciosesion")}
          >
            <Link href="/inicio-sesion">
              <a href="">Iniciar sesión</a>
            </Link>
          </li>

          <Flex align="center" justify="center">
            <Register
              variant="secondary"
              width="4xs"
              showModalButtonText="Registrate"
              isLoading={false}
            />
          </Flex>
          {/* <Link href="/registro">
              <a href="">Registrarse</a>
            </Link> */}
        </ul>
      </nav>
    </div>
  )
}
