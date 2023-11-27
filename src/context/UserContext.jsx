/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from "react";
import { createUserRequest, getUsersRequest } from "../api/users";
import { toast } from 'sonner'
export const UserContext = createContext();

export const useUsers = () => {
    const context = useContext(UserContext);

    if (!context) {
        throw new Error("useUsers debe ser usado dentro de UsersProvider");
    }
    return context;
};

export const UserProvider = ({ children }) => {
    const [users, setUsers] = useState([]);
    const [errors, setErrors] = useState([]);

    const getUsers = async () => {
        try {
            const res = await getUsersRequest();
            setUsers(res.data)
        } catch (error) {
            setErrors(error);
        }
    };

    const createUser = async (user) => {
        try {
            const res = await createUserRequest(user);
            if (res.status === 201) {
                toast.success("Usuario creado correctamente")
            }
        } catch (error) {
            console.log(error);
            toast.error(error.response.data.message);
            setErrors(error);
        }
    };

    return (
        <UserContext.Provider
            value={{
                users,
                createUser,
                getUsers,
                errors,
            }}
        >
            {children}
        </UserContext.Provider>
    );
};
