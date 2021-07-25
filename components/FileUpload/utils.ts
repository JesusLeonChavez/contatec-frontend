/* eslint-disable camelcase */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
// eslint-disable-next-line import/no-unresolved
import { FileLink } from "./FileUpload"

export function setFiles(files) {
  // eslint-disable-next-line camelcase
  console.log("setfiles: ", files)
  const new_files = []

  files?.forEach((file, index) => {
    // eslint-disable-next-line no-undef

    if (file instanceof File) {
      console.log("primer if")
      new_files.push({
        name: file.name,
        icon: getIconString(file.name),
        url: createFileUrl(file.type, file),
        error: false
      })
    } else if (file instanceof FileLink) {
      console.log("segundo if")
      new_files.push(file)
    } else {
      if (!file.deleted) {
        console.log("terver if")
        new_files.push({
          name: `imagen_${index + 1}`,
          icon: getIconString(file.filename),
          url: file,
          error: false
        })
      }
    }
  })
  console.log("new_files: ", new_files)
  return new_files
}

/**

 * @param {String} filename

 * @returns {String}

 */

export function getIconString(filename = ".") {
  const ext = filename.split(".")[1]

  let icon = ""

  switch (ext) {
    case "jpg":
    case "jpeg":
    case "png":
      icon = "image"
      break
    case "docx":
    case "doc":
      icon = "doc"
      break
    case "pdf":
      icon = "pdf"

      break

    default:
      icon = "help-circle"

      break
  }

  return icon
}
export function createFileUrl(type, data) {
  // eslint-disable-next-line no-undef
  return window.URL.createObjectURL(new Blob([data], { type }))
}
