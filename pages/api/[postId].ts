import { NextApiRequest, NextApiResponse } from "next"

export default async (req: NextApiRequest, res: NextApiResponse) => {
  switch (req.method) {
    case "DELETE":
      deleteImages(req, res)
      break
  }
}

const deleteImages = async (req: NextApiRequest, res: NextApiResponse) => {
  const token = req.headers.authorization
  const postId = req.query.postId
  // console.log("idPost: ", postId, " token: ", token)
  // const resp = await fetch(`https://contatec.herokuapp.com/api/post/${postId}`)
  return res.status(200).json({ error: false })
}
