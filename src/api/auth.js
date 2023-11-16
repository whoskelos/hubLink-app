import axios from "./axios";

const API = "/auth/login";

export const loginRequest = (user) => axios.post(API, user);
