/* eslint-disable react/prop-types */
//import { useState } from "react";
import { useForm } from "react-hook-form";
import { useUsers } from "../context/UserContext";

export default function FormCreateUser({ handleClick }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { createUser } = useUsers();

  // const [user, setUser] = useState({
  //     nombre: "",
  //     apellidos: "",
  //     email: "",
  //     passwd: "",
  //     fecha_nacimiento: "",
  //     puesto: "",
  //     file: "",
  // });

  const onSubmit = async (values) => {
    await createUser(values);
  };

  return (
    <>
      <div className="max-w-md mx-auto">
        <h1 className="text-3xl text-center md:text-start font-bold">
          Crear Usuario
        </h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-row flex-wrap justify-around gap-4 pt-4"
        >
          <div className="flex flex-col">
            <label className="font-medium" htmlFor="nombre">
              Nombre
            </label>
            <input
              id="nombre"
              name="nombre"
              type="text"
              {...register("nombre", {
                required: true,
                maxLength: 20,
              })}
              className={`w-[100%] bg-white text-gray-800 px-4 py-2 rounded-md my-2 focus:outline-none active:outline-none ${errors.nombre ? "border border-red-600" : ""
                }`}
              placeholder="Kelvin"
            />
          </div>
          <div className="flex flex-col">
            <label className="font-medium" htmlFor="apellidos">
              Apellidos
            </label>
            <input
              id="apellidos"
              name="apellidos"
              type="text"
              {...register("apellidos", {
                required: true,
                maxLength: 20,
              })}
              className={`w-[100%] bg-white text-gray-800 px-4 py-2 rounded-md my-2 focus:outline-none active:outline-none ${errors.apellidos ? "border border-red-600" : ""
                }`}
              placeholder="Guerrero Mite"
            />
          </div>
          <div className="flex flex-col">
            <label className="font-medium" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              {...register("email", { required: true })}
              className={`w-[100%] bg-white text-gray-800 px-4 py-2 rounded-md my-2 focus:outline-none active:outline-none ${errors.email ? "border border-red-600" : ""
                }`}
              placeholder="email@gmail.com"
            />
          </div>
          <div className="flex flex-col">
            <label className="font-medium" htmlFor="passwd">
              Password
            </label>
            <input
              id="passwd"
              name="passwd"
              type="password"
              {...register("passwd", {
                required: true,
                maxLength: 20,
                minLength: 8,
              })}
              className={`w-[100%] bg-white text-gray-800 px-4 py-2 rounded-md my-2 focus:outline-none active:outline-none ${errors.passwd ? "border border-red-600" : ""
                }`}
              placeholder="#$@cd4%4r"
            />
          </div>
          <div className="flex flex-col">
            <label
              className="font-medium"
              htmlFor="fecha_nacimiento"
            >
              Fecha Nacimiento
            </label>
            <input
              id="fecha_nacimiento"
              name="fecha_nacimiento"
              type="text"
              {...register("fecha_nacimiento", {
                required: true,
              })}
              className={`w-[100%] bg-white text-gray-800 px-4 py-2 rounded-md my-2 focus:outline-none active:outline-none ${errors.fecha_nacimiento
                ? "border border-red-600"
                : ""
                }`}
              placeholder="yyyy/MM/dd"
            />
          </div>
          <div className="flex flex-col">
            <label className="font-medium" htmlFor="puesto">
              Puesto
            </label>
            <input
              id="puesto"
              name="puesto"
              type="text"
              {...register("puesto", {
                required: true,
              })}
              className={`w-[100%] bg-white text-gray-800 px-4 py-2 rounded-md my-2 focus:outline-none active:outline-none ${errors.email ? "border border-red-600" : ""
                }`}
              placeholder="Programador"
            />
          </div>
          <div className="flex-grow flex flex-col">
            <label className="font-medium" htmlFor="puesto">
              Rol
            </label>
            <select name="rol" id="rol" {...register("rol")} className={`w-[100%] bg-white text-gray-800 px-4 py-2 rounded-md my-2 focus:outline-none active:outline-none ${errors.email ? "border border-red-600" : ""
              }`}>
              <option value="user">User</option>
              <option value="moderador">Moderador</option>
              <option value="Admin">Admin</option>
            </select>
          </div>
          {/* <div className="flex flex-col">
            <label className="font-medium" htmlFor="foto_usuario">
              Foto
            </label>
            <input
              id="foto_usuario"
              name="foto_usuario"
              type="file"
              {...register("file", {
                required: false,
              })}
              className={`w-[100%] bg-white px-4 py-2 rounded-md my-2 focus:outline-none active:outline-none ${errors.file
                ? "border border-red-600"
                : ""
                }`}
            />
          </div> */}
          <div className="w-full flex gap-x-2 justify-center">
            <button
              type="submit"
              className="bg-cyan-600 hover:bg-cyan-700 text-white font-medium p-2 rounded-md"
            >
              Registrar
            </button>
            <button
              type="button"
              onClick={() => handleClick()}
              className="bg-red-600 hover:bg-red-700 text-white font-medium p-2 rounded-md"
            >
              Cerrar
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
