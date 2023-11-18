/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useUsers } from "../context/UserContext";
import Searcher from "../components/Searcher";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Usuarios() {
    const { isAuthenticated } = useAuth();
    const navigate = useNavigate();
    
    useEffect(() => {
        if (!isAuthenticated) navigate("/login")
    },[])
    const { getUsers, users } = useUsers();
    var options = {
        weekday: "short",
        year: "numeric",
        month: "long",
        day: "numeric",
    };
    useEffect(() => {
        getUsers();
    }, []);

    const listUsers = users.map((user) => (
        <div
            key={user.usuario_id}
            className="bg-white flex justify-between items-center px-8 py-2 rounded-lg"
        >
            <div className="bg-cyan-600 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold">
                <div>
                    {user.nombre.substring(0, 1)}
                    {user.apellidos.substring(0, 1)}
                </div>
            </div>
            <div className="w-15 md:w-64">{user.nombre}</div>
            <div>{user.puesto}</div>

            <div className="hidden md:block">
                {new Date(user.fecha_nacimiento).toLocaleString(
                    "es-ES",
                    options
                )}
            </div>
        </div>
    ));

    return (
        <div className="py-4">
            <header className="flex flex-col md:flex-row w-full md:justify-between item-start md:items-center">
                <div>
                    <span className="text-lg text-gray-800 tracking-wide text-center lg:text-start">
                        Usuarios ({users.length})
                    </span>
                    <h1 className="text-5xl text-gray-700 tracking-tight font-bold">
                        Overview
                    </h1>
                </div>
                <div className="self-stretch md:self-end">
                    <Searcher />
                </div>
            </header>
            <div className="flex flex-col gap-2 py-4">{listUsers}</div>
        </div>
    );
}
