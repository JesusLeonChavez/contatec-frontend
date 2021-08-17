import ShowD from "../sections/ShowData/Show"
import Layout from "../components/Layout"
import Profile from "../sections/ShowData/ProfilePicture"
import { useContext, useEffect } from "react"
import { DataContext } from "../store/GlobalState"
import { Box, Text } from "@chakra-ui/react"
import Head from "next/head"
import { get } from "../utils/http"

export default function Show() {
  const { state } = useContext(DataContext)
  const { auth, authReady } = state
  // useEffect(() => {
  //   if (!auth?.user?.id) return
  //   const userData = async () => {
  //     const { data: total } = await get("/api/user/info")
  //     const { data, user } = total
  //     console.log(data)
  //   }
  //   userData()
  // }, [auth?.user?.id])
  if (authReady && !auth?.access_token) {
    return (
      <div>
        <Head>
          <title>Perfil de usuario | Contatec</title>
          <meta name="description" content="Perfil de usuario | Contatec" />
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
    <>
      <Head>
        <title>Perfil de usuario | Contatec</title>
        <meta name="description" content="Perfil de usuario | Contatec" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
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
    </>
  )
}
