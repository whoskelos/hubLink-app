import axios from "axios";

const API = "http://localhost:3000/api/auth/login";

export const loginRequest = (user) => axios.post(API, user);
