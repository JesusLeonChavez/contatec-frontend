import Head from "next/head"
import router from "next/router"
import { useContext, useEffect } from "react"
import Layout from "../../components/Layout"
import GetStarted from "../../sections/Post/GetStarted"
import { DataContext } from "../../store/GlobalState"
export default function Explorar() {
  const { state } = useContext(DataContext)
  const { auth } = state
  useEffect(() => {
    if (Object.keys(auth).length === 0) return
    router.push("/publicar/nuevo_post")
  }, [auth?.user?.id])
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout withNav withFooter>
        <GetStarted />
      </Layout>
    </div>
  )
}
