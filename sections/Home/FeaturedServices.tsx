import {
  Text,
  Grid,
  Flex,
  Circle,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel
} from "@chakra-ui/react"
import styles from "../../styles/sections/Home.module.css"
export default function FeaturedServices() {
  return (
    <div>
      <Flex align="center" justify="center" py={10}>
        <Text fontSize="5xl" className={styles.bold600}>
          Servicios destacados
        </Text>
      </Flex>
      <Tabs>
        <TabList>
          <Tab>One</Tab>
          <Tab>Two</Tab>
          <Tab>Three</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <p>one!</p>
          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
          <TabPanel>
            <p>three!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  )
}
