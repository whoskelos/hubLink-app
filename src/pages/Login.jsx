/* eslint-disable react-hooks/exhaustive-deps */
import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const { signin, isAuthenticated, errors: signinErrors } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (isAuthenticated) {
            navigate("/");
        }
    }, [isAuthenticated]);

    const onSubmit = handleSubmit(async (values) => {
        signin(values);
    });

    return (
        <div className="flex h-[calc(100vh-100px)] items-center justify-center">
            <div className="bg-gradient-to-r from-cyan-700 to-cyan-900 max-w-md w-full p-10 mt-8 rounded-md">
                {signinErrors.map((error, i) => (
                    <div
                        key={i}
                        className="bg-red-500 p-2 text-white font-medium"
                    >
                        {error}
                    </div>
                ))}
                <h1 className="text-2xl font-bold tracking-wide text-white">Login</h1>
                <form onSubmit={onSubmit}>
                    <input
                        type="email"
                        {...register("email", { required: true })}
                        className="w-full bg-cyan-950 text-white px-4 py-2 rounded-md my-2"
                        placeholder="email@gmail.com"
                    />
                    {errors.email && (
                        <p className="text-red-400 font-bold">
                            El email es requerido
                        </p>
                    )}
                    <input
                        type="password"
                        {...register("passwd", { required: true })}
                        className="w-full bg-cyan-950 text-white px-4 py-2 rounded-md my-2"
                        placeholder="password"
                    />
                    {errors.passwd && (
                        <p className="text-red-400 font-bold">
                            La contrasena es requerida
                        </p>
                    )}
                    <button
                        type="submit"
                        className="bg-gradient-to-br from-cyan-800 to-cyan-950 hover:opacity-70 p-2 rounded-md text-white font-medium"
                    >
                        Acceder
                    </button>
                </form>
            </div>
        </div>
    );
}
