/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext, useState, useEffect } from "react";
import { loginRequest } from "../api/auth";
import { setToken } from "../api/users";

export const AuthContext = createContext();

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth debe ser usado dentro de AuthProvider");
    }
    return context;
};

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [errors, setErrors] = useState([]);

    useEffect(() => {
        const localUserData = JSON.parse(
            window.localStorage.getItem("userData")
        );
        if (localUserData) {
            setUser(localUserData);
            setIsAuthenticated(true);
            setToken(localUserData.token)
        }
    }, []);

    const signin = async (user) => {
        try {
            const res = await loginRequest(user);
            setUser(res.data);
            setIsAuthenticated(true);
            window.localStorage.setItem("userData", JSON.stringify(res.data));
            setToken(res.data.token)
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

    const logout = () => {
        window.localStorage.removeItem("userData");
        setIsAuthenticated(false);
        setUser(null);
        setToken('')
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
