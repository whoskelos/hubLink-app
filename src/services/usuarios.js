const API_URL = "http://localhost:3000/api/usuarios"

export async function getUsersRequest() {
    return await fetch(API_URL)
}