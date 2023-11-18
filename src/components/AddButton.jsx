/* eslint-disable react/prop-types */
import { RiAddCircleLine } from "react-icons/ri";

export default function AddButton({ nameItem }) {
    return (
        <button className="bg-cyan-600 hover:bg-cyan-700 transition-colors rounded-full flex items-center gap-x-1 text-white font-medium text-xl py-1 px-4">
            <RiAddCircleLine className="text-2xl" />
            <span>{nameItem}</span>
        </button>
    );
}
