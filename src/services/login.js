
const API_URL = "http://localhost:3000/auth/login";

export async function loginRequest({user, passwd}) {
    return await fetch(API_URL, {
        body: {
            user,
            passwd
        }
    })
}