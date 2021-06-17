import Image from "next/image"
import styles from "../../styles/sections/Login.module.css"
function ImageAside() {
  return (
    <div className={styles.divContainerPhoto}>
      <Image
        src="/assets/photo.png"
        alt="Picture of the author"
        layout="fill"
        objectFit="cover"
      />
    </div>
  )
}

export default ImageAside
