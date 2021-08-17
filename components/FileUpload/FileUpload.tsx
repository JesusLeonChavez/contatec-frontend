/* eslint-disable camelcase */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import React from "react"
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from "prop-types"
import { setFiles, getIconString } from "./utils"
import styles from "../../styles/components/FileUpload.module.css"
import FileItem from "./FileItem"
import ZIcon from "../../components/Icon"
export const { Provider, Consumer } = React.createContext(false)
export function FileLink(
  filename,
  url,
  size = 0,
  extension = "",
  mime_type = ""
) {
  const index = url.indexOf("=")
  const id = url.slice(index)
  this.id = id
  this.name = filename
  this.url = `https://drive.google.com/uc?export=download&id${id}`
  this.delete = false
  this.icon = getIconString(filename)
  this.error = index === -1
  this.extension = extension
  this.size = size
  this.mime_type = mime_type
}

FileLink.propTypes = {
  filename: PropTypes.string,
  id: PropTypes.string
}

type Extensions = "png" | "pdf" | "doc" | "docx" | "jpg" | "jpeg"

interface FileUploadProps {
  files?: any
  readOnly?: boolean
  remove?: boolean
  caption?: string
  placeholder?: string
  outline?: boolean
  disable?: boolean
  onDelete?: (a: number) => void
  onDrop?: (b: any[]) => void
  className?: string
  required?: boolean
  alignment?: "top" | "bottom"
  fullWidth?: boolean
  extensions?: Extensions[]
  style?: Record<string, string>
  loading?: boolean
  errorHelper: boolean
}

export default function FileUpload({
  files,
  extensions,
  readOnly,
  remove,
  caption,
  placeholder,
  outline,
  disabled,
  onDelete,
  onDrop,
  className,
  required,
  alignment,
  fullWidth,
  loading,
  errorHelper,
  ...props
}: FileUploadProps) {
  const [collapse, setCollapse] = React.useState(false)
  const [errorSupport, setErrorSupport] = React.useState(false)
  const toggleFocus = React.useRef(null)
  const handleOut = React.useCallback(
    ev => {
      if (!ev.target.closest("._FileUpload")) {
        setCollapse(false)
      }
    },
    [collapse]
  )

  React.useEffect(() => {
    document
      .querySelector(".chakra-modal__content")
      .addEventListener("click", handleOut)

    return () => {
      document.removeEventListener("click", handleOut)
    }
  }, [handleOut])

  function handleCollapse(value) {
    toggleFocus.current.classList.toggle(styles.focus)
    if (!value) {
      setErrorSupport(false)
    }
    setCollapse(!value)
  }

  function onChange(ev) {
    const _files = ev.target.files
    let availabale_files = []
    let notSupport = false
    let validImage = false
    // eslint-disable-next-line array-callback-return
    availabale_files = Object.values(_files).filter(item => {
      const ext = item.name
        .substring(item.name.lastIndexOf(".") + 1)
        .toLowerCase()
      const size = item.size
      if (extensions.includes(ext)) {
        item.extension = ext
        validImage = true
      } else if (!notSupport) {
        notSupport = true
      }
      if (size <= 1024 * 1024) {
        validImage = true
      } else if (!notSupport) {
        notSupport = true
      }

      if (validImage) {
        return item
      }
      // console.log("gaaa: ", item)
    })

    if (!notSupport) {
      setErrorSupport(false)
      onDrop(Object.values(availabale_files))
    } else {
      setErrorSupport(true)
    }
  }
  const new_files = setFiles(files)
  return (
    <Provider value={{ readOnly, remove }}>
      <div
        className={`_FileUpload ${className} ${
          fullWidth ? styles.fileUploadStyledFullWidth : styles.fileUploadStyled
        } `}
        fullWidth={fullWidth}
      >
        <div
          ref={toggleFocus}
          className={`${styles.fileUploadHead} ${
            errorHelper && styles.errorHelper
          }`}
          outline={outline}
          disabled={disabled}
          required={required}
          onClick={() => handleCollapse(collapse)}
          {...props}
        >
          <i className="fas fa-paperclip mr-4" />
          <div className={styles.containerBadge}>
            <p className="mr2">{placeholder}</p>
            {new_files.length > 0 && (
              <div className={styles.badge}> {new_files.length} </div>
            )}
          </div>
          {/* <i className="fa fa-angle-down mr-1" /> */}
          <ZIcon name="arrow-bottom" className="mr1" />
        </div>
        <div
          className={
            collapse ? styles.fileUploadBodyCollapsed : styles.fileUploadBody
          }
          alignment={alignment}
          collapse={collapse}
          readOnly={readOnly}
        >
          <div className={styles.fileUploadBodyTop}>
            {errorSupport && (
              <p className={styles.textNotSupport}>
                Error: Archivo a cargar no soportado
              </p>
            )}
            <div className={styles.containerFileItems}>
              {!readOnly && new_files.length === 0 && (
                <div className={styles.dragDropStyled}>
                  <i className="fas fa-cloud-upload-alt mb2" />
                  <p className={styles.text}>Arrastra y suelta archivos</p>
                  <p className={`mt2 ${styles.text}`}>
                    Archivos soportados: {extensions?.join(", ")}
                  </p>
                  <input type="file" multiple onChange={onChange} />
                </div>
              )}
              {new_files.map((file, i) => (
                <FileItem key={i} file={file} onDelete={() => onDelete(i)} />
              ))}
              {readOnly && new_files.length === 0 && (
                <div className={styles.caption}>{caption}</div>
              )}
            </div>
          </div>
          {!readOnly && (
            <div className={styles.fileUploadBodyBottom}>
              <div className={styles.containerInputFile}>
                Subir Archivo
                <input
                  className={styles.inputFileStyled}
                  type="file"
                  multiple
                  onChange={onChange}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </Provider>
  )
}

FileUpload.defaultProps = {
  readOnly: false,
  placeholder: "Archivos adjuntos",
  color: "secondary",
  disabled: false,
  alignment: "bottom",
  caption: "No se han encontrado archivos adjuntos",
  onDrop: () => null,
  outline: true,
  remove: false,
  files: [],
  onDelete: () => null,
  extensions: ["png", "pdf", "doc", "docx", "jpg", "jpeg"],
  loading: false
}
