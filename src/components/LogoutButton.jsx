import { RiLogoutBoxLine } from "react-icons/ri";
import { useAuth } from "../context/AuthContext";
export default function LogoutButton() {
    const { user, logout, isAuthenticated } = useAuth();

    return (
        <>
            {isAuthenticated && (
                <div className="fixed left-4 bottom-4 bg-black/[.7] py-2 px-6 rounded-full">
                    <h4 className="text-white font-medium">
                        Bienvenido ⚛️ － <span>{user.user}</span>
                    </h4>
                    <h5 className="flex items-center gap-x-2 text-red-500 font-bold">
                        Desconectar
                        <button onClick={logout}>
                            <RiLogoutBoxLine className="text-xl text-red-500" />
                        </button>
                    </h5>
                </div>
            )}
        </>
    );
}
