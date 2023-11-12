const API_URL = "http://localhost:3000/api/auth/login";

export async function loginRequest(credentials) {
    let res = null;
    await fetch(API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
    })
        .then((response) => response.json())
        .then((data) => (res = data));

    return res;
}
