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

import { get } from "../../utils/http"
import { DataContext } from "../../store/GlobalState"

export default function Chat() {
  const [activeChat, setActiveChat] = useState(-1)
  const [currentChat, setCurrentChat] = useState(null)
  const { state } = useContext(DataContext)
  const { auth, socket } = state
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  // const { auth, socket } = state
  const [conversations, setConversations] = useState([])
  const [messages, setMessages] = useState<string[]>([])
  const [newMessage, setNewMessage] = useState("")
  const [arrivalMessage, setArrivalMessage] = useState(null)
  const textArearef = useRef<HTMLTextAreaElement>()
  const scrollRef = useRef<HTMLDivElement>()
  const handleActiveChat = idx => {
    setActiveChat(idx)
  }
  useEffect(() => {
    // socket.on("getMessages", data => {
    //   setArrivalMessage({
    //     sender: data.senderId,
    //     text: data.text,
    //     createdAt: Date.now()
    //   })
    // })
  }, [])

  // useEffect(() => {
  //   arrivalMessage && setMessages(prev => [...prev, arrivalMessage])
  // }, [arrivalMessage, currentChat])

  useEffect(() => {
    const getConversations = async () => {
      const res = await get("/api/messages/all")
      setConversations(res.data)
    }
    getConversations()
  }, [auth?.user?.id])
  useEffect(() => {
    const getMessages = async () => {
      const resMessages = await get(`/api/messages/all/${auth.user?.id}`)
      console.log("resMessage:", resMessages)
      setMessages(resMessages.data)
    }

    getMessages()
  }, [currentChat])

  const sendMessage = () => {
    const message = {
      createdAt: "2021-08-14T05:46:46.578Z",
      msjIdPostPropuestaId: 295,
      msjUserFromId: 135,
      msjUserToId: 155,
      msj_contenido: newMessage
    }
    console.log(newMessage)
    setMessages([...messages, newMessage])
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

        {conversations?.map((conver, idx) => (
          <Users
            onClick={() => {
              handleActiveChat(idx)
              setCurrentChat(conver)
            }}
            idx={idx}
            activeChat={activeChat}
            name={conver.nameAmiwi}
            lastMessage={conver.msj_contenido}
            image={conver.ImagenAmiwi}
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
              {messages.map((message, item) => (
                <div ref={scrollRef} key={item}>
                  <Message
                    message={message}
                    own={auth?.user?.id === message.msjUserToId}
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
