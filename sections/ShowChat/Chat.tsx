/* eslint-disable react/jsx-key */
import { Box, Flex, Text } from "@chakra-ui/react"
import ZIcon from "../../components/Icon"
import SendMessage from "../ShowChat/SendMessage"
import Users from "../ShowChat/Users"
import Message from "../ShowChat/Message"
import UsersName from "../ShowChat/UsersName"
import ModalNewQuote from "../ShowChat/ModalNewQuote"
import { useState, useEffect, useRef, useContext } from "react"
import { get, setAuth } from "../../utils/http"
import { DataContext } from "../../store/GlobalState"
import MessageProposal from "./MessageProposal"

export default function Chat() {
  const [activeChat, setActiveChat] = useState(-1)
  const [currentChat, setCurrentChat] = useState<any>(null)
  const { state } = useContext(DataContext)
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const { auth, authReady, socket } = state
  // const { auth, socket } = state
  const [conversations, setConversations] = useState([])
  const [messages, setMessages] = useState<any>([])
  const [newMessage, setNewMessage] = useState("")
  const [arrivalMessage, setArrivalMessage] = useState(null)
  const [isArrivalMessage, setIsArrivalMessage] = useState(false)
  const [isAblePropose, setIsAblePropose] = useState(false)
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
      // console.log(data)
      setIsArrivalMessage(!isArrivalMessage)
      if (
        data.msjUserFromId === currentChat!.idAmiwi ||
        data.msjUserFromId === auth?.user?.id
      ) {
        console.log("mensaje recibido: ", data)
        setArrivalMessage({
          ...data
        })
      }
    }
    socket.on("messageDefaultResponse", functionSocket)
    socket.on("messageProposeResponse", functionSocket)

    return () => {
      socket.off("messageDefaultResponse")
      socket.off("messageProposeResponse")
    }
  }, [auth?.user?.id, socket, currentChat])

  useEffect(() => {
    // console.log("efecto gaaa")
    arrivalMessage && setMessages((prev: any) => [...prev, arrivalMessage])
  }, [arrivalMessage, currentChat])

  useEffect(() => {
    if (!auth?.user?.id) return
    const getConversations = async () => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      setAuth(auth.access_token)
      const res = await get("/api/messages/all")
      setConversations(res.data)
    }

    getConversations()
  }, [auth?.user?.id, arrivalMessage, isArrivalMessage])
  useEffect(() => {
    if (!currentChat) return
    if (!auth?.user?.id) return
    const getMessages = async () => {
      setAuth(auth!.access_token)
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      const resMessages = await get(`/api/messages/all/${currentChat.idAmiwi}`)
      const messageParse = resMessages.data.data.reverse()
      console.log("Mensajes de bd", messageParse)
      setMessages(messageParse)
      // console.log(resMessages.data.data.reverse())
    }

    getMessages()
  }, [currentChat])

  // Habilitar capacidad de cotizar
  useEffect(() => {
    if (!auth?.user?.id) return
    const verifyPost = async () => {
      setAuth(auth.access_token)
      const {
        data: { user }
      } = await get("/api/user/info")
      if (!(user.posts.length > 0)) return
      setIsAblePropose(true)
    }
    verifyPost()
  }, [auth?.user?.id])

  const sendMessage = () => {
    socket.emit("messageDefault", {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      to: currentChat!.idAmiwi,
      data: newMessage,
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      from: auth.user.id
    })

    setNewMessage("")
    textArearef.current?.focus()
  }

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ block: "nearest", behavior: "smooth" })
  }, [messages])

  const handleSendMessage = () => {
    sendMessage()
  }
  const onKeyDown = e => {
    // eslint-disable-next-line eqeqeq
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
      h="798px"
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
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-ignore
              name={conver.nameAmiwi}
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-ignore
              lastMessage={conver.msj_contenido}
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-ignore
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
              {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
              {/* @ts-ignore */}
              <UsersName name={currentChat.nameAmiwi} />
            </Flex>
            <Box overflowY="scroll" h="550px" border="1px solid #DBD9DC">
              {messages.map((message, idx) => (
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                <div ref={scrollRef} key={idx}>
                  {message.msj_precio_prop ? (
                    <MessageProposal
                      message={message}
                      own={auth?.user?.id !== message.msjUserToId}
                    />
                  ) : (
                    <Message
                      message={message}
                      own={auth?.user?.id !== message.msjUserToId}
                    />
                  )}
                </div>
              ))}

              {/*  */}
            </Box>
            <Box h="100px" border="1px solid #DBD9DC">
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
                    {isAblePropose && (
                      <ModalNewQuote
                        variant="primary"
                        width="100px"
                        height="35px"
                        showModalButtonText="Cotizar"
                        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                        // @ts-ignore
                        currentChat={currentChat}
                      />
                    )}
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
