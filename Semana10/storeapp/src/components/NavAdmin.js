import React,{Fragment} from 'react'
import {Link} from 'react-router-dom'

export default function NavAdmin() {
  return (
    <Fragment>
      <Link className="nav-link text-dark" to='/dashboard'>Dashboard</Link>
      <Link className="nav-link text-dark" to='/crearproducto'>Crear Producto</Link>
      <Link className="nav-link text-dark" to='/crearcategoria'>Crear Categoria</Link>
      <span className="nav-link text-dark">Salir</span>
    </Fragment>
  )
}
