import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useUsers } from "../context/UserContext";

export default function UserDetail() {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const params = useParams();
  const { getUserById } = useUsers();
  useEffect(() => {
    if (params.id) {
      // Hago petición
      async function fetchDataUser() {
        const newUser = await getUserById(params.id);
        setUser(newUser);
        setIsLoading(false);
      }
      fetchDataUser();
    }
  }, []);

  return (
    <>
      <div>
        {isLoading ? (
          <p>Loading ...</p>
        ) : (
          <div className="py-4">
            <header>
              <div>
                <span className="text-lg text-gray-800 tracking-wide text-center lg:text-start">
                  Detalle de {user ? user.nombre : ""}
                </span>
                <h1 className="text-5xl text-gray-700 tracking-tight font-bold">
                  Overview
                </h1>
              </div>
            </header>
          </div>
        )}
      </div>
    </>
  );
}
