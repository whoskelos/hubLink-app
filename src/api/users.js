import axios from 'axios'

const API_URL = "http://localhost:3000/api/usuarios"
let token;

export const setToken = (newToken) => {
    token = newToken;
}

export const getUsersRequest = () => axios.get(API_URL,{
    headers: {
        "x-access-token": token
    }
})
export const getUserRequest = (id) => axios.get(`${API_URL}/${id}`)
export const createUserRequest = (user) => axios.post(API_URL, user)
export const updateUserRequest = (user,id) => axios.patch(`${API_URL}/${id}`,user)
export const deleteUsersRequest = (id) => axios.delete(`${API_URL}/${id}`)