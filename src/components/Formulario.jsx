import React from 'react'
import { Formik, Form, Field } from 'formik'
import { useNavigate } from 'react-router-dom' //la idea es luego de una accion como el submit, enviar directamente a otra parte de la pag como /clientes
import * as Yup from 'yup'
import Alerta from './Alerta'

const Formulario = () => {

  const navigate = useNavigate()

  //que es un SCHEMA, es un objeto que tiene cada campo con su forma que usaras
  const nuevoClienteSchema = Yup.object().shape({
    nombre: Yup.string()
                  .required('The name is required')
                  .max(20,'The name is too long')
                  .min(3, 'The name is too short'), //luego de dar las validaciones necesarias hay que vincular el Schema con el form (validationSchema)
    empresa: Yup.string()
                  .required('The company is required'), 
    email: Yup.string()
                  .email()
                  .required('The email is required'), 
    phone: Yup.number()
                  .integer('The number is not valid')
                  .positive('The number is not valid')
                  .typeError('The number is not valid'),
    
  })

  const handleSubmit = async (values) => {
    try {
      const url = 'http://localhost:4000/clientes'
      const respuesta = await fetch(url, {
          method: 'POST', // /clientes + POST es para crear nuevo registro
          body: JSON.stringify(values), //cada server tiene sus reglas y para JSON con POST,PUT,PATCH, necesitas un content type
          headers: {
            'Content-Type' : 'application/json'
          }

      } ) //normalmente la hariamos solo con url pero necesitamos enviarle el objeto con la configuracion para nuestra peticion
      console.log(respuesta)
      const resultado = await respuesta.json() //estariamos creando el cliente y asignandole el id automaticamente
      console.log(resultado)
      navigate('/clientes') //si sale todo bien, se crea el cliente y se cambia de pag
    } catch (error) {
      console.log(error)
    }
  }


  //los componentes en Formik se declaran dentro de el, no como manejabamos el state antes
  return (
    <div className='bg-white mt-10 px-5 py-10 rounded-md shadow-md md:w-3/4 mx-auto '>
        <h1 className='text-gray-600 font-bold text-xl uppercase text-center'>
            Add Client
        </h1>

        <Formik
          initialValues={{
            nombre:'',
            empresa:'',
            email:'',
            phone:'',
            notes:''
          }} 
          onSubmit={ async (values, {resetForm}) => { /* resetForm solo reinicia el form luego de enviar, no sabemos si lo ingreso o salio todo bien, pero necesitamos el async y decirle que espere que el handleSubmit se complete para resetear*/
            await handleSubmit(values)

            resetForm()
          }}
          validationSchema={nuevoClienteSchema}
        > 
          {({errors, touched}) => {
            /* lo que hacemos aca es almacenar las validaciones del formik, mandariamos data por (), pero es mejor aplicar destructuring y usar errors*/
            /* la idea del touched es cuando lo dejo de seleccionar sin mandar el form, ya valida. NO usamos el ErrorMessage porque no podemos darle estilos*/
            return (         
          <Form
            className='mt-7'
          >
            <div className='mb-4' /*para que haya separacion entre los campos*/ >
              <label
                className='text-gray-800'
                htmlFor='nombre'
              >Name:</label>
              <Field 
                id="nombre" //la idea de este id es usarlo con htmlFor entonces al presionar en nombre te marca el input
                type="text"
                className="mt-2 block w-full p-3 bg-gray-50"
                placeholder="Client's Name"
                name="nombre"
              />

              {errors.nombre && touched.nombre ? (
                <Alerta>{errors.nombre}</Alerta>
              ): null }
            </div>
            <div className='mb-4' /*para que haya separacion entre los campos*/ >
              <label
                className='text-gray-800'
                htmlFor='empresa'
              >Company:</label>
              <Field 
                id="empresa" //la idea de este id es usarlo con htmlFor entonces al presionar en nombre te marca el input
                type="text"
                className="mt-2 block w-full p-3 bg-gray-50"
                placeholder="Company"
                name="empresa"
              />
              {errors.empresa && touched.empresa ? (
                <Alerta>{errors.empresa}</Alerta>
              ): null }
            </div>
            <div className='mb-4' /*para que haya separacion entre los campos*/ >
              <label
                className='text-gray-800'
                htmlFor='email'
              >E-mail:</label>
              <Field 
                id="email" //la idea de este id es usarlo con htmlFor entonces al presionar en nombre te marca el input
                type="email"
                className="mt-2 block w-full p-3 bg-gray-50"
                placeholder="E-mail"
                name="email"
              />
              {errors.email && touched.email ? (
                <Alerta>{errors.email}</Alerta>
              ): null }

            </div>
            <div className='mb-4' /*para que haya separacion entre los campos*/ >
              <label
                className='text-gray-800'
                htmlFor='phone'
              >Phone:</label>
              <Field 
                id="phone" //la idea de este id es usarlo con htmlFor entonces al presionar en nombre te marca el input
                type="tel"
                className="mt-2 block w-full p-3 bg-gray-50"
                placeholder="Phone"
                name="phone"
              />
              {errors.phone && touched.phone ? (
                <Alerta>{errors.phone}</Alerta>
              ): null }
            </div>
            <div className='mb-4' /*para que haya separacion entre los campos*/ >
              <label
                className='text-gray-800'
                htmlFor='Notes'
              >Notes:</label>
              <Field 
                as="textarea"
                id="Notes" //la idea de este id es usarlo con htmlFor entonces al presionar en nombre te marca el input
                type="text"
                className="mt-2 block w-full p-3 bg-gray-50 h-40" //h-40 la altura del textarea
                placeholder="Notes"
                name="notes"
              />
            </div>

            <input
              type="submit"
              value="Add Client"
              className="mt-5 w-full bg-blue-800 p-3 text-white uppercase font-bolt text-lg"
            />

          </Form>
          )}}
        </Formik>
    </div>
  )
}
//el md:w-3/4 es para que el formulario no tome la pantalla y parezca alargado, junto con el mx-auto que lo centra
export default Formulario