import { NavLink } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export function Header() {
    const { isAuthenticated } = useAuth();
    return (
        <nav className="bg-white flex justify-center h-[66px] border-b border-gray-300">
            <ul className="flex gap-x-4 [&>li]:text-gray-400 [&>li]:font-semibold">
                {isAuthenticated && (
                    <>
                        <li className="w-30">
                            <NavLink to={"/"} className={({ isActive }) => isActive ? 'block text-center font-bold py-5 border-b-2 border-cyan-600 text-cyan-600 transition-all' : "block py-5 hover:text-cyan-600 transition-colors"}>
                                Dashboard
                            </NavLink>
                        </li>
                        <li className="">
                            <NavLink to={"/usuarios"} className={({ isActive }) => isActive ? 'block text-center font-bold py-5 border-b-2 border-cyan-600 text-cyan-600 transition-all' : "block py-5 hover:text-cyan-600 transition-colors"}>
                                Usuarios
                            </NavLink>
                        </li>
                        <li className="">
                            <NavLink to={"/dispositivos"} className={({ isActive }) => isActive ? 'block text-center font-bold py-5 border-b-2 border-cyan-600 text-cyan-600 transition-all' : "block py-5 hover:text-cyan-600 transition-colors"}>
                                Dispositivos
                            </NavLink>
                        </li>
                        <li className="">
                            <NavLink to={"/licencias"} className={({ isActive }) => isActive ? 'block text-center font-bold py-5 border-b-2 border-cyan-600 text-cyan-600 transition-all' : "block py-5 hover:text-cyan-600 transition-colors"}>
                                Licencias
                            </NavLink>
                        </li>
                    </>
                )}
            </ul>
        </nav>
    );
}
