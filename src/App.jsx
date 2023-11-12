import { useState } from "react";

import { RiMenu2Fill, RiCloseLine } from "react-icons/ri";
import { Sidebar } from "./components/Sidebar";
import { Header } from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./views/Dashboard";
import Usuarios from "./views/Usuarios";
import Dispositivos from "./views/Dispositivos";
import Licencias from "./views/Licencias";
import Login from "./views/Login";
function App() {
    const [sidebar, setSidebar] = useState(false);

    const handleSidebar = () => {
        setSidebar(!sidebar);
    };
    return (
        <div className="min-h-screen grid grid-cols-1 lg:grid-cols-6">
            {/** Sidebar */}
            <Sidebar sidebar={sidebar} />
            {/** Menu buton */}
            <button
                onClick={handleSidebar}
                className="block lg:hidden absolute bottom-0 right-2 bg-cyan-600 p-2 text-white rounded-full text-2xl"
            >
                {sidebar ? <RiCloseLine /> : <RiMenu2Fill />}
            </button>
            {/** Main */}
            <div className="col-span-5 flex flex-col">
                {/** Header */}
                <Header />
                {/** Content */}
                <main className="flex-grow container w-full max-w-[80%] m-auto">
                    <Routes>
                        <Route path="/" element={<Dashboard />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/usuarios" element={<Usuarios />} />
                        <Route
                            path="/dispositivos"
                            element={<Dispositivos />}
                        />
                        <Route path="/licencias" element={<Licencias />} />
                    </Routes>
                </main>
            </div>
        </div>
    );
}

export default App;
