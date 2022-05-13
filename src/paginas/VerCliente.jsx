import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Spinner from "../components/Spinner";

const VerCliente = () => {
  const [cliente, setCliente] = useState({});
  const [cargando, setCargando] = useState(false); //para evitar el render de la api cada vez que refrescamos

  const { id } = useParams();

  useEffect(() => {
    const obtenerClienteAPI = async () => {
      try {
        setCargando(!cargando);
        const url = `http://localhost:4000/clientes/${id}`;
        const respuesta = await fetch(url);
        const resultado = await respuesta.json();
        setCliente(resultado);
      } catch (error) {
        console.log(error);
      }
      setCargando(false) // estos dos setCargando son muy importantes, porque si no queda renderizando, no cambia el estado y
       //el spinner se queda ahi
    };
    obtenerClienteAPI();
  }, []);

  console.log(id);

  return (
    cargando ? <Spinner /> : 
    Object.keys(cliente).length === 0 ?
    `The client is empty` : 
    
    (

    <div>
      <p className="font-black text-4xl text-blue-900">Information about:</p>
      <span className="font-black text-3xl text-blue-900">
        {" "}
        {cliente.nombre}
      </span>
      {/* <p className="text-2xl text-gray-700 mt-4">
              <span className=" uppercase font-bold">Client: </span>
              {cliente.nombre}
            </p> */}
      <p className="text-2xl text-gray-700 mt-4 font-serif">
        <span className=" uppercase font-bold">Email: </span>
        {cliente.email}
      </p>
      <p className="text-2xl text-gray-700 mt-4 font-serif">
        <span className=" uppercase font-bold">Phone: </span>
        {cliente.phone ? `${cliente.phone}` : "This client has no phone"}
      </p>
      <p className="text-2xl text-gray-700 mt-4 font-serif">
        <span className=" uppercase font-bold">From: </span>
        {cliente.empresa}
      </p>
      <p className="text-2xl text-gray-700 mt-4 font-serif">
        <span className=" uppercase font-bold">Notes: </span>
        {cliente.notes ? `${cliente.notes}` : "This client has no notes"}
      </p>
    </div>
    )
  )
}

// queres hacer la misma ternaria pero que SOLO APAREZCA si hay notas?
// {cliente.notes && (
//   <p>
//     <span>Notes:</span>
//     {cliente.notes}
//   </p>
// )}
export default VerCliente;
