import React from 'react'
import Formulario from '../components/Formulario'

const NuevoCliente = () => {
  return (
    <>
        <h1 className='font-black text-4xl text-blue-900'>NuevoCliente</h1>
        <p className='mt-3'>Fill these fields in order to register a new client</p>

        <Formulario />
    </>
  )
}

export default NuevoCliente