/* eslint-disable react/prop-types */
export default function LoginForm({
    email,
    passwd,
    handleSubmit,
    handleEmailChange,
    handlePasswdChange,
}) {
    return (
        <div className="w-full p-4">
            <form
                onSubmit={handleSubmit}
                className="bg-gradient-to-br from-cyan-400 to-cyan-800 w-[40%] rounded-md flex flex-col items-center gap-4 p-6 m-auto"
            >
                <div>
                    <input
                        className="p-2 rounded-md active:outline-none"
                        onChange={handleEmailChange}
                        type="email"
                        name="email"
                        id="email"
                        placeholder="kelvin@gmail.com"
                        value={email}
                    />
                </div>
                <div>
                    <input
                        className="p-2 rounded-md"
                        onChange={handlePasswdChange}
                        type="password"
                        name="passwd"
                        id="passwd"
                        placeholder="Password"
                        value={passwd}
                    />
                </div>
                <button
                    className="bg-white border border-cyan-700 hover:bg-gray-300 text-black transition-colors font-medium p-3 rounded-md "
                    type="submit"
                >
                    Entrar
                </button>
            </form>
        </div>
    );
}
