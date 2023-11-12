/* eslint-disable no-unused-vars */
import LoginForm from "../components/LoginForm";
import { useState } from "react";
import { loginRequest } from "../services/login";
import { setToken } from "../services/usuarios";
export default function Login() {
    const [email, setEmail] = useState("");
    const [passwd, setPasswd] = useState("");
    const [user, setUser] = useState(null);

    const handleLogin = async (event) => {
        event.preventDefault();
        try {
            const user = await loginRequest({
                email,
                passwd,
            });
            
            window.localStorage.setItem('loggedUser', JSON.stringify(user))
            
            setToken(user.token)

            setUser(user);
            setEmail("");
            setPasswd("");
        } catch (error) {
            console.error(error);
        }
        
    };

    return (
        <div className="flex flex-col">
            <header>
                <h1 className="text-6xl text-gray-800 font-medium tracking-wide text-center lg:text-start">
                    Login
                </h1>
            </header>
            <div className="flex-grow py-4">
                <LoginForm
                    email={email}
                    passwd={passwd}
                    handleEmailChange={({ target }) => setEmail(target.value)}
                    handlePasswdChange={({ target }) => setPasswd(target.value)}
                    handleSubmit={handleLogin}
                ></LoginForm>
            </div>
        </div>
    );
}
