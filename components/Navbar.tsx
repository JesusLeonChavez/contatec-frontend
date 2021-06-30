import Link from "next/link"
import styles from "../styles/components/Navbar.module.css"
import ZIcon from "../components/Icon/Logo"
import Register from "../sections/Home/Register"
import Login from "../sections/Home/Login"
import { Flex, Button, Box, Text } from "@chakra-ui/react"
import { useRouter } from "next/router"
import { DataContext } from "../store/GlobalState"
import React, { useContext } from "react"
import { get } from "../utils/http"

export default function Navbar() {
  const router = useRouter()
  const activeRoute = router.pathname.split("/")[1]
  const { state, dispatch } = useContext(DataContext)
  const { auth, authReady } = state

  const handleLogout = async () => {
    localStorage.removeItem("isLogged")
    await get("/api/user/logout")
    console.log("log out")
    dispatch({ type: "AUTH", payload: {} })
    return router.push("/")
  }

  const loggedRouter = () => {
    return (
      <ul>
        <Flex align="center" justify="center" mx="1">
          <Button variant="primary" width="4xs" onClick={handleLogout}>
            Log out
          </Button>
        </Flex>
      </ul>
    )
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
        {authReady ? (
          <>
            {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
            {/* @ts-ignore */}
            {Object.keys(auth).length === 0 ? (
              <ul>
                <Flex align="center" justify="center" mx="1">
                  <Login
                    variant="light"
                    width="4xs"
                    showModalButtonText=" Inicio Sesión"
                  />
                </Flex>
                <Flex align="center" justify="center">
                  <Register
                    variant="primary"
                    width="4xs"
                    showModalButtonText="Registrate"
                  />
                </Flex>
              </ul>
            ) : (
              loggedRouter()
            )}
          </>
        ) : (
          <Box>
            <Text>Entrando ...</Text>
          </Box>
        )}
      </nav>
    </div>
  )
}
