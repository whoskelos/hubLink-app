import { useAuth } from "../context/AuthContext";

export function Header() {
    const { user, isAuthenticated } = useAuth();
    return (
        <header className="p-4">
            <nav className="flex items-center justify-center md:justify-end font-medium">
                <ul>
                    <li>{isAuthenticated ? user.user : ""}</li>
                </ul>
            </nav>
        </header>
    );
}
