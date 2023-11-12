/* eslint-disable react/prop-types */
import { RiLogoutBoxRLine } from "react-icons/ri";
import { MenuItem } from "./MenuItem";
import { Link } from "react-router-dom";

export function Sidebar({ sidebar }) {
    return (
        <div className={`fixed lg:static w-[80%] md:w-[40%] lg:w-full top-0 z-50 bg-white transition-all ${sidebar ? '-left-0' : '-left-full'} overflow-y-scroll md:overflow-y-hidden h-full col-span-1 p-8 flex flex-col justify-center`}>
            {/*LOGOTIPO*/}
            <div className="text-center mb-4">
                <h1 className="text-2xl font-bold tracking-[4px]">
                    Hub<span className="uppercase text-cyan-600">Link</span>
                </h1>
            </div>
            <div className="flex flex-col justify-between h-[780px]">
                {/* Menu */}
                <nav>
                    <ul>
                        <li>
                            <Link to={"/"}>
                                <MenuItem nombre="Dashboard" />
                            </Link>
                        </li>
                        <li>
                            <Link to={"/usuarios"}>
                                <MenuItem nombre="Usuarios" />
                            </Link>
                        </li>
                        <li>
                            <Link to={"/dispositivos"}>
                                <MenuItem nombre="Dispositivos" />
                            </Link>
                        </li>
                        <li>
                            <Link to={"/licencias"}>
                                <MenuItem nombre="Licencias" />
                            </Link>
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
                        <button className="bg-cyan-500 hover:bg-cyan-600 text-white p-2 rounded-lg">Saber mas</button>
                    </div>
                    <a href="#" className="flex items-center gap-4 hover:bg-cyan-600 p-4 text-gray-400 hover:text-white font-semibold rounded-lg transition-colors">
                        <RiLogoutBoxRLine />
                        Logout
                    </a>
                </div>
            </div>
        </div>

    )
} 