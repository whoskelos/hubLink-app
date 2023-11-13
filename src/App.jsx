import { useState } from "react";

import { RiMenu2Fill, RiCloseLine } from "react-icons/ri";
import { Sidebar } from "./components/Sidebar";
import { Header } from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Usuarios from "./pages/Usuarios";
import Dispositivos from "./pages/Dispositivos";
import Licencias from "./pages/Licencias";
import Login from "./pages/Login";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./ProtectedRoute";
function App() {
    const [sidebar, setSidebar] = useState(false);

    const handleSidebar = () => {
        setSidebar(!sidebar);
    };
    return (
        <AuthProvider>
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
                            <Route path="/login" element={<Login />} />
                            <Route element={<ProtectedRoute />}>
                                <Route path="/" element={<Dashboard />} />
                                <Route
                                    path="/usuarios"
                                    element={<Usuarios />}
                                />
                                <Route
                                    path="/dispositivos"
                                    element={<Dispositivos />}
                                />
                                <Route
                                    path="/licencias"
                                    element={<Licencias />}
                                />
                            </Route>
                        </Routes>
                    </main>
                </div>
            </div>
        </AuthProvider>
    );
}

export default App;
