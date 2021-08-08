import {
  Box,
  // Button,
  Flex,
  Text,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel
} from "@chakra-ui/react"
import ZIcon from "../../components/Icon"
import Messages from "../ShowChat/Messages"
import Users from "../ShowChat/Users"
import Message from "../ShowChat/Message"
import UsersName from "../ShowChat/UsersName"
import ModalNewQuote from "../ShowChat/ModalNewQuote"

export default function Chat() {
  return (
    <Box
      m="0 auto"
      mt="10"
      mb="10"
      display="flex"
      w="1100px"
      h="1000px"
      border="3px solid #DBD9DC"
    >
      <Tabs align="center" orientation="vertical" variant="unstyled" isLazy>
        <Box w="300px" border="3px solid #DBD9DC">
          <TabList>
            <Text ml="5" p="4" align="start" color="#482F51" fontSize="25">
              Chats
            </Text>
            {[1, 2, 3].map((userElement, idx) => (
              // eslint-disable-next-line react/jsx-key
              <Tab
                _selected={{
                  borderColor: "var(--secondary)",
                  bg: "var(--secondary)"
                }}
              >
                <Users />
              </Tab>
            ))}
          </TabList>
        </Box>
        <Box w="800px" border="3px solid #DBD9DC">
          <Box h="50px" border="3px solid #DBD9DC">
            <TabPanels>
              {[1, 2, 3].map((userNameElemnt, idx) => (
                // eslint-disable-next-line react/jsx-key
                <TabPanel>
                  <UsersName />
                </TabPanel>
              ))}
            </TabPanels>
          </Box>
          <Box h="650px" border="3px solid #DBD9DC">
            <TabPanels>
              {[1, 2, 3].map((messageElemnt, idx) => (
                // eslint-disable-next-line react/jsx-key
                <TabPanel>
                  <Message />
                </TabPanel>
              ))}
            </TabPanels>
          </Box>
          <Box h="200px" border="3px solid #DBD9DC">
            <Messages />
          </Box>
          <Flex
            bg="#F2F2F2"
            justify="start"
            direction="column"
            h="90px"
            border="3px solid #DBD9DC"
          >
            <Flex
              padding="4"
              marginBottom="30px"
              justifyContent="space-between"
              w="100%"
            >
              <Flex align="center" justify="space-between" w="70px">
                <ZIcon name="clip" pointer size={30} />
                <ZIcon name="uploadPhoto" pointer size={30} />
              </Flex>
              <Flex align="center" justify="space-between">
                <Flex mr="5">
                  <ModalNewQuote
                    variant="primary"
                    width="1xs"
                    showModalButtonText="Cotizar"
                  />
                  {/* <Button variant="primary" p={4} color="white">
                    <ModalNewQuote />
                    Cotizar
                  </Button> */}
                </Flex>
                <ZIcon name="buttonRight" pointer size={40} />
              </Flex>
            </Flex>
          </Flex>
        </Box>
      </Tabs>
    </Box>
  )
}
