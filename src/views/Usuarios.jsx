import { useFetch } from "../hooks/useFetch";
export default function Usuarios() {
    const { users } = useFetch("http://localhost:3000/api/usuarios");
    return (
        <div>
            <header>
                <h1 className="text-6xl text-gray-800 font-medium tracking-wide text-center lg:text-start">
                    Usuarios
                </h1>
            </header>
            <div className="py-4">
                <ul>
                    {users?.map((user) => (
                        <li key={user.usuario_id}>{user.nombre}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
