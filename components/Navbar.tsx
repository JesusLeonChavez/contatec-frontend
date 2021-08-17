import Link from "next/link"
import styles from "../styles/components/Navbar.module.css"
import ZIcon from "../components/Icon"
import Register from "../sections/Home/Register"
import Login from "../sections/Home/Login"
import Notifications from "../components/Notifications"
import Inbox from "../components/Inbox"
import {
  Flex,
  Button,
  Box,
  Text,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
  Tabs,
  Tab,
  TabList,
  TabPanels,
  TabPanel
} from "@chakra-ui/react"
import { useRouter } from "next/router"
import { DataContext } from "../store/GlobalState"
import React, { useContext, useEffect, useState } from "react"
import { get } from "../utils/http"

export default function Navbar() {
  const router = useRouter()
  const activeRoute = router?.pathname.split("/")[1]
  const { state, dispatch } = useContext(DataContext)
  const { auth, authReady, socket } = state
  const [isNewMessage, setIsNewMessage] = useState(false)

  const [recentMessages, setRecentMessages] = useState<any>([])

  const handleLogout = async () => {
    localStorage.removeItem("isLogged")
    await get("/api/user/logout")
    // console.log("log out")
    dispatch({ type: "AUTH", payload: {} })
    // return router.push("/")
    return window.location.reload()
  }
  useEffect(() => {
    if (Object.keys(auth).length === 0) return
    if (Object.keys(socket).length === 0) return

    const functionSocket = ({ data }) => {
      if (data.msjUserToId === auth?.user?.id) {
        setIsNewMessage(true)
      }
    }
    socket.on("messageDefaultResponse", functionSocket)
    socket.on("messageProposeResponse", functionSocket)

    return () => {
      socket.off("messageDefaultResponse")
    }
  }, [auth?.user?.id, socket])

  const loggedRouter = () => {
    return (
      // <ul>
      //   <Flex align="center" justify="center" mx="1">
      //     <Button variant="primary" width="4xs" onClick={handleLogout}>
      //       Log out
      //     </Button>
      //   </Flex>
      // </ul>
      <Flex align="center">
        <Popover placement="bottom-end">
          <PopoverTrigger>
            <Box
              px="4"
              position="relative"
              onClick={() => setIsNewMessage(false)}
            >
              {/* <ZIcon name="ring" color="primary" size={20} pointer /> */}
              <Text cursor="pointer" userSelect="none">
                Mensajes
              </Text>
              {isNewMessage && (
                <Box
                  h="2"
                  w="2"
                  bg="red"
                  borderRadius="50"
                  position="absolute"
                  top="0.5"
                  left="90px"
                ></Box>
              )}
            </Box>
          </PopoverTrigger>
          <PopoverContent w="150" _focus={{ outline: "none" }}>
            <PopoverArrow />
            <PopoverCloseButton
              _focus={{ outline: "none" }}
              _active={{ outline: "none" }}
            />
            <Tabs>
              <TabList>
                <Tab
                  _focus={{ outline: "none" }}
                  _active={{ outline: "none" }}
                  _selected={{
                    color: "primary",
                    boxShadow: "none",
                    borderBottom: "2px",
                    borderBottomColor: "primary"
                  }}
                >
                  Notificaciones (3)
                </Tab>
                <Tab
                  _focus={{ outline: "none" }}
                  _active={{ outline: "none" }}
                  _selected={{
                    color: "primary",
                    boxShadow: "none",
                    borderBottom: "2px",
                    borderBottomColor: "primary"
                  }}
                >
                  Bandeja de entrada ({recentMessages.length})
                </Tab>
              </TabList>
              <TabPanels>
                <TabPanel>
                  <PopoverBody>
                    <Notifications />
                  </PopoverBody>
                </TabPanel>
                <TabPanel>
                  <PopoverBody>
                    <Inbox
                      recentMessages={recentMessages}
                      setRecentMessages={setRecentMessages}
                    />
                  </PopoverBody>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </PopoverContent>
        </Popover>

        <Popover placement="bottom-end">
          <PopoverTrigger>
            <Box px="4">
              <ZIcon
                name="avatar"
                color="primary"
                size={25}
                pointer
                onClick={() => setIsNewMessage(false)}
              />
            </Box>
          </PopoverTrigger>
          <PopoverContent w="38" _focus={{ outline: "none" }}>
            <PopoverArrow />
            <PopoverBody d="flex" alignItems="center" flexDirection="column">
              <Button
                variant="secondary"
                w="100px"
                onClick={() => {
                  router.push("/mostrar-datos")
                }}
                my="2"
              >
                Perfil
              </Button>

              <Button variant="primary" w="100px" onClick={handleLogout} my="2">
                Log out
              </Button>
            </PopoverBody>
          </PopoverContent>
        </Popover>
      </Flex>
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
