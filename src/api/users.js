import axios from "axios";

const API_URL = "http://localhost:3000/api/usuarios";

// Crear una instancia de Axios con opciones por defecto
const axiosInstance = axios.create({
    baseURL: API_URL,
    headers: {
      common: {
        "x-access-token": null, // Este valor se sobrescribirá antes de cada solicitud
      },
    },
  });
  
  // Función para establecer el token en la instancia de Axios
  export const setToken = (newToken) => {
    axiosInstance.defaults.headers.common["x-access-token"] = newToken;
  };
  
  // Definir diferentes funciones para las solicitudes
  export const getUsersRequest = () => axiosInstance.get("/");
  export const getUserRequest = (id) => axiosInstance.get(`/${id}`);
  export const createUserRequest = (user) => axiosInstance.post("/", user);
  export const updateUserRequest = (user, id) => axiosInstance.patch(`/${id}`, user);
  export const deleteUserRequest = (id) => axiosInstance.delete(`/${id}`);
