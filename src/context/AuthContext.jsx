/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext, useState, useEffect } from "react";
import { loginRequest } from "../api/auth";

export const AuthContext = createContext();

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth debe ser usado dentro de AuthProvider");
    }
    return context;
};

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState();
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [errors, setErrors] = useState([]);

    const signin = async (user) => {
        try {
            const res = await loginRequest(user);
            setUser(res.data);
            setIsAuthenticated(true);
            window.localStorage.setItem("loggedUser", JSON.stringify(res.data));
        } catch (error) {
            setErrors(error.response.data.message);
            setUser(null);
            setIsAuthenticated(false);
        }
    };

    useEffect(() => {
        if (errors.length > 0) {
            const timer = setTimeout(() => {
                setErrors([]);
            }, 4000);
            return () => clearTimeout(timer);
        }
    }, [errors]);

    useEffect(() => {
        const data = JSON.parse(window.localStorage.getItem("loggedUser"));
        if (!data) {
            setIsAuthenticated(false);
            setUser(null);
            return;
        }
        setIsAuthenticated(true);
        setUser(data);
    }, []);

    const logout = () => {
        window.localStorage.removeItem("loggedUser");
        setIsAuthenticated(false)
        setUser(null)

    };

    return (
        <AuthContext.Provider
            value={{
                signin,
                user,
                isAuthenticated,
                errors,
                logout,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};
