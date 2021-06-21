import { Link, FormLabel, Input, Button } from "@chakra-ui/react"
import styles from "../../styles/sections/Show.module.css"

export default function Show() {
  return (
    <div className={styles.conteiner}>
      <div className={styles.conteinerSinFondo}></div>
      <div className={styles.conteinerConFondo}></div>
      <div className={styles.continerSup}>
        <div className={styles.conteinerForm}>
          <h1 className={styles.labelPrincipal}>Datos personales</h1>
          <p className={styles.labelsub}>
            Puedes cambiar los datos de tu perfil cuantas veces lo consideres
            necesario.
          </p>
          <FormLabel className={styles.label}>Nombres</FormLabel>
          <Input
            borderColor="black.100"
            className={styles.Entrada}
            placeholder="Escribe tus nombres aca aquí"
          />
          <FormLabel className={styles.label}>Apellidos</FormLabel>
          <Input
            borderColor="black.100"
            className={styles.Entrada}
            placeholder="Escribe tus apellidos aquí"
          />
          <FormLabel className={styles.label}>Correo electrónico</FormLabel>
          <Input
            borderColor="black.100"
            className={styles.Entrada}
            type="email"
            placeholder="Escribe tu correo aquí"
          />
          <Button variant="secondary" className={styles.Boton}>
            Guardar Cambios
          </Button>
        </div>
        <div className={styles.conteinerList}>
          <h1 className={styles.titlesub}>Editar Perfil</h1>
          <Link className={styles.linksub}>Datos personales</Link>
          <Link className={styles.linksub}>Contraseña</Link>
          <h1 className={styles.titlesub}>Mis Pagos</h1>
          <Link className={styles.linksub}>Realizar pagos</Link>
          <Link className={styles.linksub}>Historial</Link>
          <Link className={styles.linksub}>Métodos de pago</Link>
        </div>
      </div>
    </div>
  )
}
