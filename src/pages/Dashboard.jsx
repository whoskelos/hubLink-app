import Card from "../components/Card";

export default function Dashboard() {
    return (
        <div className="py-4">
            <header className="flex flex-col md:flex-row w-full md:justify-between item-start md:items-center">
                <div>
                    <span className="text-lg text-gray-800 tracking-wide text-center lg:text-start">
                        Dashboard
                    </span>
                    <h1 className="text-5xl text-gray-700 tracking-tight font-bold">
                        Overview
                    </h1>
                </div>
            </header>
            <div className="py-4">
                <div className="cards flex flex-col md:flex-row justify-around items-center gap-y-3 md:gap-x-3">
                    <Card
                        rutaImg={"usuarios.svg"}
                        title={"Gestion de Usuarios"}
                        ruta={"/usuarios"}
                    />
                    <Card
                        rutaImg={"dispositivos.svg"}
                        title={"Gestion de Dispositivos"}
                        ruta={"/dispositivos"}
                    />
                    <Card
                        rutaImg={"licencias.svg"}
                        title={"Gestion de Licencias"}
                        ruta={"/licencias"}
                    />
                </div>
            </div>
        </div>
    );
}
