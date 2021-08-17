import ShowData from "../../sections/ShowData/Data"
import ShowPassword from "../../sections/ShowData/Password"
import ShowPay from "../../sections/ShowData/Pay"
// import ShowServices from "../ShowData/Services"
import { TabList, TabPanels, TabPanel, Tab, Tabs, Text } from "@chakra-ui/react"

export default function ShowD({ auth }) {
  return (
    <>
      <div className="generalWrapper" style={{ padding: "50px 10px" }}>
        <Tabs align="center" orientation="vertical" variant="unstyled" isLazy>
          <TabList ml="25">
            <Text color="primary" fontWeight="medium" fontSize="25px">
              Mi panel
            </Text>
            <Tab
              _selected={{
                color: "primary",
                boxShadow: "none",
                fontWeight: "semibold",
                width: "100%"
              }}
            >
              Datos Personales
            </Tab>
            <Tab
              _selected={{
                color: "primary",
                boxShadow: "none",
                fontWeight: "semibold"
              }}
            >
              Contraseña
            </Tab>
            <Tab
              _selected={{
                color: "primary",
                boxShadow: "none",
                fontWeight: "semibold"
              }}
            >
              Pagos
            </Tab>
            {/* <Tab
              _selected={{
                color: "primary",
                boxShadow: "none",
                fontWeight: "semibold"
              }}
            >
              Servicios
            </Tab> */}
          </TabList>
          <TabPanels h="400px" pl="10%">
            <TabPanel>
              <ShowData />
            </TabPanel>
            <TabPanel>
              <ShowPassword />
            </TabPanel>
            <TabPanel>
              <ShowPay />
            </TabPanel>
            {/* <TabPanel>
              <ShowServices />
            </TabPanel> */}
          </TabPanels>
        </Tabs>
      </div>
    </>
  )
}
