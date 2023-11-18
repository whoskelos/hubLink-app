import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export function Header() {
    const { isAuthenticated } = useAuth();
    const classLinks =
        "block text-center active:text-gray-900 focus:text-gray-900 focus:font-bold py-5 focus:border-b-2 focus:border-cyan-600 hover:text-cyan-600 transition-colors";
    return (
        <nav className="bg-white flex justify-center h-[66px] border-b border-gray-300">
            <ul className="flex gap-x-4  [&>li]:text-gray-400 [&>li]:font-semibold">
                {isAuthenticated && (
                    <>
                        <li className="w-30">
                            <Link to={"/"} className={classLinks}>
                                Dashboard
                            </Link>
                        </li>
                        <li className="">
                            <Link to={"/usuarios"} className={classLinks}>
                                Usuarios
                            </Link>
                        </li>
                        <li className="">
                            <Link to={"/dispositivos"} className={classLinks}>
                                Dispositivos
                            </Link>
                        </li>
                        <li className="">
                            <Link to={"/licencias"} className={classLinks}>
                                Licencias
                            </Link>
                        </li>
                    </>
                )}
            </ul>
        </nav>
    );
}
