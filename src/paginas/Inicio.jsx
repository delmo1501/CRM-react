import { useEffect, useState } from "react"
import Cliente from "../components/Cliente"

const Inicio = () => {

  const [clientes, setClientes] = useState([])

  useEffect(() => {
      const obtenerClientesAPI = async () => {
          try {
            const url = 'http://localhost:4000/clientes' //aca solo haremos GET por ende no necesitamos mas parametros en fetch
            const respuesta = await fetch(url)
            const resultado = await respuesta.json()
            setClientes(resultado) //traemos todos los clientes por json y los seteamos dentro de setClientes
          } catch (error) {
            console.log(error)
          }
      }

      obtenerClientesAPI()
  }, []) //arreglo vacio solo se ejecuta 1 vez, es para consultar API una vez el componente este listo
  

  return (
    <>
        <h1 className='font-black text-4xl text-blue-900'>Clients</h1>
        <p className='mt-3'>Manage your Clients</p>

        <table className="w-full mt-5 table-auto shadow bg-white">
          <thead className="bg-blue-800 text-white">
            <tr>
              <th className="p-2">Name</th>
              <th className="p-2">Contact</th>
              <th className="p-2">Company</th>
              <th className="p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {clientes.map( cliente => (
                <Cliente 
                  key={cliente.id}
                  cliente={cliente}
                />
            ))}
          </tbody>
        </table>
    </>
  )
}

export default Inicio