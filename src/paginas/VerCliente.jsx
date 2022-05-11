import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const VerCliente = () => {

  const [cliente, setCliente] = useState({})
  const {id} = useParams()

  useEffect(() => {
    const obtenerClienteAPI = async () => {
      try {
        const url = `http://localhost:4000/clientes/${id}`
        const respuesta = await fetch(url)
        const resultado = await respuesta.json()
        setCliente(resultado)

      } catch (error) {
        console.log(error)
      }
    }
    obtenerClienteAPI()
  }, [])
  

  console.log(id)

  return (
    <div>
      <p className='font-black text-4xl text-blue-900'>Information about:   
        
      </p> 
      <span className='font-black text-3xl text-blue-900'> {cliente.nombre}</span>
      {/* <p className="text-2xl text-gray-700 mt-4">
        <span className=" uppercase font-bold">Client: </span>
        {cliente.nombre}
      </p> */}
      <p className="text-2xl text-gray-700 mt-4">
        <span className=" uppercase font-bold">Email: </span>
        {cliente.email}
      </p>
      <p className="text-2xl text-gray-700 mt-4">
        <span className=" uppercase font-bold">Phone: </span>
        {cliente.phone ? `${cliente.phone}` : 'This client has no phone'}
      </p>
      <p className="text-2xl text-gray-700 mt-4">
        <span className=" uppercase font-bold">From: </span>
        {cliente.empresa}
      </p>
      <p className="text-2xl text-gray-700 mt-4">
        <span className=" uppercase font-bold">Notes: </span>
        {cliente.notes ? `${cliente.notes}` : 'This client has no notes'}
      </p>
    </div>
  )
}

export default VerCliente