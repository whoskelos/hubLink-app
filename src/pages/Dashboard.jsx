import Card from "../components/Card";

export default function Dashboard() {
    return (
        <div>
            <header>
                <h1 className="text-6xl text-gray-800 font-medium tracking-wide text-center lg:text-start">
                    Dashboard
                </h1>
                <h3 className="text-xl text-center lg:text-start">
                    Bienvenido al sistema de gestion de inventario
                </h3>
            </header>
            <div className="py-4">
                <div className="cards flex flex-col md:flex-row justify-around items-center gap-y-3 md:gap-x-3">
                    <Card
                        rutaImg={"usuarios.svg"}
                        title={"Gestion de Usuarios"}
                    />
                    <Card
                        rutaImg={"dispositivos.svg"}
                        title={"Gestion de Dispositivos"}
                    />
                    <Card
                        rutaImg={"licencias.svg"}
                        title={"Gestion de Licencias"}
                    />
                </div>
            </div>
        </div>
    );
}
