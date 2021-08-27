import Layout from "../components/Layout"
import { DataContext } from "../store/GlobalState"
import { useContext } from "react"
import { Box, Text } from "@chakra-ui/react"
import Head from "next/head"

import Worker from "../sections/WorkerProfile/Profile"
import Profile from "../sections/WorkerProfile/WorkerProfilePicture"
export default function WorkerProfile({ worker }) {
  const { state } = useContext(DataContext)
  const { auth, authReady } = state
  console.log("worker", worker)
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
        <Profile worker={worker} />
        <Worker worker={worker} />
      </Layout>
    </div>
  )
}

export const getServerSideProps = async context => {
  console.log("context: ", context.query)

  const { id, tk } = context.query
  const res = await fetch(`${process.env.API_BASE_URL}/api/user/info/${id}`, {
    headers: {
      Authorization: tk
    },
    method: "GET"
  })
  const data = await res.json()
  return {
    props: { worker: data }
  }
}
