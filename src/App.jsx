import { Header } from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Usuarios from "./pages/Usuarios";
import Dispositivos from "./pages/Dispositivos";
import Licencias from "./pages/Licencias";
import Login from "./pages/Login";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./ProtectedRoute";
import { UserProvider } from "./context/UserContext";
function App() {
    return (
        <AuthProvider>
            <UserProvider>
                <div>
                    {/** Sidebar */}
                    {/* <Sidebar sidebar={sidebar} /> */}
                    {/** Menu buton */}

                    {/** Main */}
                    <div className="flex flex-col">
                        {/** Header */}
                        <Header />
                        {/** Content */}
                        <main className="container w-full max-w-[80%] m-auto">
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
            </UserProvider>
        </AuthProvider>
    );
}

export default App;
