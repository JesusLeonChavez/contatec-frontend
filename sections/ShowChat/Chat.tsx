/* eslint-disable react/jsx-key */
import { Box, Flex, Text } from "@chakra-ui/react"
import ZIcon from "../../components/Icon"
import SendMessage from "../ShowChat/SendMessage"
import Users from "../ShowChat/Users"
import Message from "../ShowChat/Message"
import UsersName from "../ShowChat/UsersName"
import ModalNewQuote from "../ShowChat/ModalNewQuote"
import { useState, useEffect, useRef, useContext } from "react"
import Socket from "socket.io-client"

import { get, setAuth } from "../../utils/http"
import { DataContext } from "../../store/GlobalState"

export default function Chat() {
  const [activeChat, setActiveChat] = useState(-1)
  const [currentChat, setCurrentChat] = useState(null)
  const { state } = useContext(DataContext)
  const { auth, authReady, socket } = state
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  // const { auth, socket } = state
  const [conversations, setConversations] = useState([])
  const [messages, setMessages] = useState<string[]>([])
  const [newMessage, setNewMessage] = useState("")
  const [arrivalMessage, setArrivalMessage] = useState(null)
  const [isArrivalMessage, setIsArrivalMessage] = useState(false)
  const textArearef = useRef<HTMLTextAreaElement>()
  const scrollRef = useRef<HTMLDivElement>()
  const handleActiveChat = idx => {
    setActiveChat(idx)
  }
  useEffect(() => {
    // console.log("auth effect: ", auth)
    // console.log(auth)
    // console.log(socket)
    if (!currentChat) return
    if (Object.keys(auth).length === 0) return
    if (Object.keys(socket).length === 0) return

    const functionSocket = ({ data }) => {
      setIsArrivalMessage(!isArrivalMessage)
      if (
        data.msjUserFromId === currentChat!.idAmiwi ||
        data.msjUserFromId === auth?.user?.id
      ) {
        setArrivalMessage({
          ...data
        })
      }
    }
    // console.log("activando socket")
    socket.on("messageDefaultResponse", functionSocket)
    return () => {
      socket.off("messageDefaultResponse")
      // socket.un("messageDefaultResponse", functionSocket)
    }
  }, [auth?.user?.id, socket, currentChat])

  useEffect(() => {
    // console.log("efecto gaaa")
    arrivalMessage && setMessages((prev: any) => [...prev, arrivalMessage])
  }, [arrivalMessage, currentChat])

  useEffect(() => {
    if (!auth?.user?.id) return
    const getConversations = async () => {
      setAuth(auth.access_token)
      const res = await get("/api/messages/all")
      // console.log("conversaciones: ", res)
      setConversations(res.data)
    }

    getConversations()
  }, [auth?.user?.id, arrivalMessage, isArrivalMessage])
  useEffect(() => {
    if (!currentChat) return
    console.log(currentChat)
    const getMessages = async () => {
      setAuth(auth.access_token)
      const resMessages = await get(`/api/messages/all/${currentChat!.idAmiwi}`)
      // console.log("resMessage:", resMessages)
      setMessages(resMessages.data.data.reverse())
    }
    if (!auth?.user?.id) return
    getMessages()
  }, [currentChat])

  const sendMessage = () => {
    const message = {
      createdAt: "2021-08-14T05:46:46.578Z",
      msjIdPostPropuestaId: 295,
      msjUserFromId: auth.user.id,
      msjUserToId: 155,
      msj_contenido: newMessage
    }
    socket.emit("messageDefault", {
      to: currentChat!.idAmiwi,
      data: newMessage,
      from: auth.user.id
    })
    // console.log(newMessage)
    setNewMessage("")
    textArearef.current?.focus()
  }

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ block: "end", behavior: "smooth" })
  }, [currentChat])
  // TODO: cambiar currentChat x messages

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

        {authReady && conversations ? (
          conversations?.map((conver, idx) => (
            <Users
              onClick={() => {
                handleActiveChat(idx)
                setCurrentChat(conver)
              }}
              key={idx}
              idx={idx}
              activeChat={activeChat}
              name={conver.nameAmiwi}
              lastMessage={conver.msj_contenido}
              image={conver.ImagenAmiwi}
            />
          ))
        ) : (
          <p>Espere...</p>
        )}
      </Box>
      {currentChat ? (
        <>
          <Box w="799px" border="1px solid #DBD9DC">
            <Flex h="50px" border="1px solid #DBD9DC" align="center">
              <UsersName name={currentChat.nameAmiwi} />
            </Flex>
            <Box overflowY="scroll" h="650px" border="1px solid #DBD9DC">
              {messages.map((message, item) => (
                <div ref={scrollRef} key={item}>
                  <Message
                    message={message}
                    own={auth?.user?.id !== message.msjUserToId}
                  />
                </div>
              ))}

              {/*  */}
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
