import { useState } from "react";

import { MenuItem } from "./components/MenuItem";
import { RiLogoutBoxRLine, RiMenu2Fill, RiCloseLine } from "react-icons/ri";
function App() {

  const [sidebar, setSidebar] = useState(false)

  const handleSidebar = () => {
    setSidebar(!sidebar)
  }
  return (
    <div className='min-h-screen grid grid-cols-1 lg:grid-cols-6'>
      {/** Sidebar */}
      <div className={`fixed lg:static w-[80%] md:w-[40%] lg:w-full top-0 z-50 bg-white transition-all ${sidebar ? '-left-0' : '-left-full'} overflow-y-scroll md:overflow-y-hidden h-full col-span-1 p-8`}>
        {/*LOGOTIPO*/}
        <div className="text-center p-8">
          <h1 className="font-bold tracking-[4px]">
            Hub<span className="uppercase text-cyan-600">Link</span>
          </h1>
        </div>
        <div className="flex flex-col justify-between h-[780px]">
          {/* Menu */}
          <nav>
            <ul>
              <li>
                <MenuItem nombre="Dashboard" />
              </li>
              <li>
                <MenuItem nombre="Usuarios" />
              </li>
              <li>
                <MenuItem nombre="Dispositivos" />
              </li>
              <li>
                <MenuItem nombre="Licencias" />
              </li>
            </ul>
          </nav>
          {/** Image and Logout */}
          <div className="flex flex-col gap-4">
            <img src="menu-img.svg" alt="Imagen del menu" />
            {/** Descripcion */}
            <div className="bg-cyan-50 p-8 flex flex-col gap-4 rounded-3xl">
              <h3 className="text-xl text-center">Gestion Activos</h3>
              <p className="text-gray-500 text-center">
                Gestiona los activos de tu empresa
              </p>
              <button className="bg-cyan-600 text-white p-2 rounded-lg">Saber mas</button>
            </div>
            <a href="#" className="flex items-center gap-4 hover:bg-cyan-600 p-4 text-gray-400 hover:text-white font-semibold rounded-lg transition-colors">
              <RiLogoutBoxRLine />
              Logout
            </a>
          </div>
        </div>
      </div>
      {/** Boton menu movil */}
      <button onClick={handleSidebar} className="block lg:hidden absolute bottom-4 right-4 bg-cyan-600 p-2 text-white rounded-full text-2xl">
        {sidebar ? <RiCloseLine /> : <RiMenu2Fill /> }
      </button>
      {/** Main */}
      <div className="col-span-5">Main</div>
    </div>
  )
}

export default App
