/* eslint-disable react-hooks/exhaustive-deps */
const API_URL = "http://localhost:3000/api/usuarios";
let token = null;

export function setToken(newToken) {
    token = newToken;
}

import { useState, useEffect } from "react";

export function useFetch() {
    const [users, setUsers] = useState();

    useEffect(() => {
        fetch(API_URL, {
            headers: {
                "x-access-token": token,
            },
        })
            .then((response) => response.json())
            .then((users) => setUsers(users));
    }, []);

    return { users };
}
