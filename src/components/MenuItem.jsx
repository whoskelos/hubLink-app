/* eslint-disable react/prop-types */
import { RiDashboardLine, RiShieldUserLine, RiDeviceLine, RiTicket2Line } from "react-icons/ri";

export function MenuItem({ nombre }) {
    let content;
    if (nombre === 'Dashboard') {
        content = <RiDashboardLine />
    } else if (nombre === 'Usuarios') {
        content = <RiShieldUserLine />
    } else if (nombre === 'Dispositivos') {
        content = <RiDeviceLine />
    } else {
        content = <RiTicket2Line />
    }
    return (
        <div className="flex items-center gap-4 hover:bg-cyan-600 p-4 text-gray-400 hover:text-white font-semibold rounded-lg transition-colors">
            {content}
            {nombre}
        </div>
    )
}