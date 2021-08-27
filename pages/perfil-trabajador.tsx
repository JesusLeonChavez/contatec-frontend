import Layout from "../components/Layout"
import { DataContext } from "../store/GlobalState"
import { useContext } from "react"
import { Box, Text } from "@chakra-ui/react"
import Head from "next/head"

import Worker from "../sections/WorkerProfile/Profile"
import Profile from "../sections/WorkerProfile/WorkerProfilePicture"

export default function WorkerProfile({ explore }) {
  const { state } = useContext(DataContext)
  const { auth, authReady } = state

  if (authReady && !auth?.access_token) {
    return (
      <div>
        <Head>
          <title>Perfil de usuario | Contatec</title>
          <meta name="description" content="Perfil del trabajador | Contatec" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Layout withNav withFooter>
          <Box
            d="flex"
            alignItems="center"
            justifyContent="center"
            w="full"
            h="3xl"
          >
            {/* TODO: Agregar imagen */}
            <Text>Necesita iniciar sesion</Text>
          </Box>
        </Layout>
      </div>
    )
  }

  return (
    <div>
      <Head>
        <title>Perfil de usuario | Contatec</title>
        <meta name="description" content="Perfil del trabajador | Contatec" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout withNav withFooter>
        <Profile auth={auth} />
        <Worker />
      </Layout>
    </div>
  )
}
