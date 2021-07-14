import ShowData from "../../sections/ShowData/Data"
import ShowPassword from "../../sections/ShowData/Password"
import ShowPay from "../../sections/ShowData/Pay"
import ShowHistory from "../../sections/ShowData/History"
import ShowMethods from "../../sections/ShowData/Methods"
import { TabList, TabPanels, TabPanel, Tab, Tabs, Text } from "@chakra-ui/react"

export default function ShowD() {
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
              Realizar Pagos
            </Tab>
            <Tab
              _selected={{
                color: "primary",
                boxShadow: "none",
                fontWeight: "semibold"
              }}
            >
              Historial
            </Tab>
            <Tab
              _selected={{
                color: "primary",
                boxShadow: "none",
                fontWeight: "semibold"
              }}
            >
              Metódos de pago
            </Tab>
          </TabList>
          <TabPanels h="500px" pl="10%">
            <TabPanel>
              <ShowData />
            </TabPanel>
            <TabPanel>
              <ShowPassword />
            </TabPanel>
            <TabPanel>
              <ShowPay />
            </TabPanel>
            <TabPanel>
              <ShowHistory />
            </TabPanel>
            <TabPanel>
              <ShowMethods />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </div>
    </>
  )
}
