import ShowD from "../sections/ShowData/Show"
import Layout from "../components/Layout"

export default function Show() {
  return (
    <div>
      <Layout withNav withFooter>
        <ShowD></ShowD>
      </Layout>
    </div>
  )
}
