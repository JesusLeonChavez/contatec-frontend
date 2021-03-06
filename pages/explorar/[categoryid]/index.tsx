/* eslint-disable camelcase */
import { useRouter } from "next/router"
import Head from "next/head"
import Link from "next/link"
import { Text, Breadcrumb, BreadcrumbItem } from "@chakra-ui/react"
import Layout from "../../../components/Layout"
import CategoryItems from "../../../sections/Explore/CategoryId/CategoryItems"
import ZIcon from "../../../components/Icon"

export default function Category({ category_posts }) {
  const router = useRouter()

  return (
    <div>
      <Head>
        <title>Create Next App</title>

        <meta name="description" content="Generated by create next app" />

        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout withNav withFooter>
        <div className="generalWrapper">
          <Text
            fontSize="5xl"
            className="bold600"
            align="center"
            color="primary"
            py="5"
          >
            Elige uno de nuestros servicios
          </Text>
          <Breadcrumb separator={<ZIcon name="arrow-right" />}>
            <BreadcrumbItem>
              <ZIcon
                name="arrow-leftv2"
                className="mr1"
                size={11}
                pointer
                onClick={() => {
                  router.push("/explorar")
                }}
              />
              <Link href="/explorar" as={`/explorar`}>
                <a>Categoría</a>
              </Link>
            </BreadcrumbItem>

            <BreadcrumbItem isCurrentPage>
              <Link
                href="/explorar/[categoryid]"
                as={`/explorar/${category_posts.id}`}
              >
                <a>{category_posts.cat_nombre}</a>
              </Link>
            </BreadcrumbItem>
          </Breadcrumb>
        </div>
        <CategoryItems category={category_posts} />
      </Layout>
    </div>
  )
}

export const getServerSideProps = async context => {
  const id = context.params.categoryid
  const res = await fetch(`${process.env.API_BASE_URL}/api/category/${id}`)
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const data = await res.json()
  // console.log("dataCategory: ", data)
  return {
    props: { category_posts: data }
  }
}
