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
import LogoutButton from "./components/LogoutButton";
import { Toaster } from "sonner";
import UserDetail from "./pages/UserDetail";
import NotFoundPage from "./pages/NotFoundPage";
function App() {
  return (
    <AuthProvider>
      <UserProvider>
        <div>
          <div className="flex flex-col">
            {/** Header */}
            <Header />
            {/** Content */}
            <main className="container w-full max-w-[80%] m-auto">
              <Routes>
                <Route path="/login" element={<Login />} />
                <Route element={<ProtectedRoute />}>
                  <Route path="/" element={<Dashboard />} />
                  <Route path="/usuarios" element={<Usuarios />} />
                  <Route path="/usuarios/:id" element={<UserDetail />} />
                  <Route path="/dispositivos" element={<Dispositivos />} />
                  <Route path="/licencias" element={<Licencias />} />
                </Route>
                <Route path="*" element={<NotFoundPage />} />
              </Routes>
            </main>
          </div>
          <LogoutButton />
          <Toaster richColors />
        </div>
      </UserProvider>
    </AuthProvider>
  );
}

export default App;
