import { RiSearchLine } from "react-icons/ri";
import AddButton from "./addButton";
export default function Searcher() {
    return (
        <div className="h-16 px-0 md:px-4 flex items-center gap-x-4 border-b border-gray-200 justify-between">
            <div className="relative w-full pt-5">
                <RiSearchLine
                    fontSize={20}
                    className="text-gray-800 absolute top-2/3 right-7 -translate-y-1/2"
                />
                <input
                    type="text"
                    placeholder="Search..."
                    className="text-sm focus:outline-none active:outline-none border border-gray-300 w-full md:w-[24rem] h-10 pl-6 pr-2 rounded-full shadow-lg"
                />
            </div>
            <div className="pt-5">
                <AddButton nameItem={"Usuario"} />
            </div>
        </div>
    );
}