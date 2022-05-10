import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './layout/Layout'
import Inicio from './paginas/Inicio'
import NuevoCliente from './paginas/NuevoCliente'
import EditarCliente from './paginas/EditarCliente'


function App() {

// Route doble es un grupo de rutas, Route cerrada por si misma es una sola <Route />
// La idea es que el path te delimita la pagina "/", esta seria la pagina principal, entonces en esa renderizarias element={<IniciarSesion />}
//En el path editar, podemos agregar el placeholder id (:id), entonces lo que hara sera escuchar por el id y consultar a la DB
// INDEX es importante cuando no renderiza una Route individual por defecto
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/clientes' element={<Layout />}>
          <Route index element={<Inicio />} /> 
          <Route path='nuevo' element={<NuevoCliente/>} />
          <Route path='editar' element={<EditarCliente/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
