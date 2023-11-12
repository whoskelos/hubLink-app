/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";

export function useFetch(url) {
    const [users, setUsers] = useState();

    useEffect(() => {
        fetch(url, {
            headers: {
                "x-access-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoia2VsdmluLmd1ZXJyZXJvQGdtYWlsLmNvbSIsImlhdCI6MTY5OTcwODk5NCwiZXhwIjoxNjk5NzEyNTk0fQ.UIga35tuzlTmydQLbil07zi4esMZCAZ3O85KqoQCW-s"
            }
        })
            .then((response) => response.json())
            .then((users) => setUsers(users));
    },[]);

    return { users }
}
