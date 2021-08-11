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

export default function Chat() {
  // const [setUsers] = useState([])
  // const [usersNames] = useState([])

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
        <div>
          {[
            {
              nombre: "Leónidas",
              ultimo_mensaje: "ultimo mensajes",
              image: "/assets/marketing/markegin1.png"
            }
          ].map((conver, idx) => (
            <div
            // onClick={() => {
            //   handleClick(idx)
            // }}
            >
              <Users
                idx={idx}
                name={conver.nombre}
                lastMessage={conver.ultimo_mensaje}
                image={conver.image}
              />
            </div>
          ))}
        </div>
      </Box>
      <Box w="799px" border="1px solid #DBD9DC">
        <Box h="50px" border="1px solid #DBD9DC">
          <div>
            <UsersName />
          </div>
        </Box>
        <Box overflowY="scroll" h="650px" border="1px solid #DBD9DC">
          <div>
            <Message />
          </div>
        </Box>
        <Box h="200px" border="1px solid #DBD9DC">
          <SendMessage />
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
              <ZIcon name="buttonRight" pointer size={25} />
            </Flex>
          </Flex>
        </Box>
      </Box>
    </Box>
  )
}
