/* eslint-disable react/jsx-key */
// import { useState } from "react"
import {
  Box,
  Flex,
  Text
  // Tabs,
  // TabList,
  // Tab,
  // TabPanels,
  // TabPanel
} from "@chakra-ui/react"
import ZIcon from "../../components/Icon"
import SendMessage from "../ShowChat/SendMessage"
import Users from "../ShowChat/Users"
import Message from "../ShowChat/Message"
import UsersName from "../ShowChat/UsersName"
import ModalNewQuote from "../ShowChat/ModalNewQuote"
import { useState, useEffect, useRef } from "react"

import { get } from "../../utils/http"

export default function Chat() {
  const [activeChat, setActiveChat] = useState(-1)
  const [currentChat, setCurrentChat] = useState(null)
  const [messages, setMessages] = useState([])
  const [newMessage, setNewMessage] = useState("")
  const textArearef = useRef()
  const handleActiveChat = idx => {
    setActiveChat(idx)
  }
  useEffect(() => {
    const getConversations = async () => {
      const res = await get("/api/messages/all")
      console.log("resMessage:", res)
    }
    getConversations()
  }, [])
  // useEffect(() => {
  //   const getMessages = async () => {
  //     const resMessages = await get(`/api/messages/all/${id}`)
  //     console.log("resMessage:", resMessages)
  //     setMessages(resMessages)
  //   }
  //   getMessages()
  // },[currentChat])
  const sendMessage = () => {
    console.log(newMessage)
    // setMessages([...messages, nuevoMensajeQuedevuelveunPost])
    setNewMessage("")
    textArearef.current?.focus()
  }

  const handleSendMessage = () => {
    sendMessage()
  }
  const onKeyDown = e => {
    if (e.keyCode == "13") {
      sendMessage()
    }
  }
  return (
    <Box
      m="0 auto"
      mt="10"
      mb="10"
      display="flex"
      w="1102px"
      h="998px"
      border="3px solid #DBD9DC"
    >
      <Box w="300px" borderRight="1px solid #DBD9DC">
        <Text ml="5" p="4" align="start" color="#482F51" fontSize="25">
          Chats
        </Text>

        {[
          {
            nombre: "Leónidas",
            ultimo_mensaje: "ultimo mensajesssssssssssssssssssss",
            image: "/assets/marketing/marketing1.png"
          },
          {
            nombre: "Juan",
            ultimo_mensaje: "ultimo mensajes juan",
            image: "/assets/marketing/marketing1.png"
          }
        ].map((conver, idx) => (
          <Users
            onClick={() => {
              handleActiveChat(idx)
              setCurrentChat(conver)
            }}
            idx={idx}
            activeChat={activeChat}
            name={conver.nombre}
            lastMessage={conver.ultimo_mensaje}
            image={conver.image}
          />
        ))}
      </Box>
      {currentChat ? (
        <>
          <Box w="799px" border="1px solid #DBD9DC">
            <Flex h="50px" border="1px solid #DBD9DC" align="center">
              <UsersName />
            </Flex>
            <Box overflowY="scroll" h="650px" border="1px solid #DBD9DC">
              <Message />
              <Message />
              <Message own />
              <Message />
              <Message own />
              <Message />
              <Message />
              <Message />
              <Message />
              <Message />
              <Message />
              <Message />
            </Box>
            <Box h="200px" border="1px solid #DBD9DC">
              <SendMessage
                newMessage={newMessage}
                setNewMessage={setNewMessage}
                onKeyDown={onKeyDown}
                textArearef={textArearef}
              />
            </Box>
            <Box
              bg="#F2F2F2"
              justify="start"
              direction="column"
              h="91px"
              border="1px solid #DBD9DC"
              align="center"
              m="auto"
            >
              <Flex padding="7" justifyContent="space-between" w="100%">
                <Flex justify="space-between" w="70px">
                  <ZIcon name="clip" pointer size={25} />
                  <ZIcon name="uploadPhoto" pointer size={25} />
                </Flex>
                <Flex justify="space-between">
                  <Flex mr="5">
                    <ModalNewQuote
                      variant="primary"
                      width="100px"
                      height="25px"
                      showModalButtonText="Cotizar"
                    />
                  </Flex>
                  <ZIcon
                    name="buttonRight"
                    pointer
                    size={25}
                    onClick={handleSendMessage}
                  />
                </Flex>
              </Flex>
            </Box>
          </Box>
        </>
      ) : (
        <Text fontSize="2xl" p="5">
          Seleccione un chat...
        </Text>
      )}
    </Box>
  )
}
