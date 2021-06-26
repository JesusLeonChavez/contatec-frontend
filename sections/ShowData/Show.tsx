import styles from "../../styles/sections/Show.module.css"
import ShowData from "../../sections/ShowData/Data"
import ShowPassword from "../../sections/ShowData/Password"
import ShowPay from "../../sections/ShowData/Pay"
import ShowHistory from "../../sections/ShowData/History"
import ShowMethods from "../../sections/ShowData/Methods"
import { TabList, TabPanels, TabPanel, Tab, Tabs, Text } from "@chakra-ui/react"

export default function Show() {
  return (
    <div className={styles.conteiner}>
      <div className={styles.conteinerConFondo}></div>
      <div className={styles.continerSup}>
        <Tabs align="center" orientation="vertical" variant="unstyled" isLazy>
          <div className={styles.conteinerList}>
            <TabList>
              <Text className={styles.titlesub}>Mi panel</Text>
              <div className={styles.linksub}>
                <Tab>Datos Personales</Tab>
                <Tab>Contraseña</Tab>
                <Tab>Realizar Pagos</Tab>
                <Tab>Historial</Tab>
                <Tab>Metódos de pago</Tab>
              </div>
            </TabList>
          </div>
          <div className={styles.conteinerForm}>
            <TabPanels>
              <TabPanel>
                <ShowData></ShowData>
              </TabPanel>
              <TabPanel>
                <ShowPassword></ShowPassword>
              </TabPanel>
              <TabPanel>
                <ShowPay></ShowPay>
              </TabPanel>
              <TabPanel>
                <ShowHistory></ShowHistory>
              </TabPanel>
              <TabPanel>
                <ShowMethods></ShowMethods>
              </TabPanel>
            </TabPanels>
          </div>
        </Tabs>
      </div>
    </div>
  )
}
