/* eslint-disable camelcase */
export interface PropsUserPost {
  id: number
  createdAt: string
  updatedAt: string
  us_correo: string
  us_nombre: string
  us_apellido: string
  avatar: string
}

export interface PropsCategoryPost {
  id: number
  createdAt: string
  updatedAt: string
  cat_nombre: string
  cat_descripcion: string
}

export interface PropsPost {
  id: number
  createdAt: string
  updatedAt: string
  pst_isActive: boolean
  pst_descripcion_corta: string
  pst_nombre: string
  pst_descripcion_incluye: string
  pst_descripcion: string
  pst_imagen_1: string
  pst_imagen_2: string
  pst_imagen_3: string
  pst_imagen_4: string
  pst_imagen_5: string
  pst_precioBase: number
  pstUsuarioId: PropsUserPost
  pstCategoriaId: PropsCategoryPost
}

export type PropsModalPost = {
  variant: string
  width: string
  backgroundColor?: string
  showModalButtonText?: string
  icon?: boolean
  mypost?: PropsPost
}

export interface ImageProps {
  public_id: string
  url: string
}
