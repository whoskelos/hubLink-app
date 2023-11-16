import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export function Header() {
    const { user, isAuthenticated } = useAuth();
    console.log(user);
    const classLinks =
        "block text-center active:text-gray-900 focus:text-gray-900 focus:font-bold py-5 focus:border-b-2 focus:border-cyan-600";
    return (
        <nav className="bg-white flex justify-center h-[66px] border-b border-gray-300">
            <ul className="flex gap-x-4  [&>li]:text-gray-400 [&>li]:font-semibold">
                {isAuthenticated ? (
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
                ) : (
                    <>
                        <li>
                            <Link
                                className="block text-center active:text-gray-900 text-gray-900 py-5 border-b-2 border-cyan-600"
                                to={"/login"}
                            >
                                HubLINK
                            </Link>
                        </li>
                    </>
                )}
            </ul>
        </nav>
    );
}
