import Link from 'next/link'
import styles from '../styles/components/Navbar.module.css'
import ZIcon from '../components/Icon/Logo'
export default function Navbar() {
  return (
    <div className={styles.navbarContainer}>
      <nav className={styles.navbarWrapper}>
        <div>
          <Link href="/">
            <a>
              <ZIcon name="logo" />
            </a>
          </Link>
        </div>
        <ul>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/explorar">
              <a>Explorar anuncio</a>
            </Link>
          </li>
          <li>
            <Link href="/publicar">
              <a href="">Publicar</a>
            </Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link href="/inicio-sesion">
              <a href="">Iniciar sesión</a>
            </Link>
          </li>
          <li>
            <Link href="/registro">
              <a href="">Registrarse</a>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}
