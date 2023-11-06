import { useState } from "react";

import { RiMenu2Fill, RiCloseLine, RiSearchLine } from "react-icons/ri";
import { Sidebar } from "./components/Sidebar";
import { Header } from "./components/Header";
function App() {

  const [sidebar, setSidebar] = useState(false)

  const handleSidebar = () => {
    setSidebar(!sidebar)
  }
  return (
    <div className='min-h-screen grid grid-cols-1 lg:grid-cols-6'>
      {/** Sidebar */}
      <Sidebar sidebar={sidebar} />
      {/** Menu buton */}
      <button onClick={handleSidebar} className="block lg:hidden absolute bottom-4 right-4 bg-cyan-600 p-2 text-white rounded-full text-2xl">
        {sidebar ? <RiCloseLine /> : <RiMenu2Fill />}
      </button>
      {/** Main */}
      <div className="col-span-5">
        {/** Header */}
        <Header />
        {/** Content */}
        <div className="p-4 lg:p-12 bg-gray-100">
          {/** Title */}
          <div className="mb-8">
            <h1 className="text-3xl font-semibold">Usuarios</h1>
          </div>
          {/** Searcher */}
          <div className="w-full">
            <form className="w-full lg:w-[40%]">
              <div className="relative">
                <RiSearchLine className="absolute left-2 top-3 text-cyan-600" />
                <input type="text" className="bg-white py-2 pl-8 pr-4 outline-none rounded-lg w-full" placeholder="Buscar" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
