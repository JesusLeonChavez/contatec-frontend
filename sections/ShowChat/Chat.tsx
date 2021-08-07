import {
  Box,
  Button,
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

export default function Chat() {
  return (
    <Box
      m="0 auto"
      mt="10"
      mb="10"
      // textAlign="center"
      display="flex"
      // justifyItems="center"
      // align="center"
      w="1100px"
      h="1000px"
      border="2px solid #DBD9DC"
    >
      <Tabs align="center" orientation="vertical" variant="unstyled" isLazy>
        <Box w="300px" border="2px solid #DBD9DC">
          <TabList>
            <Text>Chats</Text>
            <Tab>Leónidas</Tab>
            <Tab>Varyana</Tab>
            <Tab>Lucy</Tab>
            <Tab>Sofia</Tab>
            <Tab>Kioshi</Tab>
          </TabList>
        </Box>
        <Box w="800px" border="2px solid #DBD9DC">
          <Box h="50px" border="2px solid #DBD9DC"></Box>
          <Box h="650px" border="2px solid #DBD9DC">
            <TabPanels>
              <TabPanel>
                <Text>Soy Leonidas</Text>
              </TabPanel>
              <TabPanel>
                <Text>Soy Varyana</Text>
              </TabPanel>
              <TabPanel>
                <Text>Soy Lucy</Text>
              </TabPanel>
              <TabPanel>
                <Text>Soy Sofia</Text>
              </TabPanel>
              <TabPanel>
                <Text>Soy Kioshi</Text>
              </TabPanel>
            </TabPanels>
          </Box>
          <Box h="200px" border="2px solid #DBD9DC">
            <Messages />
          </Box>
          <Flex
            bg="#F2F2F2"
            justify="start"
            direction="column"
            h="95px"
            border="2px solid #DBD9DC"
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
                <Flex align="center" justify="space-between" w="100px">
                  <Button variant="primary" p={4} color="white">
                    Cotizar
                  </Button>
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
