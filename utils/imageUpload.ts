/* istanbul ignore file */
interface ImageProps {
  // eslint-disable-next-line camelcase
  public_id: string
  url: string
}
export const imageUpload = async images => {
  const imgArr: ImageProps[] = []
  for (const item of images) {
    const formData = new FormData()

    formData.append("file", item)

    formData.append(
      "upload_preset",
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      process.env.NEXT_PUBLIC_CLOUD_UPDATE_PRESET
    )

    formData.append(
      "cloud_name",
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      process.env.NEXT_PUBLIC_CLOUD_NAME
    )

    const res = await fetch(
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      process.env.NEXT_PUBLIC_CLOUD_API,
      {
        method: "POST",
        body: formData
      }
    )

    const data = await res.json()

    imgArr.push({ public_id: data.public_id, url: data.secure_url })
  }

  return imgArr
}
