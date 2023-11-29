/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useUsers } from "../context/UserContext";
import Searcher from "../components/Searcher";
import Modal from "../components/Modal";

export default function Usuarios() {
    const { users } = useUsers()
    const [search, setSearch] = useState('')
    const [filteredUsers, setFilteredUsers] = useState([])


    useEffect(() => {
        setFilteredUsers(users);
    }, [users]); // Este efecto se ejecuta solo cuando 'users' cambia

    useEffect(() => {
        // Filtrar usuarios en base a la búsqueda
        const filteredUsers = users.filter(usuario =>
            usuario.nombre.toLowerCase().includes(search.toLowerCase())
        );

        // Actualizar la lista de usuarios filtrados
        setFilteredUsers(filteredUsers);
    }, [search, users]);

    var options = {
        year: "numeric",
        month: "short",
        day: "numeric",
    };


    const handleSearch = (event) => {
        const { value } = event.target
        setSearch(value)
    }

    const listUsers = filteredUsers.map((user) => (
        // <div
        //     key={user.usuario_id}
        //     className="bg-white flex justify-start md:justify-between items-center px-8 py-2 rounded-lg"
        // >
        <div
            key={user.usuario_id}
            className="bg-white grid grid-cols-8 px-8 py-2 rounded-lg"
        >
            <div className="bg-cyan-600 w-8 h-8 rounded-full hidden md:flex items-center justify-center text-white font-bold">
                <div>
                    {user.nombre.substring(0, 1)}
                    {user.apellidos.substring(0, 1)}
                </div>
            </div>
            <div className="col-span-3">{user.nombre} <b>{user.apellidos}</b></div>
            <div className="col-span-2 hidden md:block">{user.puesto}</div>

            <div className="col-span-2 hidden md:block text-center">
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
                        Usuarios ({filteredUsers.length})
                    </span>
                    <h1 className="text-5xl text-gray-700 tracking-tight font-bold">
                        Overview
                    </h1>
                </div>
                <div className="flex items-center self-stretch md:self-end gap-x-2 md:gap-x-0">
                    <Searcher search={search} handleSearch={handleSearch} />
                    <Modal />
                </div>
            </header>
            <div className="flex flex-col gap-2 py-4">{listUsers}</div>
        </div>
    );
}
