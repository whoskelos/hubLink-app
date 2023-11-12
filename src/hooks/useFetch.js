/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";

export function useFetch(url) {
    const [users, setUsers] = useState();

    useEffect(() => {
        fetch(url, {
            headers: {
                "x-access-token": ""
            }
        })
            .then((response) => response.json())
            .then((users) => setUsers(users));
    },[]);

    return { users }
}
