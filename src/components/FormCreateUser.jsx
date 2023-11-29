/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useForm } from "react-hook-form";
import { useUsers } from "../context/UserContext";

export default function FormCreateUser({ handleClick }) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
    reset
  } = useForm();
  const { createUser } = useUsers();

  const onSubmit = async (data) => {
    const formData = new FormData()
    formData.append("nombre", data.nombre)
    formData.append("apellidos", data.apellidos)
    formData.append("email", data.email)
    formData.append("passwd", data.passwd)
    formData.append("fecha_nacimiento", data.fecha_nacimiento)
    formData.append("puesto", data.puesto)
    formData.append("rol", data.rol)
    formData.append("foto_usuario", data.foto_usuario[0])
    await createUser(formData);
  };

  if (isSubmitSuccessful) {
    reset()
  }

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
          {/* TODO: poner los errores en un popover */}
          <div className="flex flex-col">
            <label className="font-medium" htmlFor="nombre">
              Nombre
            </label>
            <input
              id="nombre"
              name="nombre"
              type="text"
              {...register("nombre", {
                required: {
                  value: true,
                  message: "Nombre es requerido"
                },
                minLength: {
                  value: 3,
                  message: "Nombre debe tener al menos 3 caracteres"
                },
                maxLength: {
                  value: 20,
                  message: "Nombre supera los 20 caracteres"
                }
              })}
              className={`w-[100%] bg-white text-gray-800 px-4 py-2 rounded-md my-2 focus:outline-none active:outline-none ${errors.nombre ? "border border-red-600" : ""
                }`}
              placeholder="Kelvin"
            />
            {errors.nombre && <span className="text-red-400">{errors.nombre.message}</span>}
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
                required: {
                  value: true,
                  message: "Los apellidos son requeridos"
                },
                minLength: {
                  value: 4,
                  message: "Los apellidos deben ser al menos 4 caracteres"
                },
                maxLength: {
                  value: 30,
                  message: "Los apellidos superan los 30 caracteres"
                },
              })}
              className={`w-[100%] bg-white text-gray-800 px-4 py-2 rounded-md my-2 focus:outline-none active:outline-none ${errors.apellidos ? "border border-red-600" : ""
                }`}
              placeholder="Guerrero Mite"
            />
            {errors.apellidos && <span className="text-red-400">{errors.apellidos.message}</span>}
          </div>
          <div className="flex flex-col">
            <label className="font-medium" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              {...register("email", {
                required: {
                  value: true
                },
                pattern: {
                  value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                  message: "Correo no válido"
                }
              })}
              className={`w-[100%] bg-white text-gray-800 px-4 py-2 rounded-md my-2 focus:outline-none active:outline-none ${errors.email ? "border border-red-600" : ""
                }`}
              placeholder="email@gmail.com"
            />
            {errors.email && <span className="text-red-400">{errors.email.message}</span>}
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
                required: {
                  value: true,
                  message: "Password es requerido"
                },
                minLength: {
                  value: 8,
                  message: "mínimo 8 caracteres"
                },
                maxLength: {
                  value: 14,
                  message: "Supera el máximo de 14 caracteres"
                },
                pattern: {
                  value: /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,14}$/,
                  message: "La contraseña debe tener entre 8 y 16 caracteres, al menos un dígito, al menos una minúscula y al menos una mayúsculas, no puede tener otros símbolos",
                }
              })}
              className={`w-[100%] bg-white text-gray-800 px-4 py-2 rounded-md my-2 focus:outline-none active:outline-none ${errors.passwd ? "border border-red-600" : ""
                }`}
              placeholder="w3Unpocodet0d0"
            />
            {errors.passwd && <span className="text-red-400">{errors.passwd.message}</span>}

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
              type="date"
              {...register("fecha_nacimiento", {
                required: true,
              })}
              className={`w-[213px] bg-white text-gray-800 px-4 py-2 rounded-md my-2 focus:outline-none active:outline-none ${errors.fecha_nacimiento
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
              className={`w-[100%] bg-white text-gray-800 px-4 py-2 rounded-md my-2 focus:outline-none active:outline-none ${errors.puesto ? "border border-red-600" : ""
                }`}
              placeholder="Programador"
            />
          </div>
          <div className="flex-grow">
            <label className="font-medium" htmlFor="puesto">
              Rol
            </label>
            <select name="rol" id="rol" {...register("rol", { required: true })} className={`w-[100%] bg-white text-gray-800 px-4 py-2 rounded-md my-2 focus:outline-none active:outline-none ${errors.rol ? "border border-red-600" : ""
              }`}>
              <option value="user">User</option>
              <option value="moderador">Moderador</option>
              <option value="Admin">Admin</option>
            </select>
          </div>
          <div className="flex flex-col flex-grow">
            <label htmlFor="" className="font-medium">Foto Usuario</label>
            {/* TODO: HAY QUE PERMITIR QUE SE ENVIE EL FORMULARIO TENGA IMAGEN O NO SELECCIONADA */}
            <input type="file" className="my-2" name="foto_usuario" accept="image/png, image/jpeg" {...register("foto_usuario", {
              required: false,
              validate: {
                lessThan1_5MB: (files) => files[0]?.size < 1572864 || "La imagen debe ser inferior a 1.5MB",
                acceptedFormats: (files) =>
                  ["image/jpeg", "image/png"].includes(
                    files[0]?.type
                  ) || "Solo PNG, JPEG"
              }
            })}
            />
            {errors.foto_usuario && <span className="text-red-400 font-medium">{errors.foto_usuario.message}</span>}
          </div>
          <div className="w-full flex gap-x-2 justify-center">
            <button
              type="submit"
              className="bg-cyan-600 hover:bg-cyan-700 text-white font-medium p-2 rounded-md"
            >
              Registrar
            </button>
            <button
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
