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
    const { signin, isAuthenticated } = useAuth();
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
            <div className="bg-cyan-600/[.09] max-w-md w-full p-10 rounded-md shadow-xl">
                <h1 className="text-3xl font-bold tracking-wide text-gray-800">
                    Login
                </h1>
                <form onSubmit={onSubmit}>
                    <input
                        type="email"
                        {...register("email", { required: true })}
                        className={`w-full bg-white text-gray-800 px-4 py-2 rounded-md my-2 focus:outline-none active:outline-none ${
                            errors.email ? "border border-red-600" : ""
                        }`}
                        placeholder="email@gmail.com"
                    />
                    <input
                        type="password"
                        {...register("passwd", { required: true })}
                        className={`w-full bg-white text-gray-800 px-4 py-2 rounded-md my-2 focus:outline-none active:outline-none ${
                            errors.email ? "border border-red-600" : ""
                        }`}
                        placeholder="password"
                    />
                    <button
                        type="submit"
                        className="bg-gradient-to-br from-cyan-400 to-cyan-600 hover:opacity-70 p-2 rounded-md text-white font-medium mt-2 focus:outline-none"
                    >
                        Acceder
                    </button>
                </form>
            </div>
        </div>
    );
}
