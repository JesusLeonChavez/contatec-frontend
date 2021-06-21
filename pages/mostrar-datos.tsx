import ShowData from "../sections/ShowData/Show"
import Layout from "../components/Layout"

export default function Show() {
  return (
    <div>
      <Layout withNav withFooter>
        <ShowData></ShowData>
      </Layout>
    </div>
  )
}
