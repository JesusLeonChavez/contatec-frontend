import ShowD from "../sections/ShowData/Show"
import Layout from "../components/Layout"
import Profile from "../sections/ShowData/ProfilePicture"
import { useContext } from "react"
import { DataContext } from "../store/GlobalState"
import { Box, Text } from "@chakra-ui/react"
import Head from "next/head"

export default function Show() {
  const { state } = useContext(DataContext)
  const { auth, authReady } = state
  if (authReady && !auth?.access_token) {
    return (
      <div>
        <Head>
          <title>Create Next App</title>
          <meta name="description" content="Generated by create next app" />
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
      <Layout withNav withFooter>
        {authReady ? (
          <div>
            <Profile auth={auth} />
            <ShowD auth={auth} />
          </div>
        ) : (
          <Box
            d="flex"
            alignItems="center"
            justifyContent="center"
            w="full"
            h="3xl"
          >
            {/* TODO: Agregar imagen */}
            <Text>Cargando...</Text>
          </Box>
        )}
      </Layout>
    </div>
  )
}
