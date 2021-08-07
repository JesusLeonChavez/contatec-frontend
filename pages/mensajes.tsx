import Layout from "../components/Layout"

import Chat from "../sections/ShowChat/Chat"

export default function Message() {
  return (
    <div>
      <Layout withNav withFooter>
        <Chat />
      </Layout>
    </div>
  )
}
