import ShowD from "../sections/ShowData/Show"
import Layout from "../components/Layout"
import Profile from "../sections/ShowData/ProfilePicture"

export default function Show() {
  return (
    <div>
      <Layout withNav withFooter>
        <Profile />
        <ShowD />
      </Layout>
    </div>
  )
}
