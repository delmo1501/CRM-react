import { Outlet, Link, useLocation  } from "react-router-dom"
//al usar react router DOM no usamos mas <a> si no que usamos los componentes Navlink o Link y en vez de href usamos to
const Layout = () => {

  const location = useLocation() //tiene parametros como hash, key, pathname, search (?id=20), state
  const urlActual = location.pathname //ahora tenemos que analizar la ruta como por ej /clientes entonces el className es javascript



  return (
    <div className="md:flex md:min-h-screen">
        <div className="md:w-1/4 bg-blue-900 px-5 py-10">
          <h2 className="text-4xl font-black text-center text-white">
            CRM-CLIENTS
          </h2>
          <nav className="mt-10">
            <Link 
              className={`${urlActual === '/clientes' ? 'text-blue-300' : 'text-white'}
              block text-2xl mt-2 hover:text-blue-300`}
              to="/clientes"
            >Clients</Link>
            <Link 
              className={`${urlActual === '/clientes/nuevo' ? 'text-blue-300' : 'text-white'}
              block text-2xl mt-2 hover:text-blue-300`}
              to="/clientes/nuevo"
            >New Client</Link>
          </nav>
        </div>
        <div className="md:w-3/4 p-10 md:h-screen overflow-scroll">
          <Outlet />
        </div>
    </div>
  )
}
// En caso de tener el scroll en la pantalla, que queda feo, lo que se hace es darle estilo al layout para que la parte izq se mantenga fija, eso seria...
//md:h-screen overflow-scroll
// antes del Outlet ese md adapta el tamaño de la segunda columna y el p-10 lo separa, en TODAS las secciones
export default Layout